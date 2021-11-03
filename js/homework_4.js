/* Напишите функцию get_min( arr ), которая находит минимальное значение в заданном массиве. */
function get_min(arr) {
  min = Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
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
            )
            count --;
        }
    } else {
      break;
    }
  }
  if (count !== 0) {
    alert(`Минимальное число в массиве: ${get_min(arr)}`);
  }
}
/*Создайте массив с четными числами в диапазоне от 500 до 888 включительно.*/
arr = new Array();
for (i = 500; i <= 888; i++) {
  if (i % 2 === 0) {
    arr.push(i);
  }
}
for (i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
}
/*Необходимо написать функцию, которая принимает слово в виде строки, 
функция будет возвращать слово с буквами в обратном порядке, 
например в функцию передаем слово “ТЕЛЕФОН”, на выходе имеем слово «НОФЕЛЕТ».*/
function reverse(string) {
  arr_string = new Array();
  arr1 = new Array();
  arr_string = string.split('');
  for (i = arr_string.length - 1; i >= 0; i--) {
    arr1.push(arr_string[i]);
  }
  return arr1.join('');
}
string = prompt(`Введите строку:`);
console.log(reverse(string));
/*ЗАДАНИЕ С ВЫСОКИМ УРОВНЕМ
Необходимо написать мини-игру «Города». Нужно бесконечно запрашивать у пользователя ввод города. 
Проверять если последняя буква предыдущего слова совпадает с первой буквой следующего слова – засчитываем +1 очко. 
Если не совпадает выдаем сообщение «Игра окончена. Ваши очки: {кол-во очков}».*/
count = -1;
town1_arr = new Array();
town2_arr = new Array();
do {
  town1 = prompt(`Введите название города:`);
  town2 = prompt(`Введите название следующего города:`);
  count++;
  town1_arr = town1.split('');
  town2_arr = town2.split('');
} while(town1_arr[town1_arr.length-1] === town2_arr[0] && count < 10);
console.log(count);
if (count === 0) {
  alert(`Вы проиграли не набрав ни одного очка.`);
} else if (count > 0 && count < 10) {
  alert(`Ваш счет: ${count}`);
} else {
  alert(`Поздравляю! Вы набрали максимальное количество очков!`);
}