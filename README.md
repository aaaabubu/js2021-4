# 안진홍 [201840121]
## [05월 11일]
>오늘 배운 내용 요약
##### <Date 객체><br>
<b>Date 4가지 방법으로 생성 가능.</b><br>
new Date(): 현재 시간으로 Date 객체를 생성.<br>
new Date(<유닉스 타임>): 유닉스 타임(1970년 1월 1일 00시 00분 00초부터 경과한 밀리초)으로 Date 객체를 생성.<br>
new Date(<시간 문자열>): 문자열로 Date 객체를 생성.<br>
new Date(<년>, <월-1>, <일>, <시간>, <분>, <초>, <밀리초>): 시간요소(년, 월-1, 일, 시간, 분, 초, 밀리초)를 기반으로 Date 객체를 생성.<br>
<b>주의: Month를 나타내는 '월'은 0부터 시작 따라서 월-1필수!!</b><br>
* Date 객체 생성 예시코드<br>

        //현재 시간을 기반으로 Date 객체를 생성.
        let dateA = new Date();
        console.log(dateA);

        //유닉스 타임(1970년 1월 1일 00시 00분 00초부터 경과한 밀리초)
        let dateB = new Date(692281800000);
        console.log(dateB);

        //문자열을 기반으로 Date 객체를 생성.
        let dateC = new Date("December 9, 1991 21:30:00");
        console.log(dateC);

        //시간 요소(년, 월-1, 일, 시간, 분, 초, 밀리초)를 기반으로 Date 객체를 생성.
        let dateD = new Date(1991, 12-1, 9, 21, 30, 0, 0);
        console.log(dateD);
실행 결과<br>

      Tue May 11 2021 17:38:22 GMT+0900 (대한민국 표준시)
      Mon Dec 09 1991 21:30:00 GMT+0900 (대한민국 표준시)
      Mon Dec 09 1991 21:30:00 GMT+0900 (대한민국 표준시)
      Mon Dec 09 1991 21:30:00 GMT+0900 (대한민국 표준시)
* 시간 더하기<br>

         let date = new Date();

         console.log(date);

         date.setFullYear(date.getFullYear()+ 1);
         date.setMonth(date.getMonth() + 1);
         date.setDate(date.getDate() + 1);

         console.log(date);
* 시간 간격 구하기<br>

        let now = new Date();
        let before = new Date('Feburary 5, 1999');

        let interval = now.getTime() - before.getTime();
        console.log(interval);
        interval = Math.floor(interval / (1000 * 60 * 60 * 24)); <---1000 * 60 * 60 * 24 요거 꼭 기억!

        console.log(`태어나서 ${interval}일 지났습니다.`);
실행 결과<br>

      16739144290
      태어나서 193일 지났습니다.

####<Array 객체><br>
<b>Array 객체 메소드</b><br>

     concat():    매개변수로 입력한 배열의 요소를 모두 합쳐 배열을 만들어 리턴.
     join():      배열 안의 모든 요소를 문자열로 만들어 리턴.
     pop()*:      배열의 마지막 요소를 제거하고 리턴.
     push()*:     배열의 마지막 부분에 새로운 요소를 추가.
     reverse()*:  배열의 요소 순서를 뒤집음.
     slice():     배열 요소의 지정한 부분을 리턴.
     sort()*:     배열의 요소를 정렬.
     splice()*:   배열 요소의 지정한 부분을 삭제하고 삭제한 요소를 리턴.
                                                                      *표시된 메소드는 자기 자신을 변화시킴
* ECMAScript5에서 추가된 메소드<br>

      forEach():  배열의 요소를 하나씩 뽑아 반복을 돌림.
      map():      콜백 함수에서 리턴하는 것을 기반으로 새로운 배열을 만듦.
      filter():   콜백 함수에서 true를 리턴하는 것으로만 새로운 배열을 만들어 리턴.

#### underscore.js 라이브러리<br>
* script 태그를 추가해서 사용하는법<br>

        <script src="http://underscorejs.org/underscore.js"></script>
#### JSON 객체<br>
<b>제약 사항</b><br>
1 - 문자열은 큰따옴표로 만들어야 함.<br>
2 - 모든 키는 큰따옴표로 감싸야함.<br>
3 - 숫자, 문자열, 불 자료형만 사용할 수 있음.<br>

* JSON 객체의 메소드<br>

        JSON.stringify(<객체>,<변환 함수>,<공백 개수>):    자바스크립트 객체를 문자로 만듦
        JSON.parse(<문자열>):                             문자열을 자바스크립트 객체로 파싱.
## <예외 처리><br>
예외는 두가지 방법으로 처리.<br>
#### 1 - 기본 예외 처리<br>

        // 함수 선언
        function callThreeTimes(callback) {
          for (let i = 0; i < 3; i++) {
            callback();
          }
        }

        // 정상 실행
        callThreeTimes(function() {console.log('안녕하세요');});

        // 예외 발생
        callThreeTimes();
실행결과<br>

      안녕하세요
      안녕하세요
      안녕하세요
      TypeError: callback is not a function

<b>TypeError를 기본 예외 처리로 확인</b><br>

        // 함수 선언
        function callThreeTimes(callback) {
          if (callback){
          for (let i = 0; i < 3; i++) {
              callback();
            }
          } else {
            console.log('매개 변수 callback이 지정되지 않았습니다.');
          }
        }

        // 정상 실행
        callThreeTimes(function() {console.log('안녕하세요');});

        // 예외 발생
        callThreeTimes();
실행 화면<br>

      안녕하세요
      안녕하세요
      안녕하세요
      매개 변수 callback이 지정되지 않았습니다.

#### 2 - 고급 예외 처리<br>
고급 예외 처리는 try 키워드, catch 키워드, finally 키워드로 예외 처리.<br>
이를 try catch finally 구문. 기본 형태<br>

      try {
        // 예외가 발생
      } catch (exception) {
        // 여기서 처리
      } finally {
        // 여기는 무조건 실행
      }
다음과 같이 catch 구문 또는 finally 구문이 필요 없으면 해당 부분 생략 가능<br>

      try {
        //예외 발생
      } catch (exception) {
        //여기서 처리
      }

      ----------------------

      try {
        //예외 발생
      } finally {
        //여기는 무조건 실행
      }
#### 3 - 예외 객체<br>
예외 객체에는 name 속성과 message 속성이 있음.<br>

      try {
        // 예외 발생
        error.error.error();
      } catch (e) {
        console.log(e.name);
        console.log(e.message);
      }
실행 화면<br>

      ReferenceError
      error is not defined
#### 4 - 예외 강제 발생<br>
예외를 강제로 발생시킬때는 throw키워드를 사용.<br>
throw키워드 뒤에는 문자열 또는 Errorr객체를 입력.<br>
<b>실제 실무에서는 개발할때 예외처리를 엄청나게 많이 사용하므로 예외 처리는 정확히 기억해두자!!!</b><br>

      

        
                

    



## [05월 04일]
>오늘 배운 내용 요약
#### <생성자 함수><br>
생성자 함수는 대문자로 시작하는 이름을 사용<br>
function Product(name, price) {<br>
  this.name = name;<br>
  this.price = price<br>
}<br>
<프로토타입><br>
모든 합수가 가지고 있는 속성으로 해당 함수를 생성자 함수로 사용했을 때만 의미 있음<br>
//생성자 함수<br>
function Product(name, price) {<br>
    this.name = name;<br>
    this.price = prcie;<br>
  }<br>

  //포로토 타입에 메소드를 선언<br>
  Product.prototype.print = function {<br>
    console.log('$(product.name)의 가격은 $(product.price)원입니다.');<br>
  }<br>

  //객체 생성<br>
  let product = new Product("바나나", 1200);<br>
  
  //메소드 호출<br>
  product.print();<br>
  ## <표준 내장 객체><br>
  자바스크립트에서 (숫자,문자열,불,객체,함수,undefined) 중에서 <b>숫자,문자열,불을 기본자료형이라고함</b><br>
  BUT 자바스크립트에서 숫자를 만들때 밑에 코드처럼 Number, String, Boolean 생성자 함수를 사용해서<br>
  숫자,문자열,불을 생성할때 typeof를 사용하면 'object' 문자 출력. 즉 객체라는것임<br>
  // 객체 자료형<br>
  let number = new Number(273);<br>
  let string = new String('안녕하세요');<br>
  let boolean = new Boolean(true);<br>

  //자료형 출력<br>
  console.log(typeof number);<br>
  console.log(typeof string);<br>
  console.log(typeof boolean);<br>
  //출력문<br>
  object<br>
  object<br>
  object<br>
  #### <Number 객체><br>
  Number 객체는 자바스크립트에서 숫자를 표현할때 사용<br>
  Number 객체는 두가지 방법으로 생성 가능<br>
  let numberFromLiteral = 273;<br>
  let numberFromConstructor = new Number(273);<br>
  <b>Number 객체의 메소드</b><br>
  toExponential(): 숫자를 지수 표시로 나타낸 문자열을 리턴.<br>
  toFixed(): 숫자를 고정소수점 표시로 나타낸 문자열을 리턴.<br>
  toPrecision(): 숫자의 길이에 따라 지수 표시 또는 고정소수점 표시로 나타낸 문자열을 리턴.<br>
  <b>toFixed() 메소드를 사용해 소수점 자릿수 자르는 방법</b><br>
  //변수 선언<br>
  let number = 273.5210332;<br>
  //출력<br>
  console.log(number.toFixed(1));<br>
  console.log(number.toFixed(4));<br>
  //출력문<br>
  273.5<br>
  273.5210<br>
  <b>Number 생성자 함수의 속성</b><br>
  MAX_VALUE: 자바스크립트의 숫자가 나타낼수있는 최대 숫자.<br>
  MIN_VALUE: 자바스크립트의 숫자가 나타낼수있는 최소 숫자.<br>
  NaN: 자바스크립트의 숫자로 나타낼수없는 숫자.<br>
  POSITIVE_INFINITY: 양의 무한대 숫자.<br>
  NEGATIVE_INFINITY: 음의 무한대 숫자.<br>
  #### <String 객체><br>
  String 객체는 자바스크립트에서 가장 많이 사용하는 내장 객체이고 두가지 방법으로 생성 가능.<br>
  let stringFromLiteral = '안녕하세요';<br>
  let stringFromConstructor = new String('안녕하세요');<br>
  <b>String 객체는 length 속성을 가짐</b><br>
  length: 문자열의 길이를 나타냄.<br>
  <b>String 객체의 메소드</b><br>
  charAt(position): position에 위치하는 문자를 리턴.<br>
  charCodeAt(position): position에 위치하는 문자의 유니코드 번호를 리턴.<br>
  concat(args): 매개 변수로 입력한 문자열을 이어 리턴.<br>
  indexOf(searchString, position): 앞에서부터 일치하는 문자열의 위치를 리턴.<br>
  lastIndexOf(searchString, position): 뒤에서부터 일치하는 문자열의 위치를 리턴.<br>
  match(regExp): 문자열 안에 regExp가 있는지 확인.<br>
  replace(regExo, replacement): regExp를 replacement로 바꾼후 리턴.<br>
  search(regExp): regExp와 일치하는 문자열의 위치를 리턴.<br>
  slice(start, end): 특정 위치의 문자열을 추출해 리턴.<br>
  split(separator, limit): separator로 문자열을 잘라 배열을 리턴.<br>
  substr(start, count): start부터 count만큼 문자열을 잘라서 리턴.<br>
  substring(start, end): start부터 end까지 문자열을 잘라서 리턴.<br>
  toLowerCase(): 문자열을 소문자로 바꾸어 리턴.<br>
  toUpperCase(): 문자열을 대문자로 바꾸어 리턴.<br>
  <b>String 객체의 메소드는 모두 '자기 자신을 변경하는 것'이 아니라 '변경된 값을 리턴'하는것</b><br>
  자기자신을 변화시키는 메소드를 '파괴적 메소드'라고 하고 변화시키지 않고 리턴하는 메소드를'비파괴적 메소드' 라고 함.<br>

## [04월 27일]
>오늘 배운 내용 요약
#### <타이머 함수><br>
타이머 설정 함수<br>
1.setTimeout(함수,시간): 특정 시간 후에 함수를 실행합니다.<br>
2.setInterval(함수,시간): 특정 시간마다 함수를 실행합니다.<br>
타이머 제거 함수<br>
1.clearInterval(아이디): 특정 시간마다 실행하던 함수 호출을 정지합니다.<br>
#### <익명 함수와 화살표 함수의 차이><br>
익명함수: function() {} 과 화살표 함수: () => {} 거의 비슷한 기능 수행.<br>
But 한가지 차이 있음. 바로 내부에서 thid키워드가 가지는 의미!!<br>
#### <객체><br>
<b><객체기본></b><br>
let array = ['사과', '바나나', '망고', '딸기'];<br>
array[0] -> '사과'<br>
array[1] -> '망고'<br>
<b><속성과 메소드></b><br>
//객체 선언<br>
let object = {<br>
  name: '바나나',<br>
  price: 1200,<br>
  print: function() <br>{
    console.log(`$(this.name)의 가격은 $(this.price)원입니다.`)<br>
  }<br>
};<br>
//메소드 호출<br>
object.print();<br>
object 속성: name,price,print<br>

## [04월 13일]
>오늘 배운 내용 요약
#### <함수 생성 방법><br>
#### 익명 함수: 중괄호 안에 코드를 넣음<br>
let <함수 이름> = function () {};<br>
사용예시:<br>
let 함수 = fuction() {<br>
  console.log("함수의 첫 번째 줄");<br>
  console.log("함수의 두 번째 줄");<br>
}; -----함수생성<br>
함수(); -----함수 호출<br>
console.log(함수); -----함수 자체 출력<br>
####<b>리터럴:</b> 변수안에 들어 있는 상태가 아니라, 문자 그대로 자료를 나타내는 것
#### 선언적 함수: 익명 함수와 마찬가지로 중괄호 내부에 코드를 넣음<br>
function <함수 이름>(){}<br>
사용예시:<br>
function 함수 {<br>
  console.log("함수의 첫 번째 줄");<br>
  console.log("함수의 두 번째 줄");<br>
}; -----함수 생성<br>
함수(); -----함수 호출<br>
console.log(함수); -----함수 출력<br>
#### 화살표 함수: 하나의 표현식을 리턴하는 함수를 만들때 중괄호 생략<br>
() => {}<br>
사용예시:<br>
let 함수 = () => {<br>
  console.log("함수의 첫 번째 줄");<br>
  console.log("함수의 두 번째 줄");<br>
};<br>
함수();<br>
console.log(함수);<br>
####<b><함수의 기본 형태></b><br>
function<함수이름>(<매개 변수>) {<br>
  <함수 코드><br>
  return <리턴 값><br>
}<br>
#### power()함수 <br>
매개 변수로 넣은 값을 제곱해서 반환<br>
funcion power(x) {<br>
  return x * x; <br>
}<br>
console.log(power(10));<br>
console.log(power(20));<br>
#### 매개 변수가 여러개인 함수
function multiply(x,y) {<br>
  return x * y;<br>
}<br>
console.log(multiply(52,273));<br>
console.log(multiply(103,32));<br>
#### 리턴 없는함수
function print(message) {<br>
  console.log('"${message}"(이)라고 말했습니다!');<br>
}<br>
print("안녕하세요");<br>
print("뿌잉뿌잉");<br>
#### <함수의 기본 활용 형태><br>
매개변수와 리턴 - min부터 max까지 숫자를 더해 리턴하는 함수를 생성하고 호출 -
<br>
function sum(min, max) {<br>
  let output = 0;<br>
  for (let i = min; i <= max; i++) {<br>
  output += i;<br>
  }<br>
  return output;<br>
}<br>
comsole.log(sum(1, 100));<br>
#### 함수 매개 변수 초기화<br>
실행하면 undefined 출력.<br>
#### <콜백 함수><br>
함수에 저장된 변수를 매개 변수로 전달되게함<br>
// 함수를 선언<br>
function callTenTimes(callback) {<br>
  // 10회 반복.<br>
  for (let i = 0; i < 10; i++) {<br>
  //매개변수로 전달된 함수 호출<br>
  callback();<br>
  }<br>
}<br>
//변수를 선언<br>
callTenTimes(function() {<br>
  console.log('함수 호툴');<br>
});<br>


## [04월 06일]
>오늘 배운 내용 요약
<b>역 for문 반복문</b><br>
// 배열을 생성<br>
let arrary = [1, 2, 3, 4, 5, 6];<br>
// 요소의 길이를 출력
for (let i = array.length - 1; i >= 0; i--){<br>
console.log(array[i]);<br>
}<br>
<b>for in 반복문과 for of 반복문</b><br>
<b>for in</b><br>
//변수를 선언<br>
let array = ["사과", "배", "포도", "딸기", "바나나"];<br>
//반복을 수행<br>
for (let i in array) {<br>
//출력합니당<br>
console.log('${i}번째 요소: &{array[i]}');<br>
}<br>
<b>for of</b><br>
//반복을 수행<br>
for (let item of array) {<br>
//수행합니당<br>
console.log(item);
}<br>
<b>중첩 반복문</b><br>
let output = "";<br>
for (let i = 0; i < 10; i++) {<br>
for (let j = 0; j < i + 1; j++) {<br>
p += "*";<br>
}<br>
p += "\n";<br>
}<br>
console.log(output);<br>
<b>break문</b><br>
break 키워드는 switch조건문이나 반복문을 벗어날때 사용<br>
let i = 0;<br>
let array = [1, 31, 273, 57, 11, 22];<br>
let output;<br>
while (true) {<br>
if (array[i] % 2 == 0) {<br>
output = array[i];<br>
break;<br>
}<br>
i = i + 1;<br>
}<br>
console.log('가장 먼저 발견환 짝수는 달러{output} 입니다');<br>
<b>continue문</b><br>
for (let i = 1; i < 10; i++) {<br>
if (i % 2 == 0) {<br>
continue;<br>
}<br>
console.log(i);<br>
}<br>
<b>스코프</b><br>
'스코프 == 블록' 블록= 중괄호에 둘러싸는 부분{}<br>
블록 내부에 선언된 변수는 해당 변수 내부에서만 사용 가능<br>
{<br>
 let a = 10;<br>
}<br>
console.log(a); <--이러면 오류남 <br>
for (let i = 0; i < 3; i++) {<br>
console.log(i);<br>
}<br>
console.log(i); <-- 이것도 오류남<br>
<b>호이스팅</b><br>
해당 블록에서 사용할 변수를 미리 확인해서 정리하는 작업.<br>
let a = 1;<br>
{<br>
console.log(a);<br>
let a = 2;<br>
}<br>






## [03월 30일]
>오늘 배운 내용 요약
* 조건문: switch, 삼항 연산자, 짧은 초기화 조건문( || 연산자 이용 )<br>
<b><4장> 반복문</b><br>
배열은 여러 개의 자료를 한꺼번에 다룰 수 있는 자료형<br>
배열 선언 형태: <b>let 이름 = [자료, 자료, 자료, 자료, 자료]</b><br>
<b>while 반복문</b>: 가장 기본적인 반복문, if 와 형태 비슷하나 불표현식이<br>
참일 경우에는 중괄호 안의 문장을 계속 실행.<br>
예제:<br>
while (true) {<br>
   console.log("무한 반복);<br>
}<br>
<b>for 반복문</b>: 원하는 횟수만큼 반복하고 싶을때 사용.<br>
<b>for 반복문 순서</b><br>
1. 초기식을 비교.<br>
2. 조건식을 비교. 조건이 false이면 반복문 종료.<br>
3. 문장을 실행.<br>
4. 종결식을 실행.<br>
5. 2단계로 이동.



## [03월 23일]
> 오늘 배운 내용 요약
* 문자 선택 연산자<br>
console.log("안녕하세요"[0]);<br>
"안녕하세요" 텍스트에서 "안"글자를 선택해 출력하게함<br>
  * 템플릿 문자열은 굉장히 편리한 기능<br>
템플릿 문자열을 생성할 때 내무에 ${표현식} 을 사용.<br>
이렇게 하면 표현식이 계산되어 문자열이 들어감.<br>
아니면 `52 + 273 = ` + (52+273) 이렇게 입력하면<br>
`52 + 273 = 325` 라는 결과가나오게 할수있음 (대체가능)<br>
* 불은 참과 거짓으로 표현할때 사용. 불은 true와 false 두가지 값밖에 없음.<br>
  * 비교 연산자<br>
  == 같습니다.<br>
  != 다릅니다.<br>
*>* 왼쪽 피연산자가 큽니다.<br>
*<* 오른쪽 피연산자가 크거나 같습니다.<br>
*>=* 왼쪽 피연산자가 크거나 같습니다.<br>
*<=* 오른쪽 피연산자가 크거나 같습니다.<br>
  * 논리 연산자<br>
  ! 논리 부정 연산자<br>
  || 논리합 연산자<br>
  && 논리곱 연산자<br>
* 변수 let a = 10선언, a+=10 은 20<br>
  이런식으로 변수를 사용할수 있습니다.
* += 숫자 덧셈 후 대입 연산자<br>
    -= 숫자 뺄셈 후 대입 연산자<br>
    *= 숫자 곱셈 후 대입 연산자<br>
    /= 숫자 나눗셈 후 대입 연산자<br>
* 증감 연산자<br>
변수++, ++변수, 변수--, --변수<br>
* 자료형 확인 연산자: typeof <br>
* 강제 자료형 변수<br>
Number(), String(), Boolean()<br>
* 일치 연산자<br>
=== 자료형과 값이 같은지 비교.<br>
!== 자료형과 값이 다른지 비교.<br>
<b><3장> 조건문</b><br>
* 조건문: if, if else, 중첩 조건문, if else if




## [03월 16일]
> 오늘 배운 내용 요약
* js node를 통해 출력확인하는 법<br>
  js 출력문 예시- console.log('hello world...!')
* js 키워드: break, else, instanceof, true 등등 여러가지있음 p.49 참조<br>
 * 식별자 규칙<br>
  1.키워드 사용하면 안됨<br>
  2.특수문자는 _와$만 허용<br>
  3.숫자로 시작하면 안됨<br>
  4.공백 입력X<br>
* 주석 처리 방법<br>
1.한줄 주석 처리 : //주석<br>
2.여러줄 주석 처리<br>
/*<br>
주석<br>
주석<br>
*/<br>