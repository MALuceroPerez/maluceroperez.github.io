const breedSelect = document.querySelector('#breed-select');
const imgContainer = document.querySelector('.img-container')
const breedListURL = 'https://dog.ceo/api/breeds/list/all';
const spinner = document.querySelector('.bone');


function fetchBreed() {

    fetch(breedListURL)
    .then(response => response.json())
    .then(data => {
        listBreed(data);
        breedSelect.addEventListener("change", function (event){
            if(document.querySelector('img')) {
                document.querySelector('img').remove()
            }
            showSpinner();
            let breedImg;
            if(this.value.includes('-')){
                breedImg = `https://dog.ceo/api/breed/${this.value.replace("-", "/")}/images/random`;
            } else {  
                breedImg = `https://dog.ceo/api/breed/${this.value}/images/random`
            }
            fetch(breedImg)
            .then(response => response.json())
            .then(data => {
                let newImage = document.createElement('img');
                newImage.src = data.message;
                newImage.alt = `${breedSelect.value}`;
                imgContainer.appendChild(newImage);
                hideSpinner();
            })
        })
    
    })

}

function listBreed(data) {
    console.log(data.message)
    for(breed in data.message) {

        let breedOption;

        if(data.message[breed].length >= 1){
            
            data.message[breed].forEach(subBreed =>{
                breedOption =  document.createElement("option");
                breedOption.innerText = `${breed}-${subBreed}`;
                breedSelect.appendChild(breedOption);
                
            })
        } else {
            breedOption =  document.createElement("option");
            breedOption.innerText = breed;
            breedSelect.appendChild(breedOption);
        }
    }

}

function showSpinner() {
    spinner.classList.remove('hidden');
}

function hideSpinner() {
    spinner.classList.add('hidden');
}



(function dogViewerInit () {
    fetchBreed();
})();

