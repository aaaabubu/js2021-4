# 안진홍 [201840121]
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