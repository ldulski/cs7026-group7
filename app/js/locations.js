console.log('hello I work!');
//location filter 
const filterButtons = document.querySelectorAll(".filter-buttons .btn button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");

console.log(filterButtons, filterableCards);


//define filter cards function
const filterCards = e => {
    document.querySelector(".active").classList.remove;
    e.target.classList.add(".active");
    console.log(e.target);


    //iterate over each filterable card
    filterableCards.forEach(card => {
        //add hide class to hide the card intitially
        card.classList.add("hide");

    })
};

//click event listener for filter buttons

filterButtons.forEach(button => button.addEventListener("click", filterCards))