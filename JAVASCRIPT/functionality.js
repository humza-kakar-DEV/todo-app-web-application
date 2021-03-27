window.onload = () => {
    const submitButton = document.querySelector(".card-submit-button");

    submitButton.addEventListener("click", submitData());
}

submitData = () => {
    console.log("BUTTON CLICKED");
}