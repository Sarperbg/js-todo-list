var items = ['3 Litre Su İç','Odevleri Yap','En Az 3 Saat Kodlama Yap','Yemek Yap'];

var list = document.querySelector('#myList');

items.forEach(function(item) {

    CreateItem(item);

});

list.addEventListener('click',function(item) {
   
    if(item.target.tagName=='LI') {
        item.target.classList.toggle('checked');
        ToogleDeleteButton();
    }
});
document.querySelector('#deleteAll').onclick=function(){
    var elemenents=document.querySelectorAll('.checked');
    elemenents.forEach(function(item) {
        item.style.display='none';
    }
    )
}
function ToogleDeleteButton() {
    var checklist = document.querySelectorAll('.checked');
}

document.querySelector('#btnCreate').onclick=function() {
    var item=document.querySelector('#txtItem').value;
    if(item==='') {
        alert('Lütfen bir değer giriniz');
        return;
    }
    CreateItem(item);

};
function CreateItem(item){
    var li = document.createElement('li');
var t = document.createTextNode(item);
li.className='list-group-item';
li.appendChild(t);
list.appendChild(li);

var span = document.createElement('span');
var text = document.createTextNode('\u00D7');
span.className='close';
span.appendChild(text);
li.appendChild(span);

span.onclick= function() {
    var li = this.parentElement;
    li.style.display='none';
    li.classList.remove('checked');
}
}
