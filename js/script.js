const addGuestButton = document.querySelector(".invite"); // invite button
const guestInputLabel = document.querySelector(".add-guest label"); // label for the invite button
const guestInput = document.querySelector(".add-guest input"); // text input box
const guestList = document.querySelector(".guest-list"); // unordered list (not yet visible)
const guestCount = document.querySelector(".attendance"); // span class for number of guests attending
const guestFull = document.querySelector(".alert"); // alert when guest list is full (not yet visible)
const assignButton = document.querySelector(".assign"); // assign item button
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    if (guest !== "") {
        addToList(guest);
        updateGuestCount();
        clearInput();
    }
});

const clearInput = function () {
    guestInput.value = "";
};

const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;

    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

const assignItems = function () {
    let potLuckItems = ['meatballs', 'sandwiches', 'chips', 'cookies', 'potato salad', 'fruit', 'pop', 'water', 'juice', 'hot dogs', 'burgers', 'egg rolls'];

    const allGuests = document.querySelectorAll(".guest-list li");

    for (let guest of allGuests) {
        let randomPotluckIndex = Math.floor(Math.random() * potLuckItems.length);
        let randomPotluckItem = potLuckItems[randomPotluckIndex];

        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
        assignedItems.append(listItem);

        potLuckItems.splice(randomPotluckIndex, 1);
    }
};

assignButton.addEventListener("click", function (){
    assignItems();
    assignButton.disabled = true;
});