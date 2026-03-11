function searchFoodstall() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName("h2")[0];
        if (title.innerHTML.toLowerCase().includes(input)) cards[i].style.display = "";
        else cards[i].style.display = "none";
    }
}

function rate(star, index) {
    const card = star.closest(".card");
    const stars = card.querySelectorAll(".rating span");
    const avg = card.querySelector(".avg-rating");
    let rating = index + 1;
    stars.forEach((s, i) => { s.textContent = i < rating ? "★" : "☆"; });
    avg.textContent = `Rating: ${rating} / 5`;
}

function addReview(button) {
    const card = button.closest(".card");
    const reviewInput = card.querySelector(".review-input");
    const reviewsList = card.querySelector(".reviews-list");
    const reviewText = reviewInput.value.trim();
    if (reviewText === "") return;
    const newReview = document.createElement("p");
    const today = new Date().toLocaleDateString();
    newReview.textContent = `${reviewText} (${today})`;
    reviewsList.appendChild(newReview);
    reviewInput.value = "";
}