// array هو تطبيق المصفوفة في الرياضيات في البرمجة
let data = ["html", "css", 12, true, 12, false, 14.25, 45.25];
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(typeof data[0]);
console.log(typeof data[1]);
console.log(typeof data[2]);
for (let d in data) {
  console.log(d); // index
  console.log(data[d]); // values
}
for (let d of data) {
  console.log(d); // values
  console.log(data.indexOf(d)); // index
}
/*
forEach()
ميثود مخصوصة مع الارراي
بتلف على كل عنصر من عناصر الارراي ثم تقوم باداء وظيفه معينه
يكتب بداخلها function
syntax
array.forEach(function(parameter - array element){ our code })
الفانكشن لا نعطي لها اسم لانها تكتب داخل فوراتش ولا يتم استدعائها
لازم تاخد براميتر لان هذا البراميتر هو العنصر الموجود داخل الارراي forEach الفانكشن التي يتم كتابتها داخل
*/
const dv = document.getElementById("dv");
data.forEach(function (e) {
  // dv.innerHTML =  "<p>e</p>"
  // format string ${}
  // بيخلي المبرمج يقدر يحط متغير داخل نصوص
  // ` ${variable name} `
  dv.innerHTML = `<p>${e}</p>`;
  // هنلاحظ ان اخر عنصر في الارراي هو اللى ظهر فقط
  // لان الفرونت اند بيعمل اللوب كالاتي
  // بيعرض اول عنصر ثم يمسحه ويعرض العنصر الذي يليه وهكذا حتى اخر عنصر
});
const dv1 = document.getElementById("dv1");
data.forEach(function (e) {
  dv1.innerHTML += `<p>${e}</p>`;
});
const dv2 = document.getElementById("dv2");
data.forEach(function (e) {
  dv2.innerHTML += `<div class="dv3">${e}</div>`;
});
// طرق تعريف الارراي
let r = [10, 20, 30.25, true];
let arr = [];
// constructor
let info = new Array(1, 2, 25.25, true);
let x = new Array(3); // 3 is array length => x = ["Dd", 10, true]
// constructor بتجنب مشاكل
let f = Array.of(3); // x = ["Dd", 10, true]
let y = Array.from("ahmed ali");
console.log(y);
// spread operator مهم جدا جدا جدا للريأكت
// spread operator من الادوات الحديثة في الجافاسكريبت
// spread operator يستخدم في تفكيك القيم الموجودة داخل الارراي او الاوبجكت الى قيم منفردة
// spread operator => iterable لازم يشتغل على حاجه تسمح ب
let num = [1, 2, 3];
let num1 = [...num, 4, 5, 6];
let num2 = [...num1, 7, 8, 9];
console.log(num2);
let num3 = ["aaa", "bbb", 10, true];
let num4 = [...num3, 4.25, 478.25, false];
console.log(num4);
// array methods
let w = 5;
// let num5 = [...w,145, true] // gives me type error because w is not iterable
// object syntax
// objectname = { key: value, key: value }
let employee = { name: "ahmed", age: 25 };
let employee1 = { name: "aly", age: 35 };
let allEmp = { ...employee, ...employee1 };
console.log(allEmp);
let employee3 = { name: "ahmed", age: 25 };
let employee4 = { city: "giza", salary: 13535 };
let allEmp2 = { ...employee3, ...employee4 };
console.log(allEmp2);
let newArr = [];
console.log(newArr);
newArr.push(5);
console.log(newArr);
newArr.push(true);
console.log(newArr);
newArr.push(14.25);
console.log(newArr);
newArr.unshift(1414.25);
console.log(newArr);
newArr.pop();
console.log(newArr);
newArr.shift();
console.log(newArr);
// let data = ["html", "css", 12, true, 12, false, 14.25, 45.25]
var ff = data.includes(147852);
console.log(ff);
ff = data.slice(1);
console.log(data);
console.log(ff);
ff = data.slice(2);
console.log(ff);
ff = data.slice(-1);
console.log(ff);
ff = data.slice(-2);
console.log(ff);
ff = data.slice(1, 5); // 1 <= ff < 5
console.log(ff);
ff = data.splice(1); // 1 <= ff < 5
console.log(ff);
ff = data.splice(1, 3); // 1 <= ff < 5
console.log(ff);
data = ["html", 12, "css", 12, true, 11, 9, 8, 12, false, 14.25, 45.25];
let fff = data.length;
console.log(fff);
// arrow function ( lambda function )
// syntax
// variable => statment
// x => x + 2
// (x, y) => y * x + 2
// (x, y) => {
//              r = y * x + 2
//              return r
//           }
// (x, y, z) => ({id: index + 1, name: n}))
let g = (x) => x + 2; // function g(x) { x + 2 }
console.log(g);
console.log(g(5));
console.log(g(15));
let showData = (x, t) => (x * t) / 2;
console.log(showData(15, 3));
let showData2 = (x, t) => {
  r = (x * t) / 2;
  return r;
};
console.log(showData2(151, 3));
// find() 1st case => لو العنصر موجود بيرجع قيمة العنصر
// find() 2nd case => undefined لو العنصر مش موجود بيرجع
let d = data.find((e) => e == 12);
console.log(d);
console.log(typeof d);
let dd = data.find((e) => e == 112);
console.log(dd);
console.log(typeof dd);
console.log("============ filter ============");
// filter() بترجع ارراي جديد مصفى من الارراي القديم مع الاحتفاظ بقيم الارراي القديم
// filter()
d = data.filter((e) => e >= 12);
console.log(d);
console.log(data);
console.log("============ map ============");
// map() بترجع ارراي جديد بنفس عدد عناصر الارراي القديم مع الاحتفاظ بقيم الارراي القديم
d = data.map((e) => e >= 12);
/*
data = ["html",12 , "css", 12, true, 11, 9, 8, 12, false, 14.25, 45.25]
d    = [false,true,false,true,false,false,false,false,true,false,true,true]
*/
console.log(d);
console.log(data);
d = data.map((e) => e * 2);
/*
data = ["html",12 , "css", 12, true, 11, 9, 8, 12, false, 14.25, 45.25]
d    = [nan,24,nan,true,24,2,22,18,16,0,28.5,90.5]
*/
console.log(d);
console.log(data);
//  index =    0      1      2
//  n     =   aly    amr    hany
let names = ["aly", "amr", "hany"];
let users = names.map((n, index) => ({
  id: index + 1,
  name: n,
}));
console.log(users);
console.log(names);
// index = 0                            1
// item  = { title: "mic", price: 50 }, { title: "cam", price: 100 }
let products = [
  { title: "mic", price: 50 },
  { title: "cam", price: 100 },
];
let newProducts = products.map((item, index) => ({
  id: index + 1,
  name: item.title,
  totalPrice: item.price * 1.14,
}));
console.log(newProducts);
// { name: "ahmed" }        object
// { "name": "ahmed" }      JSON
// [ { name: "ahmed" }, { name: "amr" } ]        array of objects
// [ { "name": "ahmed" }, { "name": "arm"} ]     JSON
// from { name: "ahmed" } to { "name": "ahmed" } JSON.stringify() convert js object to json
// from { "name": "ahmed" } to { name: "ahmed" } JSON.parse() convert json to js object
// fetch API => json() => convert api response json to javascript object
console.log("============ JSON & Fetch API ============");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
