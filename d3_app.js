'use strict';

import {_SETUP} from './modules/setup.js';
let svg = d3.select('.main').append('svg').style('overflow', 'visible')
svg.attr('width', _SETUP.width).attr('height', _SETUP.height);
svg.append('circle')
    .attr('r', _SETUP.scales.r(1380000000))
    .attr('cx', _SETUP.scales.x(13300))
    .attr('cy', _SETUP.scales.y(90))
    .attr('fill','red');
