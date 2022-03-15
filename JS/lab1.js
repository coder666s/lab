
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
console.log (a +" " + b);
console.log (p)
console.log (s)
console.log (soot);