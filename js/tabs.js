var tabs = document.getElementById('tabs');
var contents = document.getElementById('contents');
const tabsElement = Array.from(document.querySelectorAll('.tab'))

function changeClass(el){
    for(var i = 0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('tab_active');
    }
    el.classList.add('tab_active');
}

for (let index = 0; index < tabsElement.length; index++) {
    tabsElement[index].addEventListener('click',function(e){
        var currTab = e.target.dataset.tab;
        changeClass(e.target)
        for(var i = 0; i < contents.children.length; i++){
            contents.children[i].classList.remove('content_active');
            if(contents.children[i].dataset.content === currTab){
                contents.children[i].classList.add('content_active');
            }
        }
    })
}
