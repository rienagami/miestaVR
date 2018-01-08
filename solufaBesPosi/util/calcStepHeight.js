function calcStepHeight(viewside,stepN){
    var stepHeight = 0;
    for (var k = 0; k< viewside.length; k += 1){
        stepHeight += viewside[k][stepN];
    }
    return stepHeight;
}
