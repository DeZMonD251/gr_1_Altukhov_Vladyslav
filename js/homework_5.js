/*Напишите функцию get_max( arr ), которая находит максимальное значение в заданном массиве.*/
function get_max(arr) {
  max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
/*Напишите функцию get_random( arr ), которая вернет случайный элемент входящего массива arr.*/
function get_random(arr) {
  return arr[parseInt(Math.random() * (arr.length - 0) + 0)];
}
/*Напишите функцию get_order(string), которая отсортирует все слова в заданном предложении string в алфавитном порядке. 
Например: get_order("ноты акустика гитара"), функция должна вернуть "акустика гитара ноты"
*/
function get_order(str) {
  var arr = str.split(" "),
    alpha = arr.sort().join(" ").replace(/\s+/g, " ");
  return alpha;
}
console.log(get_order("ноты акустика гитара"));
arr = new Array();
count = 3;
arr_size = parseInt(prompt(`Введите размер массива:`));
while (isNaN(arr_size) && count > 0 && arr_size > 0) {
  arr_size = parseInt(
    prompt(`Введите число больше 0! Количество оставшихся попыток: ${count}`)
  );
  count--;
}
if (count !== 0) {
  count = 3;
  for (i = 0; i < arr_size; i++) {
    if (count !== 0) {
      count = 3;
      arr[i] = parseInt(prompt(`Введите arr${i}:`));
      while (isNaN(arr_size) && count > 0) {
        arr[i] = parseInt(
          prompt(`Введите число! Количество оставшихся попыток: ${count}`)
        );
        count--;
      }
    } else {
      break;
    }
  }
  if (count !== 0) {
    alert(`Максимальное число в массиве: ${get_random(arr)}`);
  }
}
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
function sum_ratings(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; // 650
}
function min_ratings(points) {
  min = Infinity;
  for (let point of Object.values(points)) {
    if (point < min) {
      min = point;
    }
  }
  return getKeyByValue(points, min);
}
function max_ratings(points) {
  max = -Infinity;
  for (let point of Object.values(points)) {
    if (point > max) {
      max = point;
    }
  }
  return getKeyByValue(points, max);
}
points = {
  Вася: 200,
  Петя: 300,
  Даша: 250,
  Андрей: 150,
  Сергей: 450,
};
console.log(min_ratings(points));
console.log(max_ratings(points));
console.log(sum_ratings(points));
