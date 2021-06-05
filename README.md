# 안진홍 [201840121]
## [06월 01일]
>오늘 배운 내용 요약

#### let 키워드와 const 키워드<br>
let 키워드와 const 키워드는 ECMAScript6 에서 추가된 기능<br>
따라서 구버전의 웹 브라우저에서는 let 키워드와 const 키워드를 사용X<br>
#### 템플릿 문자열<br>
템플릿 문자열은 ECMAScript6 에서 추가된 기능<br>
따라서 구버전의 웹 브라우저에서는 let 키워드와 const 키워드를 사용X<br>

#### 화살표 함수<br>
화살표 함수는 ECMAScript6 에서 추가된 기능<br>
따라서 구버전의 웹 브라우저에서는 let 키워드와 const 키워드를 사용X<br>

#### for of 문<br>
for of 문은 ECMAScript6 에서 추가된 기능<br>
따라서 구버전의 웹 브라우저에서는 let 키워드와 const 키워드를 사용X<br>

### window 객체<br>
window 객체는 웹 페이지 자체를 나타냄<br>

      alert(<메시지>)                           경고장 출력
      prompt(<메시지>, <임시 글자>)             프롬프트 출력
### screen 객체속성<br>

      width	        화면의 너비
      height	화면의 높이
      availWidth	실제 화면에서 사용 가능한 너비
      availHeight	실제 화면에서 사용 가능한 높이
      colorDepth	사용 가능한 색상 수
      pixelDepth	한 픽셀당 비트 수
### location 객체와 history 객체 속성과 메소드<br>

      href	        문서의 URL 주소
      host	        호스트 이름과 포트 번호
      hostname	호스트 이름
      port	        포트 번호
      pathname	디렉터리 경로
      hash	        앵커 이름(#~)
      search	요청 매개 변수
      protocol	프로토콜 종류
메소드

      assign(<링크>)      매개 변수로 전달한 위치로 이동
      reload()	      새로고침
      replace()	      매개 변수로 전달한 위치로 이동(뒤로 가기 불가능)
### navigator 객체 속성<br>

      appCodeName	웹 브라우저의 코드 이름
      appName	웹 브라우저의 이름
      appVersion	웹 브라우저의 버전
      platform	사용 중인 운영체제의 시스템 환경
      userAgent	웹 브라우저의 전체적인 정보
## jQuery
#### jQrey 객체<br>

      window.jQuery = windows.$ = jQuery;
#### 문서 객체 선택<br>
객체 탐색 메소드<br>

      parent()	부모 태그를 선택
      find()	후손 태그를 찾음
#### 문서 객체 개별 조작<br>
선택된 문서 객체의 수<br>

      length	선택된 문서 객체의 수를 구함
선택된 문서 객체 추출<br>

      get()	      선택한 문서 객체 중 하나를 선택
선택된 문서 객체 반복 적용<br>

      each()      선택한 문서 객체에 반복을 적용
#### 문서 객체 조작<br>
문자 조작 메소드<br>

      text()	html 태그 내부의 문자를 조작
      html()	html 태그 내부의 문자를 조작
스타일 조작 메소드<br>

      css()       스타일을 조작
속성 조작 메소드<br>

      attr()      속성을 조작
### 문서 객체 생성$('<h1></h1>')
문서 객체를 생성할 때는 다음과 같이 $() 함수의 매개 변수에 'HTML 형식의 문자열'을 입력함<br>

      $('<h1></h1>')
### 이벤트<br>
jQery의 이벤트 메소드<br>

      on()	이벤트를 연결
      off()	이벤트를 제거
#### 이벤트 직접 연결<br>

      $(<선택자>).on(<이벤트 이름>, <콜백 함수>)




## [05월 25일]
>오늘 배운 내용 요약
## [express 모듈]<br>
express 모듈은 다음과 같이 설치.<br>

      $ npm install express@4
#### <요청과 응답><br>
<b>웹 서버가 하는 일은 요청과 응답의 연속이라고 정의.</b><br>
<b>스트림: 프로그램이 프로그램 외부와 통신할 때는 컴퓨터 속에 흐르는 물길로 비유할 수 있는 스트림을 사용.</b><br>
#### <express 모듈을 사용한 서버 생성과 실행><br>
<b>express 모듈의 기본 메소드.</b><br>

      express():    서버 애플리케이션 객체를 생성.
      app.use():    요청이 왔을 때 실행할 함수를 지정.
      app.listen(): 서버를 실행.
<b>포트: 포트는 컴퓨터와 컴퓨터를 연결하는 정보의 출입구 역할을 하는 곳.</b><br>
#### <페이지 라우팅><br>
<b>express 모듈의 페이지 라우팅 메소드</b><br>

      get(path, callback):        GET 요청이 발생했을 때 이벤트 리스너를 지정.
      post(path, callback):       POST 요청이 발생했을 때 이벤트 리스너를 지정.
      put(path, callback):        PUT 요청이 발생했을 때 이벤트 리스너를 지정.
      delete(path, callback):     DELETE 요청이 발생했을 때 이벤트 리스너를 지정.
      all(path, callback):        모든 요청이 발생했을 때 이벤트 리스너를 지정.
<b>GET, POST, PUT, DELETE: 웹 요청을 할 때는 여러 정보를 서버에 전달.</b><br>
#### <요청과 응답><br>
<b>response 객체의 기본 메소드</b>

      send():     데이터 본문울 제공.
      status():   상태 코드를 제공.
      set():      헤더를 설정.
<b>send() 메소드의 매개 변수</b><br>
send() 메소드는 매개 변수로 무엇을 넣는지에 따라 응답하는 형태가 바뀜.<br>
<b>send() 메소드의 매개 변수 종류에 따른 응답.</b><br>

      문자열:        html을 제공.
      객체, 배열:   json을 제공.
<b>MIME 형식</b><br>

      text/plain:          기본적인 텍스트를 의미
      text/html:           html 데이터를 의미
      image/png:           png 데이터를 의미
      audio/mpe:           MP3 음악 파일을 의미
      video/mpeg:          MPEG 비디오 파일을 의미
      application/json:    json 데이터를 의미
      multipart/form-data: 입력 양식 데이터를 의미
<b>Content-Type 지정 메소드</b><br>

      type():  Content-Type을 MINE 형식으로 지정.
<b>HTTP 상태 코드의 예</b><br>

      1XX - 처리중 - 100 Continue
      2XX - 성공 - 200 OK
      3XX - 리다이렉트 - 300 Multiple Choices
      4XX - 클라이언트 오류 - 400 Bad Request
      5XX - 서버 오류 - 500 Internal Server Error
<b>status() 메소드</b><br>

      status():   상태 코드를 지정.
<b>리다이렉트</b><br>
<b>상태 코드 중에 3XX는 리다이렉트라고 하는 굉장히 특수한 상태의 코드.</b>
<b>redirect() 메소드</b><br>

      redirect():   리다이렉트.
#### <request 객체><br>
<b>주소 분석</b><br>

      프로토콜:         HTTPS                         통신에 사용되는 규칙을 의미.
      호스트:          (search.)naver.com             애플리케이션 서버(또는 분산 장치 등)의 위치를 의미.
      URL:             search.naver                   애플리케이션 서버 내부에서 라우트 위치를 나타냄.
      요청 매개 변수:   ?where=nexearch                추가적인 정보를 의미.
                       &query=초콜릿
                       &sm=top_hty
                       &fbm=0
                       &ie=utf8
#### <미들웨어><br>
<b>미들웨어 설정 메소드</b><br>

      use():    미들웨어를 설정.
##### morgan 미들웨어<br>

      > npm install morgan
##### body-parser 미들웨어<br>
요청 본문을 분석.<br>
<b>클라이언트에서 서버로 데이터 전송.</b><br>
<b>요청 본문.</b><br>
<b>다음과 같이 설치.</b><br>

      > npm install body-parser
<b>속성 정리</b><br>

      params 객체:    URL의 토큰을 나타냄. 보기가 간편.
      query 객체:     URL의 요청 매개 변수를 나타냄. 토큰보다 많은 데이터를 전달할 수 있으며, 주소로 어떤 데이터가 오고 가는지 확인할 수 있음.
      body 객체:      대용량 문자열 등을 전송할 때 사용. 다만 주소에 데이터를 기록하지 못하므로 새로고침이나 즐겨찾기 기능 등을 활용할 수 없음.
## [미니 프로젝트-RESTful 웹 서비스]<br>
#### <RESTful 웹 서비스 개요><br>
<b>RESTful 웹 서비스의 구조.</b><br>

                    /collection                       /collection/id
      GET:          컬렉션을 조회                      컬렉션의 특정 요소를 조회
      POST:         컬렉션에 새로운 데이터를 추가       사용하지 않음
      PUT:          컬렉션 전체를 한꺼번에 변경         컬렉션에 특정한 요소를 수정
      DELETE:       컬렉션 전체를 삭제                 컬렉션의 특정 요소를 삭제
<b>RESTful 웹 서비스</b><br>

      GET:        /user         모든 사용자 정보를 조회
      POST:       /user         사용자를 추가
      GET:        /user/:id     특정 사용자 정보를 조회
      PUT:        /user/:id     특정 사용자 정보를 수정
      DELETE:     /user/:id     특정 사용자 정보를 제거
##### Postman 크롬 애플리케이션<br>

      Postman
      https://www.getpostman.com




## [05월 18일]
>오늘 배운 내용 요약
#### <전역 변수><br>
아무런 변수를 사용하지 않고 모든 곳에서 사용할 수 있는 것들을 전역변수라고함.<br>
<b>문자열 자료형의 전역 변수</b>

      __filename:     현재 실행 중인 코드의 파일 경로를 나타냄.
      __dirname:      현재 실행 중인 코드의 폴더 경로를 나타냄.
<b>__filename,__dirname 출력</b><br>

      console.log(__filename);
      console.log(__dirname);
#### <process 객체의 속성과 이벤트>
Node.js는 process 객체라는 전역 객체를 제공.<br>
<b>process 객체의 속성</b><br>

      env:        컴퓨터 환경 정보를 나타냄.
      version:    Node.js 버전을 나타냄.
      versions:   Node.js와 종속된 프로그램 버전을 나타냄.
      arch:       프로세서의 아키텍처를 나타냄.
      platform:   플랫폼을 나타냄.
<b>process 객체의 메소드</b><br>

      exit([exitCode=0]):   프로그램을 종료.
      memoryUsage():        메모리 사용 정보 객체를 리턴.
      uptime():             현재 프로그램이 실행된 시간을 리턴.
#### <process 객체와 이벤트 개요><br>
<b>Node.js의 이벤트 연결 메소드</b><br>

      on(<이벤트 이름>, <이벤트 핸들러>):   이벤트를 연결
<b>process 객체의 이벤트</b><br>

      exit:                 프로세스가 종료될 때 발생.
      uncaughtException:    예외가 일어날 때 발생.
#### <os 모듈><br>
<b>os 모듈 사용 방법</b><br>

      const os = require('os');

<b>os 모듈</b><br>

      hostname():               운영체제의 호스트이름을 리턴.
      type():                   운영체제의 이름을 리턴.
      platform():               운영체제의 플랫폼을 리턴.
      arch():                   운영체제의 아키텍처를 리턴.
      release():                운영체제의 버전을 리턴.
      uptime():                 운영체제가 실행된 시간을 리턴.
      loadavg():                로드 에버러지 정보를 담은 배열을 리턴.
      totalmem():               시스템의 총메모리를 리턴.
      freemem():                시스템의 사용 가능한 메모리를 리턴.
      cpus():                   CPU의 정보를 담은 객체를 리턴.
      getNetworkInterfaces():   네트워크 인터페이스의 정보를 담은 배열을리턴.
#### <url모듈><br>
<b>url모듈 사용 방법</b><br>

      const url = require('url');

<b>url모듈의 메소드</b><br>

      parse(urlStr[, parseQueryString=false,slashesDenoteHost=false]): url문자열을 url객체로 변환해 리턴.
      format(urlObj):           url객체를 url문자열로 변환해 리턴.
      resolve(from,to):         매개 변수를 조합하여 완전한 url 문자열을 생성해 리턴.
#### <File System><br>
<b>fs 모듈 추출 방법</b><br>

      const fs = require('fs');
<b>파일 읽기 메소드</b><br>

      fs.readFileSync(<파일 이름>):             동기적으로 파일을 읽어 들임.
      fs.readFile(<파일 이름>, <콜백 함수>):    비동기적으로 차일을 읽어 들임.
<b>파일 쓰기 메소드</b><br>

      fs.writeFileSync(<파일 이름>, <문자열>):              동기적으로 파일을 씀.
      fs.writerFile(<파일 이름>, <문자열>, <콜백 함수>):    비동기적으로 파일을 씀.
#### <노드 패키지 매니저><br>
어떤 프로그래밍 플랫폼이 기본적으로 제공하는 모듈을 '내부 모듈'이라고 함.<br>
반면 개인 개발자가 내부 모듈을 조합해서 사용하기 쉬운 형태로 만들거나 새로운 기능을 구현해서 제공하는 것을 '외부 모듈'이라고 함.<br>
<b>외부 모듈을 설치할때 사용하는 명령어</b><br>

      > npm install <모듈 이름>
      예> npm install express

      > npm install <모듈 이름>@<버전>
      예> npm install express@4
      예> npm install express@4.2
      예> npm install express@4.2.7
#### <request 모듈><br>
<b>request 모듈을 설치할때 사용하는 명령어</b><br>

      > npm install request
<b>request 모듈 추출</b><br>

      // 모듈을 추출
      const request = require('request');
#### <cheerio 모듈><br>
<b>cheerio 모듈을 설치할깨 사용하는 명령어</b><br>

      > npm install cheerio
<b>cheerio 모듈 추출</b><br>

      // 모듈을 추출
      const cheerio = require('cheerio');
#### <async 모듈><br>
<b>async 모듈을 설치할깨 사용하는 명령어</b><br>

      > npm install async
<b>async 모듈 추출</b><br>

      // 모듈을 추출
      const async = require('async');




## [05월 11일]
>오늘 배운 내용 요약
##### <Date 객체><br>
<b>Date 4가지 방법으로 생성 가능.</b><br>

      new Date(): 현재 시간으로 Date 객체를 생성.
      new Date(<유닉스 타임>): 유닉스 타임(1970년 1월 1일 00시 00분 00초부터 경과한 밀리초)으로 Date 객체를 생성.
      new Date(<시간 문자열>): 문자열로 Date 객체를 생성.
      new Date(<년>, <월-1>, <일>, <시간>, <분>, <초>, <밀리초>): 시간요소(년, 월-1, 일, 시간, 분, 초, 밀리초)를 기반으로 Date 객체를 생성.
      
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