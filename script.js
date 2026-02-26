function searchFoodstall() {
    var input = document.getElementById('search').value.toLowerCase();
    var cards = document.getElementById('foodList').getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++) {
        var h2 = cards[i].getElementsByTagName('h2')[0];
        if (h2.innerHTML.toLowerCase().indexOf(input) > -1) {
            cards[i].style.display = '';
        } else {
            cards[i].style.display = 'none';
        }
    }
}

function rate(star, index) {
    var card = star.parentElement.parentElement;
    var stars = star.parentElement.getElementsByTagName('span');
    for (var i = 0; i < stars.length; i++) {
        if (i <= index) stars[i].textContent = '★';
        else stars[i].textContent = '☆';
    }
    var avg = card.getElementsByClassName('avg-rating')[0];
    avg.textContent = 'Average: ' + (index + 1);
}

function addReview(button) {
    var card = button.parentElement.parentElement;
    var input = button.previousElementSibling;
    var reviewsList = card.getElementsByClassName('reviews-list')[0];
    if (input.value.trim() !== '') {
        var p = document.createElement('p');
        p.textContent = input.value;
        reviewsList.appendChild(p);
        input.value = '';
    }
}