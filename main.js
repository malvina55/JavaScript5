let user = {};

for (let i = 1; i <= 10; i++) {
  let name = prompt("Введите имя");
  let age = prompt("Введите возраст");

  user[i] = {
    names: name,
    ages: age,
  };
}

for (let key in user) {
  console.log(`Пользователь ${key}`);
  for (let newkey in user[key]) {}
    console.log(`Ваше имя - ${user[key].names}`);
    console.log(`Ваш возраст - ${user[key].ages}`);
 
}

let rec = receipt();
let m = "Вы заказали: ";
let d = 9000;

for (let key in rec) {
  m = m + " " + `${key}`;
  for (let newkey in rec[key]) {
    m = newkey == "info" ? `${m} ${rec[key][newkey]}` : m + "";
    d = newkey == "price" ? d + rec[key][newkey] : d;
  }
}

console.log(`${m} | Общая стоимость: ${d} | c доставкой (9000 сум)`);