let container = document.createElement("div");
$(container).addClass('container').appendTo('body');
let container1 = document.createElement("div");
$(container1).addClass('container1 redSquare').appendTo('.container');
let container2 = document.createElement("div");
$(container2).addClass('container2 purpleSquare').appendTo('.container');

$(container1).mouseover(function () {
    console.log(`Высота: ${$(this).height()}; Ширина: ${$(this).outerWidth()}`);
});
$(container2).mouseover(function () {
    console.log(`Высота: ${$(this).height()}; Ширина: ${$(this).outerWidth()}`);
});
$(container1).click(function () {
    alert('Красный');
});
$(container2).click(function () {
    alert('Фиолетовый');
});