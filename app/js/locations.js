console.log('hello I work!');
//location filter 
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");
// console.log(filterButtons, filterableCards);


//define filter cards function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    //iterate over each filterable card
    filterableCards.forEach(card => {
        //add hide class to hide the card intitially
        card.classList.add("hide");

        //check if the card matches the selected filter or the "all" is selected statement
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");

        }
    });
};

//click event listener for filter buttons
filterButtons.forEach(button => button.addEventListener("click", filterCards));

//load more button
const loadBtn = document.querySelector(".loadmore");
var cards = [document.querySelectorAll(".card")];
var currentValue = 6;

//on button click it will load 6 more cards
loadBtn.addEventListener('click',()=>{
    setTimeout(() => {
        for(var i=currentValue;i<currentValue+6; i++){
            cards[i].style.display = "block";
        }
        //display nothing if no more cards left
        currentValue += 6;
        if(currentValue >= cards.length){
            loadBtn.style.display = "none";
        }
            loadBtn.innerText = 'Load More'; 
    },1000);
    loadBtn.innerText = ''; 
})