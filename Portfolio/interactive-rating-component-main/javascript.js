
start()

function start() {

    let state = {rating: NaN};
    
    const thankYouCard = document.querySelector(".thank-you-card")
    const reviewForm = document.querySelector(".review-form")
    const submitButton = document.querySelector(".review-form-submit")
    const rating = document.querySelector("#rating")

    const radios = [...document.querySelectorAll(".review-form-rating-radio")]
    radios.forEach((radio, index)=> radio.addEventListener("change", ()=>{
        if(radio.checked) state.rating = index + 1
    }))

    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        if(state.rating) {
            rating.innerText = state.rating
            thankYouCard.style.display = "block"
            reviewForm.style.display = "none"
        }
    })
}