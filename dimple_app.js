// d3.select(window).on("load", ()=>{
// достаточно было перенести скрипты в конец body 

var chart = dimple.newSvg("body", 800, 600);
    var data = [
        { "Word":"Hello", "Awesomeness":2000 },
        { "Word":"World", "Awesomeness":3000 }
    ];
    var chart = new dimple.chart(chart, data);
    chart.addCategoryAxis("x", "Word");
    chart.addMeasureAxis("y", "Awesomeness");
    chart.addSeries(null, dimple.plot.bar);
    chart.draw();


//});