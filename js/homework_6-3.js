/*
Напишите функцию get_day(date), 
которая возвращает день недели от заданной даты. 
Например: get_day(’27-11-1988’) должно вернуть «воскресенье»
*/
function get_day(date) {
	var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	if (date instanceof Date) {
        return days[date.getDay()];
    }
}
var date = new Date(2021,10,9);
console.log(get_day(date));