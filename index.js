const boardElement = document.getElementById('sheet');
const detailsVariationsElement = document.getElementById('details__variations');
const detailsTitleElement = document.getElementById('details__title');
const tileElements = Array.from(boardElement.getElementsByClassName('tile')).slice(5);

const params = new URLSearchParams(location.search);
const sheetParam = params.get('sheet') ?? 'v1';
const importParam = params.get('import') ?? '';

import((`./sheets/${sheetParam}.js`)).then(({rows}) => {
    const addImages = () => tileElements.forEach((tileElement, index) => {
        const row = (index / 5) | 0;
        const column = index % 5;
        const tile = rows[row][column];

        const imageElement = tileElement.getElementsByClassName('tile__image')[0];
        imageElement.src = tile.image;
    });

    const updateProgression = () => tileElements.forEach((tileElement, index) => {
        const row = (index / 5) | 0;
        const column = index % 5;
        const tile = rows[row][column];
        tileElement.style.setProperty('--progression', `${tile.getProgression()}%`);
    });

    const addClickHandlers = () => tileElements.forEach((tileElement, index) => {
        const row = (index / 5) | 0;
        const column = index % 5;
        const tile = rows[row][column];

        tileElement.addEventListener('click', () => {
            detailsTitleElement.innerText = tile.name;
            detailsVariationsElement.innerHTML = '';

            for (const variation of tile.variations) {
                const variationElement = document.createElement('div');
                variationElement.className = 'variation';

                for (const {item, requiredAmount} of variation.countableItems) {
                    const variationItem = document.createElement('div');
                    variationItem.className = 'variation__item';
                    variationItem.innerText = `${requiredAmount} · ${item.name}`;
                    variationElement.appendChild(variationItem);

                    const variationInput = document.createElement('input');
                    variationInput.className = 'variation__input';
                    variationInput.name = item.id;
                    variationInput.type = 'number';
                    variationInput.min = 0;
                    variationInput.value = localStorage.getItem(item.id) ?? 0;
                    variationElement.appendChild(variationInput);
                }

                detailsVariationsElement.appendChild(variationElement);
            }
        });
    });

    const importData = (text) => {
        const data = JSON.parse(atob(text));

        for (const [key, val] of Object.entries(data)) {
            localStorage.setItem(key, val);
        }

        updateProgression();
    }

    addImages();
    updateProgression();
    addClickHandlers();
    importParam && importData(importParam);

    document.addEventListener('change', (event) => {
        const {name, value} = event.target;

        if (!name) {
            return;
        }

        localStorage.setItem(name, value);
        detailsVariationsElement.querySelectorAll(`.variation__input[name="${name}"]`).forEach((input) => {
            input.value = value;
        });
        updateProgression();
    });


    document.getElementById('tools__reset').addEventListener('click',  () => {
        if (!confirm('Reset your progression?')) {
            return;
        }
        detailsVariationsElement.querySelectorAll(`.variation__input`).forEach((input) => {
            input.value = 0;
        });
        localStorage.clear();
        updateProgression();
    });

    document.getElementById('tools__export').addEventListener('click', () => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('sheet', sheetParam);
        searchParams.set('import',  btoa(JSON.stringify(localStorage)));

        navigator.clipboard.writeText(`${location.origin}${location.pathname}?${searchParams}`)
            .then(() => alert('Bingo data copied to clipboard!'), () => alert('Failed to export!'));
    });
});