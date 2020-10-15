const body = document.body;
const toggleBtn = document.querySelector('.toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    body.classList.toggle('dark-theme');
}
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if(body.classList.contains('dark-theme')){
        localStorage.setItem('currentTheme', 'active');
    }else{
        localStorage.removeItem('currentTheme');
    }
});
