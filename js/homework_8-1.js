function createBlockSquare () {
    let blockSquare = document.createDocumentFragment();;
    for (let i = 0; i < 10; i++) {
        blockSquare = document.createElement('div');
        blockSquare.classList.add('blueSquare');
        blockSquare.classList.add('firstTask');
        blockSquare.classList.add('square');
        container.appendChild(blockSquare);
    }
}
function yellowSquare () {
    for (let i = 0; i < 10; i++) { 
        container.children[i].classList.remove('blueSquare');
        container.children[i].classList.remove('firstTask');
        container.children[i].classList.add('greenSquare');
        container.children[i].classList.add('secondTask');
    }
}
function task3 () {
    for (let i = 0; i < 10; i++) {
        if (i % 3 === 0) {
            container.children[i].classList.remove('greenSquare');
            container.children[i].classList.add('redSquare');
        } else {
            container.children[i].classList.remove('greenSquare');
            container.children[i].classList.add('yellowSquare');
        }
    }
}
function removeSquare () {
    for (let i = 0; i < 10; i++) {
        container.children[0].remove();
    }
    let body = document.body;
    body.classList.add('blackBackground');
}
let container = document.createElement('div');
document.body.append(container);
setTimeout(createBlockSquare, 0);
setTimeout(yellowSquare, 3000 * 1);
setTimeout(task3, 3000 * 2);
setTimeout(removeSquare, 3000 * 3);