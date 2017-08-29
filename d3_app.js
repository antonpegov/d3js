let svg;

// Sample#1 - simple SVG Circle
import {_SETUP1} from './modules/sample1.js';
svg = d3.select('.sample1').append('svg').style('overflow', 'visible')
svg.attr('width', _SETUP1.width).attr('height', _SETUP1.height);
svg.append('circle')
    .attr('r', _SETUP1.scales.r(1380000000))
    .attr('cx', _SETUP1.scales.x(13300))
    .attr('cy', _SETUP1.scales.y(90))
    .attr('fill','red');


// Sample#2 - Simple Histogram
import {_SETUP2} from './modules/sample2.js';
