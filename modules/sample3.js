function draw(data) {
    'use strict';
    let mySVG, myChart, xAxis, yAxis;
    let el = "body .sample3",
        width = 1400,
        height = 600;

    d3.select(el).style('width', width+'px');
    mySVG = dimple.newSvg(el, width, height);
    myChart = new dimple.chart(mySVG, data);
    xAxis = myChart.addTimeAxis("x", "year"); 
    yAxis = myChart.addMeasureAxis("y", "attendance");
    myChart.addSeries(null, dimple.plot.bar);
    myChart.draw();
};

export {draw};