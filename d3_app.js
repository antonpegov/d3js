
// Sample#1 - simple SVG Circle
import {_SETUP1} from './modules/sample1.js';
let svg = d3.select('.sample1').append('svg').style('overflow', 'visible')
svg.attr('width', _SETUP1.width).attr('height', _SETUP1.height);
svg.append('circle')
    .attr('r', _SETUP1.scales.r(1380000000))
    .attr('cx', _SETUP1.scales.x(13300))
    .attr('cy', _SETUP1.scales.y(90))
    .attr('fill','red');


// Sample#2 - Simple Histogram
import {_SETUP2} from './modules/sample2.js';

let bars;       // Массив столбцов гистограмы
let draw;       // Функция отрисовки гистограмы
let toNumber;   // Функция подготовки данных - преобразует string  в number
let chart = d3.select('.sample2').append('svg').attr('width', _SETUP2.width);

draw = (data) => {
    _SETUP2.scale.domain([0, d3.max(data, (d) => +d.value)]); // выставить границы области данных
    chart.attr('height', _SETUP2.height * data.length); // выставить высоту svg-контейнера         
    bars = chart.selectAll('g') // собираем все group tags - аналог div в html
        .data(data)     // цепляем массив данных к массиву элементов d3
            .enter()    // собираем массив данных, которым не хватило элементов 'g'
        .append('g')    // добавляем отсутствующие элементы 'g' на страницу
            .attr('transform', (d,i) => 'translate(0,'+ i*_SETUP2.height+')')
    bars.append('rect')
        .attr('width', (d) => _SETUP2.scale(d.value))
        .attr('height', _SETUP2.height - 1)
    bars.append('text')
        .attr('x', (d) => _SETUP2.scale(d.value - 1))
        .attr('y', +_SETUP2.height/2)
        .attr('dy', '.4em')
        .text((d) => d.value)
}

toNumber = (d) => { d.value = +d.value; return d;}
d3.tsv('./res/data.tsv', toNumber, draw);

// Sample#2 - Simple Histogram
import {draw as draw_sample_3} from './modules/sample3.js';
d3.tsv("./res/world_cup.tsv", draw_sample_3);