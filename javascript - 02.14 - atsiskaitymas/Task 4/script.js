/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then(res => res.json())
    .then(cars => {
        cars.forEach(car => {
            const carCard = document.createElement('div');
            
            const carBrand = document.createElement('h3');
            const carBrandText = document.createTextNode(car.brand)
            carBrand.appendChild(carBrandText);

            const par = document.createElement('p');
            const parText = document.createTextNode('models:');
            par.appendChild(parText);

            const models = document.createElement('div');
            models.classList.add('models');
            
            car.models.forEach(modelis => {
                const model = document.createElement('span');
                const modelText = document.createTextNode(modelis);
                model.appendChild(modelText);
                models.appendChild(model);
            })
        

            carCard.append(carBrand, par, models);
            document.querySelector('#output').appendChild(carCard);
        });
    })
    