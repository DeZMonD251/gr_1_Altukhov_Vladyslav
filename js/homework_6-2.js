/*Напишите функцию get_count_days(date), которая будет считать 
количество дней до Нового года от date, если оно задано, 
иначе посчитать количество дней от текущей даты*/
function get_count_days(date) {
    now = new Date();
    ny = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
    if (isNaN(date)) {
        date = new Date();
        return Math.floor((ny.getTime() - date.getTime()) / 86400000);
    } else {
        return Math.floor((ny.getTime() - date.getTime()) / 86400000);
    }
}
date_1 = new Date(2021,10, 22);
console.log(get_count_days());