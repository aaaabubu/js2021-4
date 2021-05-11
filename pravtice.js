/* let pi = 3.14159265;
let radius = 10;

console.log(`넓이: ${pi * radius * radius}`); */

/* let output = "안녕";

output +=  "하세요";
output += "!";

console.log(output); */

/* let num = 10;

console.log(num++);
console.log(++num);
console.log(num--);
console.log(--num); */

/* let input = 32;

if (input % 2 == 0) {
  console.log("짝수입니다.");
}
if (input % 2 == 1) {
  console.log("홀수입니다.");
} */

/* let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds()); */

/* let date = new Date();

if (date.getHours()<12) {
  console.log("오전입니다.");
}
if (date.getHours()>=12) {
  console.log("오후입니다.");
} */

/* let input = 20;

if (input % 2 == 0) {
  console.log("짝수입니다.");
}
else {
  console.log("홀수입니다.");
} */

/*  let date = new Date();

switch (date.getMonth() + 1) {
  case 12:
  case 1:
  case 2:
      console.log("겨울입니다.");
      break;
  case 3:
  case 4:
  case 5:
      console.log("봄입니다.");
      break;
  case 6:  
  case 7:  
  case 8:
      console.log("여름입니다.");
      break;
  case 9:
  case 10:
  case 11:
    console.log("가을입니다.");
    break;
} */

/* let num = 19;

console.log(num % 2 == 0 ? "짝수" : "홀수"); */

/* let level = 1;

switch(level) {
  case 1:
    console.log("수강해야 하는 전공 학점: 12학점");
    break;
  case 2:
    console.log("수강해야 하는 전공 학점: 18학점");
    break;
  case 3:
    console.log("수강해야 하는 전공 학점: 10학점");
    break;
  case 4:
    console.log("수강해야 하는 전공 학점: 18학점");
    break; 
} */

/* let array = [52, 273, '아침밥', '점심밥', true, false];

array [0] = 0;

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);

console.log(array);
console.log(array.length); */

/* let array = [52, 273, 32, 65, 103];

for(i = 0; i < array.length; i++) {
  console.log(i+" 번쩨 출력: "+array[i]); 
} */

/* let output = 1;

for(i = 1; i <= 20; i++) {
  output *= i;
}
console.log(output); */

/* for(let i = 0; i<20; i = i+2){
  console.log("출력");
} */

/* let i = 0;

while(i < 10){
  console.log("출력");
  i++;
} */

/* let 함수 = function() {
  console.log("함수의 첫 번째 줄");
  console.log("함수의 두 번째 줄");
}

함수();
console.log(함수); */

/* let 함수 = () => {
  console.log("ㅁㄴㅇ");
  console.log("ㅁㄴㅇ");
}

함수();
console.log(함수); */

/* function power(x) {
  return x * x;
}
console.log(power(10)); */

/* function multiply(min,max){

let output = 1;
for (let i = min; i <= max; i++){
  output *= i;
}
return output;
}
console.log(multiply(1,10)); */

/* function multiply(min,max){

  let output = 0;
  for(let i = min; i <= max; i++){
    output += i;
  }
  return output;
}
console.log(multiply(1,10)); */

/* function print(name, count) {
  console.log(`${name}이/가 ${count}개 있습니다.`);
}

print("사과", 10);
print("사과"); */

/* function power(x) {
  return x * x * x;
}
console.log(power(2,3)); */

/* et foo = setInterval (function() {
    console.log("출력합니다.");
}, 1000);

setTimeout (function() {
  clearInterval(foo);
  console.log("끝났습니다.");
}, 3000); */

// 7-5 Date 에제 생성
// let dateA = new Date();
// console.log(dateA.getHours());
// console.log(dateA);

// 7-5코드
// 현재 시간을 기반으로 Date 객체를 생성.
// let dateA = new Date();
// console.log(dateA);

// //유닉스 타임(1970년 1월 1일 00시 00분 00초부터 경과한 밀리초)
// let dateB = new Date(692281800000);
// console.log(dateB);

// //문자열을 기반으로 Date 객체를 생성.
// let dateC = new Date("December 9, 1991 21:30:00");
// console.log(dateC);

// //시간 요소(년, 월-1, 일, 시간, 분, 초, 밀리초)를 기반으로 Date 객체를 생성.
// let dateD = new Date(1991, 12-1, 9, 21, 30, 0, 0);
// console.log(dateD);

// 예제 7-6
// let date = new Date();

// console.log(date);

// date.setFullYear(date.getFullYear()+ 1);
// date.setMonth(date.getMonth() + 1);
// date.setDate(date.getDate() + 1);

// console.log(date);

// 예제 7-7
let now = new Date();
let before = new Date('Octobor 30, 2020');

let interval = now.getTime() - before.getTime();
console.log(interval);
interval = Math.floor(interval / (1000 * 60 * 60 * 24));

console.log(`태어나서 ${interval}일 지났습니다.`);

// let foo = [1, 30, 40, 50, 60, 70];
// let zoo = [
//   {
//     name: '고구마',
//     price: 1000
//   },
//   {
//     name: '감자',
//     price: 500
//   },
//   {
//     name: '바나나',
//     price: 1500
//   }
// ];

// let bar = [
//   {
//     name: '바나나',
//     price: 1500
//   }
// ]

// 7-10 예제
// let foo = [1, 30, 40, 50, 100];
// // forEach()
// foo.forEach((item, index) => {
//   console.log(`${index}-${item}`);
// });
// console.log('==============');

// //map()
// let bar = foo.map((item, index) => {
//   return item;
// });
// console.log(bar);