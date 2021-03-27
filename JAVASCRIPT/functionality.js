window.onload = () => {
    const submitButtonHTML = document.querySelector(".card-submit-button");

    submitButtonHTML.addEventListener("click", submitData());
}

submitData = () => {
    console.log("BUTTON CLICKED");
}