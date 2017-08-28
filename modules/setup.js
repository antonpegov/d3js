'use strict';

const _SETUP = {
    width: 800,
    height: 600,
    scales: {
        x: undefined,   // масштаб по x
        y: undefined,   // масштаб по y
        r: undefined    // масштаб радиуса
    }
}
_SETUP.scales.x = d3.scaleLog()
    .domain([250, 100000])
    .range([0,_SETUP.width])
_SETUP.scales.y = d3.scaleLinear()
    .domain([15, 90])
    .range([_SETUP.height, 0])
_SETUP.scales.r = d3.scaleLinear()
    .domain([52070, 1380000000])
    .range([10,50])

export {_SETUP};