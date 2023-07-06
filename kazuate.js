// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let a = document.querySelector('button#print');
a.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
   let q = document.querySelector('input[name="answer"]');
   let number = q.value;
   console.log(number);
  
  kaisu = kaisu+1;
  let k1 = document.querySelector('span#kaisu');
  k1.textContent = kaisu;

  let yoso  = Number(q.value);
  let yoso1 = document.querySelector('span#answer');
  yoso1.textContent=yoso;
  
  
  let e3 = document.querySelector('p#result');

  if(kaisu===1){
      if(kotae===yoso){
          e3.textContent = '正解です.おめでとう!';
      }else if(kotae>yoso){
          e3.textContent = 'まちがい.答えはもっと大きいですよ';
      }else if(kotae<yoso){
          e3.textContent = 'まちがい.答えはもっと小さいですよ';
      }
  }if(kaisu===2){
      if(kotae===yoso){
          e3.textContent = '正解です.おめでとう!';
      }else if(kotae>yoso){
          e3.textContent = 'まちがい.答えはもっと大きいですよ';
      }else if(kotae<yoso){
          e3.textContent = 'まちがい.答えはもっと小さいですよ';
      }
  }if(kaisu===3){
      if(kotae===yoso){
          e3.textContent = '正解です.おめでとう!';
      }else{
          e3.textContent = 'まちがい.残念でした答えは'+kotae+'です.';
      }
  }if(kaisu>3){
      e3.textContent = '答えは '+kotae+' でした. すでにゲームは終わっています';
  }
}
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
