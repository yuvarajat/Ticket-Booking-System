
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];


const movieNameDropDown = document.getElementById("selectMovie");

const moviesListLength = moviesList.length;

for (let i = 0; i < moviesListLength; i++) {
  const tempMovieElement = document.createElement("option");

  var tempMovie = moviesList[i].movieName;
  tempMovieElement.value = tempMovie;
  tempMovieElement.textContent = tempMovie;
  movieNameDropDown.append(tempMovieElement);
}

// const movieName = getElementById("movieName");

movieNameDropDown.addEventListener("change", function getSelectedValue() {
  const selectedOption =
    movieNameDropDown.options[movieNameDropDown.selectedIndex];

  const selectedValue = selectedOption.value;
  const movieName = document.getElementById("movieName");
  movieName.innerText = selectedValue;

  for (let i = 0; i < moviesListLength; i++) {
    if (selectedValue === moviesList[i].movieName) {
      const ticketPrice = document.getElementById("moviePrice");
      ticketPrice.innerText = `$ ${moviesList[i].price}`;
    }
  }
});

const seats = document.querySelectorAll("#seatCont .seat");
let seatNum = 1;
seats.forEach(function (seat) {
  seat.classList.add(`${seatNum}`);
  seat.setAttribute("value", seatNum);
  seatNum += 1;
  seat.addEventListener("click", function () {
    const selectedSeats = document.getElementById("selectedSeatsHolder");
    const noSelected = document.querySelector(
      "#selectedSeatsHolder .noSelected"
    );
    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
    } else {
      seat.classList.add("selected");
      if (selectedSeats.contains(noSelected)) {
        noSelected.remove();
      }
      const newSeatSelected = document.createElement("span");
      newSeatSelected.textContent = seat.getAttribute("value");
      newSeatSelected.classList.add("selectedSeat");
      selectedSeats.appendChild(newSeatSelected);
    }

    const tempSelectedSeats = document.querySelectorAll("#seatCont .selected");
    const tempSelectedSeatsLength = tempSelectedSeats.length;
    const numberOfSeat = document.getElementById("numberOfSeat");
    const totalPrice = document.getElementById("totalPrice");
    const ticketPrice = document.getElementById("moviePrice").textContent;
    const movieTicketPrice = Number(ticketPrice.slice(-1));
    numberOfSeat.textContent = tempSelectedSeatsLength;
    totalPrice.textContent = `$ ${tempSelectedSeatsLength * movieTicketPrice}`;
  });
});

const continueBtn = document.getElementById("proceedBtn");

continueBtn.addEventListener("click", function () {
  const tempSelectedSeats = document.querySelectorAll("#seatCont .selected");
  tempSelectedSeats.forEach(function (tempSelectedSeat) {
    tempSelectedSeat.classList.remove("selected");
    tempSelectedSeat.classList.add("occupied");
  });
  window.alert("Yah!! Your Seats are Booked.");
});

const cancelBtn = document.getElementById("cancelBtn");

cancelBtn.addEventListener("click", function () {
  location.reload(true);
});
