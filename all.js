//指定dom
var add = document.querySelector('.addbtn');
var list = document.querySelector('.list');
var data = JSON.parse(localStorage.getItem('doThing')) || [];

//監聽和更新
add.addEventListener('click',addData,false);
list.addEventListener('click',toggleDone,false);
updateList(data);

//加入列表，並同步更新網頁和localStorage
function addData(e){
    e.preventDefault();
    var txt = document.querySelector('.addtext').value;
    var todo = {content: txt};
    data.push(todo);
    updateList(data);
    localStorage.setItem('doThing', JSON.stringify(data));
}

//更新網頁內容
function updateList(items){
    str = '';
    var len = items.length;
    for(i=0;i<len;i++){
        str += '<li><a href="#" data-num=' + i +'>刪除</a><span>'+ items[i].content +'</span></li>'
    }
    list.innerHTML = str;
}

//刪除代辦事項
function toggleDone(e){
    e.preventDefault();
    if(e.target.tagName !== 'A'){return};
    var index = e.target.dataset.num;
    data.splice(index,1);
    localStorage.setItem('doThing', JSON.stringify(data));
    updateList(data);
}