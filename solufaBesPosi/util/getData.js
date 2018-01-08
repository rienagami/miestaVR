function getData(callback) {
    var csvList = [
        {
         name:'viewside',
            url:'csv/viewside.csv'
            
        },
     {
         name:'viewup',
         url:'csv/viewup.csv'
     },
        {
         name:'viewup2',
         url: 'csv/viewup2.csv'    
        },
    
 ];
    
    
    var jsonList = [
        {
         name:'screenData',
         url:'json/screenData.json'    
        },
        {
        name:'theaterData',
        url:'json/theaterData.json'    
        }
        
    ];
    
    var jsonData = {
        viewside:null,
        viewup:null,
        viewup2:null,
        screenData:null,
        theaterData:null
    };
    
    var endedCount = 0;
    function checkEnd(){
        endedCount +=1;
        if (endedCount === csvList.length + jsonList.length){
            callback(jsonData);
        }
    }
    
    csvList.forEach(function(csvData){
             $.ajax({
         url:'/asset/' + csvData.url,
         success:function(csv){
             jsonData[csvData.name] = JSON.parse('[[' + csv.split('\n').join('],[') + ']]');
             checkEnd();
             
             
         }
     });
        
    });
    
    jsonList.forEach(function(json){
         $.getJSON('/asset/'+ json.url,function(response){
             jsonData[json.name] = response;
             checkEnd();
             
             
         });
      
    });
}
