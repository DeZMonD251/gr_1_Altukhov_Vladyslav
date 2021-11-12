let container = document.createElement('div');
container.classList.add('container');
document.body.append(container);
let container1 = document.createElement('div');
container1.classList.add('container1');
container1.classList.add('redSquare');
let container2 = document.createElement('div');
container2.classList.add('container2');
container2.classList.add('greenSquare');
container.appendChild(container1);
container.appendChild(container2);

container1.addEventListener('mouseenter', e => {
    console.log('Высота: ' + container1.scrollHeight + ' Ширина: ' + container1.scrollWidth);
});
container1.addEventListener('click', e => {
    alert('Красный цвет');
});
container2.addEventListener('mouseenter', e => {
    console.log('Высота: ' + container2.scrollHeight + ' Ширина: ' + container2.scrollWidth);
});
container2.addEventListener('click', e => {
    alert('Зелёный цвет');
});