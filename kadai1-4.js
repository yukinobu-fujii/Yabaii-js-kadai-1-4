const taskMenu = [
    '==========================',
    '現在持っているのタスク一覧',
    '==========================',
];
console.log( taskMenu.join('\n') );

const taskNames = [
    {'[内容]' : '机を片付ける' , '[ジャンル]' : '掃除' },
    {'[内容]' : '牛乳を買う', '[ジャンル]' : '買い物'},    
    {'[内容]' : '散歩する', '[ジャンル]' : '運動'},    
];
const taskShow = () => {
    taskNames.forEach(( value, index) => {
        console.log( index, value);
    });
}

taskShow();
while(true){
    (taskNames.push(prompt('タスクを入力してください')));{      
    }
    (taskNames.push(prompt('ジャンルを入力してください')));{
        console.log( taskMenu.join('\n') );
        taskShow();
        alert(`新しいタスクを追加しました。`);
        alert('「確認、追加、削除、終了」のいずれかを入力してください');
        break;
    }
}
