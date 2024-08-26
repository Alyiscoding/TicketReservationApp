
let selectedSeats = [];

function reserved(element) {
    if (element.classList.contains("booked")) {
        alert("Apologies this seat has Already been Reserved!");
    } else {
        selectedSeats = selectedSeats.filter(seat => seat !== element);

        element.classList.add('booked');

        selectedSeats.push(element);

        selectedSeats.forEach(seat => {
            seat.classList.remove('selected');
            seat.style.backgroundColor = 'white';
            seat.style.color = "black";
        });
    }


}

// function runTime() {
//     const reservedCount = selectedSeats.length;
//     const totalPrice = reservedCount * 500;
// }

function Done() {
    // alert(selectedSeats.length);
    if (selectedSeats.length > 0) {

        const totalCost = selectedSeats.length * 500;

        alert(`You have successfully reserved ${selectedSeats.length} seat(s). Total cost: ${totalCost} Rs. \nPhysical Tickets will be provided to you before Entering Cinema Room. \nThanks.`);
        // document.getElementsByClassName("seatsReserved").innerText = (`You have successfully reserved ${selectedSeats.length} seat(s). Total cost: ${totalCost} Rs.`);

        // document.getElementById("seatsReserved").textContent = reservedCount;
        // document.getElementById("totalCost").textContent = totalPrice;


        selectedSeats = [];
        // runTime();
    } else {
        //  if no seats are selected
        alert('Please select at least one seat.');
    }
    location.reload();

}

const movieName = document.getElementsByClassName("dropdown-item").value;


function selectMovie() {
    document.getElementsByClassName('btn-secondary').textContent = movieName;
}


