// メイン部分
// let alertString;
// alertString = addString('WebCamp');

//作成した関数を呼び出す
// alert(alertString);

// function addString(strA) {
//   let addStr = 'Hello ' + strA;
//   return addStr;
// }

// let promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);

//じゃんけんの手を入力してもらうプロンプト欄を生成
let ary = ['グー', 'チョキ', 'パー', null];
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// while(ary.indexOf(user_hand) < 0){
while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力してください');
  prompt('じゃんけんの手をグー、チョキ、パーから選んでください。')
}
//ジャンケンの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

//ユーザの手とJavaScriptのジャンケンの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

//結果を表示する
if (user_hand != null){
  alert('あなたが選んだ手は' + user_hand + 'です。\nJavaScriptの選んだては' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert('またチャレンジしてね');
};

//ランダムでじゃんけんの手を作成する関数
function getJShand() {
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand_name;

  if (js_hand_num == 0) {
    hand_name = 'グー';
  } else if (js_hand_num == 1) {
    hand_name = 'チョキ';
  } else if (js_hand_num == 2) {
    hand_name = 'パー';
  }
  return hand_name;
}

//ユーザの手とJavaScriptのジャンケンの手を比べる関数
function winLose(user, js) {
  let winLoseStr;

  if (user == 'グー') {
    if (js == 'グー') {
      winLoseStr = 'あいこ';
    } else if (js == 'チョキ') {
      winLoseStr = '勝ち';
    } else if (js == 'パー') {
      winLoseStr = '負け';
    }
  } else if (user == 'チョキ') {
    if (js == 'グー') {
      winLoseStr = '負け';
    } else if (js == 'チョキ') {
      winLoseStr = 'あいこ';
    } else if (js == 'パー') {
      winLoseStr = '勝ち';
    }
  } else if (user == 'パー') {
    if (js == 'グー') {
      winLoseStr = '勝ち';
    } else if (js == 'チョキ') {
      winLoseStr = '負け';
    } else if (js == 'パー') {
      winLoseStr = 'あいこ';
    }
  }

  return winLoseStr;
}
