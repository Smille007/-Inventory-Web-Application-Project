
document.addEventListener("DOMContentLoaded", function() {
 
    let removeButtonA = document.getElementById("removeButton-a");
    let removeButtonB = document.getElementById("removeButton-b");
    let removeButtonC = document.getElementById("removeButton-c");
    let removeButtonD = document.getElementById("removeButton-d");
    let removeButtonE = document.getElementById("removeButton-e");
    let removeButtonF = document.getElementById("removeButton-f");
    let removeButtonG = document.getElementById("removeButton-g");
    let removeButtonH = document.getElementById("removeButton-h");


    removeButtonA.addEventListener("click", function() {
      removeCard("card card-a");
    });
    removeButtonB.addEventListener("click", function() {
      removeCard("card card-b");
    });
    removeButtonC.addEventListener("click", function() {
      removeCard("card card-c");
    });
    removeButtonD.addEventListener("click", function() {
        removeCard("card card-d");
      });
      removeButtonE.addEventListener("click", function() {
        removeCard("card card-e");
      });
      removeButtonF.addEventListener("click", function() {
        removeCard("card card-f");
      });
      removeButtonG.addEventListener("click", function() {
          removeCard("card card-g");
        });
        removeButtonH.addEventListener("click", function() {
          removeCard("card card-h");
        });
  

    function removeCard(cardId) {
      var card = document.getElementById(cardId);
      if (card) {
        card.remove();
      }
    }
  });
  