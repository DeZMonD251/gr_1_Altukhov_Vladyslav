let numberOfSquare = 1000;
/*
1. Создать 1000 квадратов голубого цвета размером 70*70 пикселей,
и распологает их горизонтально.
*/
function firstTask() {
  let blockSquare = document.createDocumentFragment();
  for (let i = 0; i < numberOfSquare; i++) {
    blockSquare = document.createElement("div");
    $(blockSquare)
      .addClass("firstTask skyblueSquare square")
      .appendTo($("#mainDiv"))
      .text("");
  }
}
/*
2. Изменить цвет каждого квадрата на фиолетовый,
 и изменить размер 100*100 пикселей.
*/
function secondTask() {
  $("div.square")
    .removeClass("firstTask skyblueSquare")
    .addClass("secondTask purpleSquare");
}
/*
3. Вывести на каждом квадрате его порядковый номер.
*/
function thirdTask() {
  let count = 0;
  $("div.square").each(function () {
    $(this).text(`${count}`);
    count++;
  });
}
/*
4. Изменить цвет каждого 3-го квадрата на красный,
каждый 15 квадрат сделать треугольником цветом хаки.
*/
function fourthTask() {
  let count = 0;
  $("div.square").each(function () {
    if (count % 3 === 0) {
      $(this).removeClass("purpleSquare").addClass("redSquare");
    }
    if (count % 15 === 0 && count !== 0) {
      $(this).removeClass("secondTask redSquare").addClass("triangle");
      console.log(count);
    } else {}
    count++;
  });
}
/*
5. Удалить все красные квадраты.
*/
function fifthTask() {
  $("div.redSquare").remove();
}
setTimeout(firstTask, 2000);
setTimeout(secondTask, 2000 * 2);
setTimeout(thirdTask, 2000 * 3);
setTimeout(fourthTask, 2000 * 4);
setTimeout(fifthTask, 2000 * 5);