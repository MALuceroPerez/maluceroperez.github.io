
(function toggleHandler () {
    const prices = {
        basic: {
            monthly: 19.99,
            annually: 199.99
        },
        professional: {
            monthly: 24.99,
            annually: 249.99
        },
        master: {
            monthly: 39.99,
            annually: 399.99
        }
    };

    const basicPrice = document.querySelector('#basic-price');
    const professionalPrice = document.querySelector('#Professional-price');
    const masterPrice = document.querySelector('#master-price');
    const annuallyRadio = document.querySelector('#annually');
    const monthlyRadio = document.querySelector('#monthly');

    annuallyRadio.addEventListener('change', () => {
        changePrice('annually')
    });

    monthlyRadio.addEventListener('change', () => {
        changePrice('monthly')
    });

    function changePrice (timeFrame) {
        basicPrice.innerText = prices['basic'][timeFrame];
        professionalPrice.innerText = prices['professional'][timeFrame];
        masterPrice.innerText = prices['master'][timeFrame];
    }

})()