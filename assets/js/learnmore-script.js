document.addEventListener("DOMContentLoaded", () => {
    const loadMoreButton = document.getElementById("load-more");
    const reviewsContainer = document.getElementById("reviews-container");

    loadMoreButton.addEventListener("click", () => {
        const newReview = document.createElement("div");
        newReview.classList.add("review");
        newReview.innerHTML = `<p>"Another great review!" - Anonymous</p>`;
        reviewsContainer.appendChild(newReview);
    });

});
