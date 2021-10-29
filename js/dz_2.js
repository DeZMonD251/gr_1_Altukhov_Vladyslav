/*
const PI = 3.14159;
distance = parseFloat(prompt(`Value distance in kilometers:`));
while (isNaN(distance)) {
    distance = parseFloat(prompt(`Distance must be a number!!! Value distance in kilometers:`));        
}
distance = distance * Math.pow(10, 3);
wheel_diameter = parseFloat(prompt(`Value wheel_diameter in inches:`));
while (isNaN(wheel_diameter)) {
    wheel_diameter = parseFloat(prompt(`Distance must be a number!!! Value distancein inches:`));        
}
wheel_diameter = wheel_diameter * 0.0254;
circumference = PI * wheel_diameter;
number_of_wheel_revolutions =  distance / circumference;
alert(`Количество оборотов колеса: ${number_of_wheel_revolutions}\nКоличество оборотов четырёх колёс: ${number_of_wheel_revolutions * 4}`);
*/
function declension(days) {
    last_digit = days % 10;
    if (last_digit === 1) {
        alert(`${days} день`);
    } else if (last_digit >= 2 && last_digit <= 4) {
        alert(`${days} дня`);
    } else if (last_digit >= 5 && last_digit <= 9 || last_digit === 0) {
        alert(`${days} дней`);
    }
}
days = parseInt(prompt(`Value day:`));
while (isNaN(days)) {
    days = parseFloat(prompt(`Day must be a number!!! Value day:`));        
}
if (days <= 10) {
    declension(days);
} else if (days > 10 && days <= 20) {
    alert(`${days} дней`);
} else if (days > 20) {
    declension(days);
}
