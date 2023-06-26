document.addEventListener("DOMContentLoaded", function() {
    let removeButtons = document.querySelectorAll(".removeButton");
  
    removeButtons.forEach(function(removeButton) {
        removeButton.addEventListener("click", function() {
            removeCard(this.dataset.cardId);
        });
    });
  
    function removeCard(cardId) {
        let card = document.getElementById(cardId);
        if (card) {
            card.remove();
        }
    }
  
    let form = document.getElementById("ballForm");
  
    form.addEventListener("submit", function(event) {
        event.preventDefault();
  
        let ballName = document.getElementById("ballName").value;
        let ballImage = document.getElementById("ballImage").value;
        let ballPrice = document.getElementById("ballPrice").value;
        let inStock = document.getElementById("inStock").value;
  
        let newCard = document.createElement("div");
        newCard.className = "card";
  
        newCard.innerHTML = `
            <img alt="${ballName}" style="width: 100px; height: auto;" src="${ballImage}" />
            <figcaption>${ballName}</figcaption>
            <button class="red-button removeButton" data-card-id="card-${Date.now()}">Remove</button>
            <div class="price">
                <p>$${ballPrice}</p>
            </div>
            <div class="inStock">
                <p>In Stock: ${inStock}</p>
            </div>
        `;
  
        document.querySelector(".layout").appendChild(newCard);
  
        // Reset the form fields
        form.reset();
    });
});
