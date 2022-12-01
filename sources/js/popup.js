document.addEventListener('mouseout', e => {
    if(!e.relatedTarget){
        document.querySelector('.popup').classList.add('show');
    }
})
document.addEventListener('click', e => {
    if(e.target.className == "fechar"){
        document.querySelector(".popup").classList.remove('show');
    }
});