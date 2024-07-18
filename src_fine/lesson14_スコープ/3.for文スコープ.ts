// for文スコープ
function sum_bounty(arr: number[]) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  // ！for文の外でiは呼び出せない
  // console.log(i);

  return result;
}

console.log(sum_bounty([50, 1000]));
