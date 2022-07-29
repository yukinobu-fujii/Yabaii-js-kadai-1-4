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
for (let i = 0; i < taskNames.length; i++) {{
    if(taskNames.push(prompt('タスクを入力してください')));{
    document.write(taskNames.key);       
    }
    (taskNames.push(prompt('ジャンルを入力してください')));
    document.write(taskNames.value); 
    {
        console.log( taskMenu.join('\n') );
        taskShow();
        alert('「確認、追加、削除、終了」のいずれかを入力してください');
    }
}
/*
    }elesif{

    }

        alert(`新しいタスクを追加しました。`);
        break;
    }
}


/*let name_array = ['どうのつるぎ', 'かわのたて', 'かわのぼうし'];
 let price_array = [150, 80, 100];
 
 
 let item_array = [
  name_array,
  price_array,
 ]
 name_array.forEach(function(name, index) {
  //console.log(name)
  console.log(name_array[index])
  console.log(price_array[index])
 })
 //または
 item_array.forEach(function(item) {
  item.forEach(function(item, index) {
  console.log(item)
  })
 })

 let items = [
    { name: 'どうのつるぎ', price: 150 },
    { name: 'かわのたて', price: 80 },
    { name: 'かわのぼうし', price: 100 },
   ]
   items.forEach(function(item, index) {
    console.log(index)
    console.log(item.name)
    console.log(item.price)
   })
   */