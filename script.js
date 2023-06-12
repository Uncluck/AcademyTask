let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let blogArticles = document.querySelectorAll('.blog-article');
let listButton = document.querySelector('.card-view-button-list');
let standardButton = document.querySelector('.card-view-button-grid');
let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('li a');

darkThemeButton.onclick = function (){
    document.body.classList.add('dark');
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');
}
lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
};
for (let blogArticle of blogArticles){
    let moreButton = blogArticle.querySelector('.more');
    moreButton.onclick = function (){
        blogArticle.classList.remove('short');
    }
}
listButton.onclick = function (){
    let cards = document.querySelector('.cards');
    cards.classList.add('list');
    standardButton.classList.remove('active');
    listButton.classList.add('active');
}
standardButton.onclick = function (){
    let cards = document.querySelector('.cards');
    cards.classList.remove('list');
    listButton.classList.remove('active');
    standardButton.classList.add('active');
}
for (let preview of previews){
    let activeImage = preview;
    activeImage.onclick = function (evt) {
        evt.preventDefault();
        mainImage.src = activeImage.href;

        let currentActive = document.querySelector('.active-item');
        currentActive.classList.remove('active-item');
        activeImage.classList.add('active-item');
    };

}