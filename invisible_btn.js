console.log('aaa');
// はてなユーザーじゃなければ非表示
function none_for_guest(){
    var elems = document.getElementsByClassName('none_for_guest');
    for(i = 0; i < elems.length; i++){
        elems[i].style.display = 'none';
    }
}

// 読者登録済みなら非表示
function none_for_reader(){
    var elems = document.getElementsByClassName('none_for_reader');
    for(i = 0; i < elems.length; i++){
        elems[i].style.display = 'none';
    }
}


// ゲストアカウントか？読者登録済みか？を判定、状態によって表示を変える
function onload() {
    // ゲストアカウントかどうか（はてなブログをはじめよう！　の表示があるかどうか）
    var elems = document.getElementsByClassName('guest-footer');
    if(elems.length){
        // ゲストアカウントなら
        if(elems[0].style.display == 'block'){
            // はてなユーザーじゃなければ非表示
            none_for_guest();
        }
        // ログインアカウントなら
        else{
            // 読者登録済みなら
            elems = document.getElementsByClassName('hatena-follow-button subscribing');
            if(elems.length){
                // 読者登録済みなら非表示
                none_for_reader();
            }
        }
    }
}
window.addEventListener('load', onload, false);
console.log('bbb');
