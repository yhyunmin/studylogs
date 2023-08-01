// 지연된 초기화 & 암묵적 Any

const movies =["밀수","에일리언","판타스틱 포"]

let foundMovie; // any 타입 

for (let movie of movies) {
  if (movie ==="밀수") {
    foundMovie ="밀수"
  }
}
// any 타입으로 타입 추론및 에러검사가 안된다.
foundMovie();
foundMovie=1;
foundMovie.toUpperCase();


// 이럴땐 타입추론이아닌 애너테이션을 활용 해야함.