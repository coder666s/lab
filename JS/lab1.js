
//номер 1

console.log("Номер 1\n");

console.log("Предположение: Number");
console.log("Фактический (typeof(9)): " + typeof(9)+"\n");

console.log("Предположение: Number");
console.log("Фактический (typeof(1.2)): " + typeof(1.2)+"\n");

console.log("Предположение: Number");
console.log("Фактический (typeof(NaN)): " + typeof(NaN)+"\n");

console.log("Предположение: String");
console.log("Фактический (typeof(\"Hello World\")): " + typeof("Hello World")+"\n");

console.log("Предположение: Bool");
console.log("Фактический (typeof(true)): " + typeof(true)+"\n");

console.log("Предположение: Bool");
console.log("Фактический (typeof(2 != 1)): " + typeof(2 != 1)+"\n");

console.log("Предположение: String");
console.log("Фактический (\"сыр\" + \"ы\"): " + ("сыр" + "ы") +"\n");

console.log("Предположение: String");
console.log("Фактический (\"сыр\" - \"ы\"): " + ("сыр" - "ы") +"\n");

console.log("Предположение: String");
console.log("Фактический (\"2\" + \"4\"): " + ("2" + "4")+"\n");

console.log("Предположение: String");
console.log("Фактический (\"2\" - \"4\"): " + ("2" - "4")+"\n");

console.log("Предположение: String");
console.log("Фактический (\"Сэм\" + 5): " + ("Сэм" + 5)+"\n");

console.log("Предположение: String");
console.log("Фактический (\"Сэм\" - 5): " + ("Сэм" - 5)+"\n");

console.log("Предположение: Object");
console.log("Фактический (99 * \"шары\"): " + (99 * "шары")+"\n");

console.log ("Номер 2\n");

a = 2;
b = 3;
p = (a*2)+(b*2);
s = 2*3;
soot = p/s;
console.log (a + " " + b);
console.log (p)
console.log (s)
console.log (soot);

console.log("Номер 3");

//console.log ("введите значение: ");
t = prompt("Номер 3; Введите значение: ");
console.log(t+"°C соответствует " + ((9/5)*t+32)+"°F");
console.log(t+"°F соответствует " + ((5/9)*(t-32))+"°C");

console.log("Номер 4");

year = prompt("Номер 4; Введите год: ");
year_v = year%4;
if(year_v > 1)
{
alert("год обычный");
}
else
{
    year_s = year%100;
    if(year_s>0)
    {
        alert("год високосный")
    }
    else
    {
        alert("Это столетие!")
    }
}