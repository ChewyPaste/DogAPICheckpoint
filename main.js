"use strict";


// var testJSON =
//
// {
//   "message": [
//     "https://images.dog.ceo/breeds/vizsla/n02100583_854.jpg",
//     "https://images.dog.ceo/breeds/spaniel-japanese/n02085782_23.jpg",
//     "https://images.dog.ceo/breeds/hound-walker/n02089867_671.jpg"
//   ],
//   "status": "success"
// };

// console.log(testJSON);
// console.log(amount + " user input");

function watchGetDogButton() {
  $(".form-group").submit(e => {
    e.preventDefault();
    fetchImage();
  });
}

// function getInput(){
//     let amount = $(".amountDog").val();
//     return amount;
// }

function getInput(){
        let dogBreed = $("#dogBreed").val();
        return dogBreed;
}
function fetchImage(){
    // fetch("https://dog.ceo/api/breeds/image/random/" + getInput())
 fetch("https://dog.ceo/api/breed/" + getInput() + "/images/random")
  .then(response => response.json())
  //.then(responseJson => console.log(responseJson))
  .then(responseJson => displayResults(responseJson))
  .catch(error => alert("something wrong"))

}

function displayResults(responseJson){
    if(responseJson.status !== "success"){
        alert("cant find, you sure that's a real breed?")
    }else if (responseJson.status === "success"){
        // alert("success!");
            $(".results").replaceWith(
            `<img src="${responseJson.message}" class="results">`
        );
    }
}


$(watchGetDogButton());
