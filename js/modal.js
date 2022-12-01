var btnOpen = document.getElementById('modal-btn');
var modal = document.getElementById('modal-wrap');

var overlay = document.getElementById('overlay');

btnOpen.addEventListener('click',function(){
    modal.classList.add('modal-wrap_active');
});

overlay.addEventListener('click',function(){
    modal.classList.remove('modal-wrap_active');
});

