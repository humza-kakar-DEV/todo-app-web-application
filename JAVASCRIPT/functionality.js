const submitButtonHTML = document.querySelector(".card-submit-button");

window.onload = () => {
    createCard('onLoad');
}

submitButtonHTML.addEventListener("click", () => {
    let title = document.querySelector(".title").value;
    let description = document.querySelector(".description").value;

    addLocalStorage(title, description);
});

addLocalStorage = (titleText, descriptionText) => {
    if (localStorage.getItem('dataSet') == null) {
        data = [];
        data.push([titleText, descriptionText]);
        localStorage.setItem('dataSet', JSON.stringify(data));
        createCard('onProcess', data);
    } else {
        interfaceData = []
        interfaceData.push([titleText, descriptionText]);
        createCard('onProcess', interfaceData);
        localStorageData = localStorage.getItem('dataSet');
        data = JSON.parse(localStorageData);
        data.push([titleText, descriptionText]);
        localStorage.setItem('dataSet', JSON.stringify(data));
    }
}

createCard = (type, cardData = []) => {
    switch (type) {
        case 'onLoad':
            data = [];
            data = Array.from(JSON.parse(localStorage.getItem('dataSet')));
            data.forEach((element, index) => {
                htmlCard(element[0], element[1]);
            });
            break;
        case 'onProcess':
            data = cardData;
            console.log(data);
            data.forEach((element, index) => {
                htmlCard(element[0], element[1]);
                console.log(`${index} ${element[0]} ${element[1]}`);
            });
            break;
    }
}

htmlCard = (titleText, descriptionText) => {
    let contentShow = document.querySelector('.content-show');

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
    title.innerText = titleText;
    title.style.fontFamily = 'Roboto Mono';

    let description = document.createElement('p');
    description.innerText = descriptionText;
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

    contentShow.append(container);
}