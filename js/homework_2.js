const PI = 3.14159;
distance = parseFloat(prompt(`Value distance in meters:`));
count = 0;
while (isNaN(distance) && count < 3) {
  distance = parseFloat(
    prompt(`Distance must be a number!!! Value distance in kilometers:`)
  );
  count++;
}
if (count !== 3) {
  count = 0;
  wheel_diameter = parseFloat(prompt(`Value wheel_diameter in inches:`));
  while (isNaN(wheel_diameter) && count < 3) {
    wheel_diameter = parseFloat(
      prompt(`Distance must be a number!!! Value distancein inches:`)
    );
    count++;
  }
  if (count !== 3) {
    wheel_diameter = wheel_diameter * 0.0254; //inches to meters
    circumference = PI * wheel_diameter;
    number_of_wheel_revolutions = distance / circumference;
    alert(
      `Количество оборотов колеса: ${number_of_wheel_revolutions}\nКоличество оборотов четырёх колёс: ${
        number_of_wheel_revolutions * 4
      }`
    );
  }
}

count = 0;
days = parseInt(prompt(`Value day:`));
while (isNaN(days)) {
  days = parseFloat(prompt(`Day must be a number!!! Value day:`));
  count++;
}
mod100 = days % 100;
mod10 = days % 10;
if (count !== 3) {
  if (mod100 >= 5 && mod100 <= 20) {
    alert(`${days} дней`);
  } else if (mod10 === 1) {
    alert(`${days} день`);
  } else {
    alert(`${days} дня`);
  }
}
