const setup = {
    width: 600,         // ширина бара (макс.)
    height: 40,         // высота бара
    scale:  undefined   // масштаб по x
}
setup.scale = d3.scaleLinear()
    .range([0,setup.width])
    // domain инициируем после получения данных

export {setup as _SETUP2} ;
