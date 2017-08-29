const setup = {
    width: 800,
    height: 600,
    scales: {
        x: undefined,   // масштаб по x
        y: undefined,   // масштаб по y
        r: undefined    // масштаб радиуса
    }
}
setup.scales.x = d3.scaleLog()
    .domain([250, 100000])
    .range([0,setup.width])
setup.scales.y = d3.scaleLinear()
    .domain([15, 90])
    .range([setup.height, 0])
setup.scales.r = d3.scaleLinear()
    .domain([52070, 1380000000])
    .range([10,50])

export {setup as _SETUP1} ;