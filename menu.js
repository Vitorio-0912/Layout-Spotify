const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-mobile');
const menuIcon = document.querySelector('.menu-icon');

menuBtn.addEventListener('click', handleClickMenu);

function handleClickMenu(event){
    if (menu.style.display === 'inherit'){
        menu.style.display = 'none';
    }else if (menu.style.display === 'none'){
        menu.style.display = 'inherit';
    }
    checkIcon()
}

function checkIcon(){
    if(menu.style.display === 'inherit'){
        menuIcon.src = './img/menu-close-icon.png';
    }
    else{
        menuIcon.src = './img/menu-icon.png';
    }
}
