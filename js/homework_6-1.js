/*Напишите функцию get_count_work_days(date1, date2), 
которая будет считать количество рабочих дней между 
двумя заданными датами.*/
function get_count_work_days(date1, date2) {
    if (date1 instanceof Date && date2 instanceof Date) {
        var count = 0;
        var curDate = date1;
        while (curDate <= date2) {
            var dayOfWeek = curDate.getDay();
            if(!((dayOfWeek == 6) || (dayOfWeek == 0)))
               count++;
            curDate.setDate(curDate.getDate() + 1);
        }
        return count;
    } else { 
        return 'Error';
    }
    
}
date_1 = new Date(2021,10, 8);
date_2 = new Date(2021,10, 22);
console.log(get_count_work_days(date_1, date_2));