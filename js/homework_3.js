function search_for_numbers(first_nimber, second_number, divider){
    count = 0;
    sum = 0;
    for (i = first_nimber; i <= second_number; i++) {
        if (i % divider === 0) {
            sum += i;
            count++;
        }
    }
    if (count === 0) {
        return `На данном промежутке чисел кратных ${divider} нет.`;
    } else {
        return `Количество чисел кратных ${divider}: ` + count + '\n' + 'Их сумма: ' + sum;
    }
}
divider = 6;
count = 3;
first_number = parseInt(prompt(`Первое число:`));
while (isNaN(first_number) && count > 0) {
  first_number = parseInt(
    prompt(`Введите число! Количество оставшихся попыток: ${count}`)
  );
  count--;
}
if (count !== 0) {
  count = 3;
  second_number = parseInt(prompt(`Второе число:`));
  while (isNaN(second_number) && count > 0) {
    second_number = parseInt(prompt(`Введите число! Количество оставшихся попыток: ${count}`));
    count--;
  }
  if (count !== 0) {
    if (first_number > second_number) {
        alert(search_for_numbers(second_number, first_number, divider));
    }
    if (first_number < second_number) {
        alert(search_for_numbers(first_number, second_number, divider));
    }
    if (first_number === second_number) {
        alert(`Вы ввели два одинаковых числа.`);
    }
  }
}

const MAX_COUNT_ATTEMPT = 5;
min = 0; max = 100;
attempt = 0;
do {
    num = min + (max - min) / 2;
    answer = confirm(`Ваше число больше числа ${num}?`);
    attempt++;
    if (answer) {
        min = num;
    } else {
        max = num;
    }
} while ((max - min > 1) || attempt < MAX_COUNT_ATTEMPT);
alert(`Результат ${~~(max)}`);