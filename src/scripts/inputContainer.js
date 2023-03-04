const inputContainer = (()=>{
    const container = document.createElement('div');
    container.id = 'inputContainer';

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = 'city-input';
    inputField.name = 'city-input'
    container.appendChild(inputField);

    const button = document.createElement('button');
    button.className = 'weather-search';
    button.textContent = 'Search';
    container.appendChild(button);

    return container;
})();

export {inputContainer};