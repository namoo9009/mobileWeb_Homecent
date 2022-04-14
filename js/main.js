window.onload = () => {
    const splash = document.querySelector('.splash');

    const splashOff = setTimeout(() => {
        splash.classList.add('off');
    },2100)

    const list = document.querySelectorAll('.navigation .list');
    function activeNav(){
        list.forEach((item) => 
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) =>
    item.addEventListener('click',activeNav));
}