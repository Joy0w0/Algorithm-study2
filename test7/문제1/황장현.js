const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', function (line) {
    input = line.split(' ').map((el) => parseInt(el));
  })
  .on('close', function () {
    // 솔루션 작성
    const A = parseInt(input[0]);
    let length = 64,
      currentStick = 64,
      answer = 1;

    if (A === 64) {
      console.log(answer);
    } else {
      while (1) {
        currentStick /= 2;
        length -= currentStick;
        if (length < A) {
          answer++;
          length += currentStick;
        } else if (length === A) {
          break;
        }
      }
      console.log(answer);
    }

    process.exit();
  });

/* 
  
처음에는 64cm가지고 있다.
자르는 방법은 반으로 자르기
합이 X보다 크면 절반으로 나눈다
자른 막대의 절반중 하나를 버리고 남아있는 막대의 길잉의 합이 x보다 크거나 같다면 


*/
