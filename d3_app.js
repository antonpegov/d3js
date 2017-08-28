const _SETUP = {
    width: 800,
    height: 600,
    scales: {}
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

let svg = d3.select('.main').append('svg').style('overflow', 'visible')
svg.attr('width', _SETUP.width).attr('height', _SETUP.height);
svg.append('circle')
    .attr('r',_SETUP.scales.r(1380000000))
    .attr('cx',_SETUP.scales.x(13300))
    .attr('cy',_SETUP.scales.y(90))
    .attr('fill','red')

