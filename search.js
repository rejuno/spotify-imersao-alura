function styleSearch() {
    const elementosSearch = document.getElementsByClassName('header__search');

    const elementoSearch = elementosSearch[0];

    if (elementoSearch) { 
        elementoSearch.classList.toggle('selected');

        elementoSearch.style.borderColor = '#1db954';
        elementoSearch.style.borderWidth = '1px';
    }
    
}

var botao = document.querySelector('.search__class');


botao.addEventListener('mousedown', styleSearch);
