const submitButtonHTML = document.querySelector(".card-submit-button");
let items = [];

submitButtonHTML.addEventListener("click", () => {
    let title = document.querySelector(".title").value;
    let description = document.querySelector(".description").value;

    createDataCard();

    addDataToLocalStorage(title, description);
});

addDataToLocalStorage = (title, description) => {
    items.push(title, description);
    localStorage.setItem('data', JSON.stringify(items));
    let show = localStorage.getItem('data');
    console.log(show);
}

createDataCard = () => {
    let contentShow = document.querySelector('.content-show');
    contentShow.append(htmlCard());
}

htmlCard = () => {
    let container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '70px';
    container.setAttribute('data-aos', 'fade-left');
    container.style.backgroundColor = 'white';
    container.style.display = 'flex';
    container.style.marginTop = '10px';
    container.style.boxSizing = 'borderbBox';
    container.style.borderRadius = '5px';

    let titleContainer = document.createElement('div');
    titleContainer.style.flex = '1', '0', 'auto';
    titleContainer.style.display = 'flex';
    titleContainer.style.flexDirection = 'row';
    titleContainer.style.justifyContent = 'center';
    titleContainer.style.alignItems = 'center';

    let descriptionContainer = document.createElement('div');
    descriptionContainer.style.flex = '1', '0', 'auto';
    descriptionContainer.style.display = 'flex';
    descriptionContainer.style.flexDirection = 'row';
    descriptionContainer.style.justifyContent = 'start';
    descriptionContainer.style.alignItems = 'center';

    let deleteButtonContainer = document.createElement('div');
    deleteButtonContainer.style.flex = '1', '0', 'auto';
    deleteButtonContainer.style.boxSizing = 'borderBox';
    deleteButtonContainer.style.display = 'flex';
    deleteButtonContainer.style.flexDirection = 'row';
    deleteButtonContainer.style.justifyContent = 'center';
    deleteButtonContainer.style.alignItems = 'center';

    let title = document.createElement('p');
    title.innerText = 'title';
    title.style.fontFamily = 'Roboto Mono';

    let description = document.createElement('p');
    description.innerText = 'description';
    description.style.fontFamily = 'Roboto Mono';

    let deleteButton = document.createElement('p');
    deleteButton.innerText = 'X';
    deleteButton.style.width = '40px';
    deleteButton.style.height = '30px';
    deleteButton.style.boxSizing = 'borderBox';
    deleteButton.style.borderRadius = '5px';
    deleteButton.style.textAlign = 'center';
    deleteButton.style.color = 'white';
    deleteButton.style.paddingTop = '9px';

    deleteButton.style.fontFamily = 'Roboto Mono';
    deleteButton.style.backgroundColor = 'red';

    titleContainer.append(title);
    descriptionContainer.append(description);
    deleteButtonContainer.append(deleteButton);

    container.append(titleContainer);
    container.append(descriptionContainer);
    container.append(deleteButtonContainer);

    return container;
}