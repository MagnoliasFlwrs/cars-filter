

let req = new XMLHttpRequest();
req.open('GET', '/cars.json', false);
req.setRequestHeader('Content-Type', 'application/json');

req.send();

let carsListMain = JSON.parse(req.responseText);

let carsList = [...carsListMain];

const inner = document.querySelector('.car-cards');

// function renderCard(model = null , modification = null , modelImage = null , modelSalon = null, year = null
//   , instok = null , params = null , paramsIcons = null, price = null, saleMessage = null
//   , saleIcon = null, salePopup = null, location = null) {
//     let instockContent = instok ? 'В наличии ' : 'В пути';
//     let instockClass = instok ? 'green' : 'yellow';
//     let saleIconContent = saleIcon ? `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z" stroke="#808080" stroke-width="2"/>
//     <path d="M7.81725 12V7.09091H9.17876V12H7.81725ZM8.5012 6.4581C8.29878 6.4581 8.12513 6.39098 7.98025 6.25675C7.83749 6.12038 7.76611 5.95739 7.76611 5.76776C7.76611 5.58026 7.83749 5.41939 7.98025 5.28516C8.12513 5.14879 8.29878 5.08061 8.5012 5.08061C8.70361 5.08061 8.8762 5.14879 9.01895 5.28516C9.16384 5.41939 9.23628 5.58026 9.23628 5.76776C9.23628 5.95739 9.16384 6.12038 9.01895 6.25675C8.8762 6.39098 8.70361 6.4581 8.5012 6.4581Z" fill="#808080"/>` : '';
//     let saleMessContent = saleMessage? saleMessage : ''
//     inner.insertAdjacentHTML(
//     'beforeend' ,
//     `
//     <div class="car-card">
//         <div class="swiper model-swiper">
//             <div class="swiper-wrapper">
//               <div class="swiper-slide"><img src="${modelImage}" alt="car-image"></div>
//               <div class="swiper-slide"><img src="${modelSalon}" alt="car-image"></div>
//             </div>
//             <div class="swiper-pagination"></div>
//         </div>
//         <div class="model">
//             <p class="model-name">${model}</p>
//             <p class="model-modification">${modification}</p>
//         </div>
//         <div class="stock">
//             <span class="year">${year}</span>
//             <span class="instock ${instockClass}">${instockContent}</span>
//         </div>
//         <ul class="characteristic-list">
//             <li>
//                 <img src="${paramsIcons[0]}" alt="img" width="16" height="16">
//                 <span>${params[0]}</span>
//             </li>
//             <li>
//                 <img src="${paramsIcons[1]}" alt="img" width="16" height="16">
//                 <span>${params[1]}</span>
//             </li>
//             <li>
//                 <img src="${paramsIcons[2]}" alt="img" width="16" height="16">
//                 <span>${params[2]}</span>
//             </li>
//             <li>
//                 <img src="${paramsIcons[3]}" alt="img" width="16" height="16">
//                 <span>${params[3]}</span>
//             </li>
//         </ul>
//         <div class="price">
//             <p class="general-price">${price}</p>
//             <div class="sale">
//                 <span>${saleMessContent}</span>

//                 <div class="sale-icon">
//                     ${saleIconContent}
//                 </svg>
//                 </div>  
//             </div>
//         </div>
//         <div class="location">
//             <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M16.3132 12.8285C12.0906 10.8869 5.68999 8.53174 8 19L1.64175 2.26125L16.3132 12.8285Z" fill="#808080" stroke="#808080"/>
//             </svg>
//             <p class="location-name">${location}</p>      
//         </div>
//         <button class="card-btn">Запросить предложение</button>

//     </div>
//     `
// )
// }
function renderCardslist() {
    inner.innerHTML = '';
    carsList.forEach(({model = null , modification = null , modelImage = null , modelSalon = null, year = null
        , instok = null , params = null , paramsIcons = null, price = null, saleMessage = null
        , saleIcon = null, salePopup = null, location = null}) => {

            let instockContent = instok ? 'В наличии ' : 'В пути';
            let instockClass = instok ? 'green' : 'yellow';
            let saleIconContent = saleIcon ? `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z" stroke="#808080" stroke-width="2"/>
            <path d="M7.81725 12V7.09091H9.17876V12H7.81725ZM8.5012 6.4581C8.29878 6.4581 8.12513 6.39098 7.98025 6.25675C7.83749 6.12038 7.76611 5.95739 7.76611 5.76776C7.76611 5.58026 7.83749 5.41939 7.98025 5.28516C8.12513 5.14879 8.29878 5.08061 8.5012 5.08061C8.70361 5.08061 8.8762 5.14879 9.01895 5.28516C9.16384 5.41939 9.23628 5.58026 9.23628 5.76776C9.23628 5.95739 9.16384 6.12038 9.01895 6.25675C8.8762 6.39098 8.70361 6.4581 8.5012 6.4581Z" fill="#808080"/>` : '';
            let saleMessContent = saleMessage? saleMessage : '';

            const carCard = document.createElement('div');
            carCard.classList.add('car-card');
            carCard.insertAdjacentHTML(
            'beforeend' ,
            `
                <div class="swiper model-swiper">
                <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="${modelImage}" alt="car-image"></div>
                <div class="swiper-slide"><img src="${modelSalon}" alt="car-image"></div>
                </div>
                <div class="swiper-pagination"></div>
                </div>
                <div class="model">
                    <p class="model-name">${model}</p>
                    <p class="model-modification">${modification}</p>
                </div>
                <div class="stock">
                    <span class="year">${year}</span>
                    <span class="instock ${instockClass}">${instockContent}</span>
                </div>
                <ul class="characteristic-list">
                    <li>
                        <img src="${paramsIcons[0]}" alt="img" width="16" height="16">
                        <span>${params[0]}</span>
                    </li>
                    <li>
                        <img src="${paramsIcons[1]}" alt="img" width="16" height="16">
                        <span>${params[1]}</span>
                    </li>
                    <li>
                        <img src="${paramsIcons[2]}" alt="img" width="16" height="16">
                        <span>${params[2]}</span>
                    </li>
                    <li>
                        <img src="${paramsIcons[3]}" alt="img" width="16" height="16">
                        <span>${params[3]}</span>
                    </li>
                </ul>
                <div class="price">
                    <p class="general-price">${price}</p>
                    <div class="sale">
                        <span>${saleMessContent}</span>

                        <div class="sale-icon">
                            ${saleIconContent}
                        </svg>
                        </div>  
                    </div>
                </div>
                <div class="location">
                    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3132 12.8285C12.0906 10.8869 5.68999 8.53174 8 19L1.64175 2.26125L16.3132 12.8285Z" fill="#808080" stroke="#808080"/>
                    </svg>
                    <p class="location-name">${location}</p>      
                </div>
                <button class="card-btn">Запросить предложение</button>
            `
            )
            inner.appendChild(carCard);
    })
    
}

if (carsList) {
//   for(let car in carsList) {
//     renderCard(carsList[car].model , carsList[car].modification , carsList[car].modelImage ,carsList[car].modelSalon 
//       ,carsList[car].year ,carsList[car].instok ,carsList[car].params ,carsList[car].paramsIcons ,carsList[car].price,
//       carsList[car].saleMessage,carsList[car].saleIcon,carsList[car].salePopup,carsList[car].location)
//   }
    renderCardslist()
}

const modelSliders = document.querySelectorAll('.model-swiper');

if(modelSliders) {
    modelSliders.forEach(el=> {
        const swiper = new Swiper(el, {
            slidesPerView:1,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
          });
    })
}


const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function clearCheck() {
    checkboxes.forEach(el=> {
        if (el.checked) {
            el.checked= false;
        }
    })
}
if (checkboxes) {
    checkboxes.forEach(el => {
        el.addEventListener('click' , ()=> {
            clearCheck();
            el.checked = true;
        })
    })
}
function filterCarsList(value) {
    if (event.target.checked) {
        carsList = [...carsListMain]

        carsList = carsList.filter(car => {
            if(car.model === value) {
                return car
            } else if (value === 'all') {
                return car
            }
            
        })
    } 
    renderCardslist()

}
checkboxes.forEach(item => {
    item.addEventListener('click', ({ target }) => {
        filterCarsList(target.value)
    })
})

