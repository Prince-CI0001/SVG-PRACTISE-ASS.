const crustElements = document.querySelectorAll('[name=crust]');
const outerCrust = document.getElementById('crust-outer');
const innerCrust = document.getElementById('crust-inner');
const filling = document.getElementById('filling');
const meringue = document.getElementById('meringue');
document.getElementById('options').addEventListener('change', (e) => {
    switch (e.target.name) {
        case 'crust':
            let colors = [];
            switch (e.target.value) {
                case 'none':
                    colors = ['transparent', 'transparent'];
                    break;
                case 'pastry':
                    colors = ['#DECCB8', '#F2DFC9'];
                    break;
                case 'graham':
                    colors = ['#BA870D', '#DEA010'];
                    break;
                case 'chocolate':
                    colors = ['#2E1802', '#422303'];
                    break;
                default:
                    return;
            }
            innerCrust.setAttribute('fill', colors[0]);
            outerCrust.setAttribute('fill', colors[1]);
            break;
        case 'filling':
            switch (e.target.value) {
                case 'none':
                    filling.setAttribute('fill', 'transparent');
                    break;
                case 'keylime':
                    filling.setAttribute('fill', '#DFF5A2');
                    break;
                case 'pumpkin':
                    filling.setAttribute('fill', '#BD7502');
                    break;
                case 'lemon':
                    filling.setAttribute('fill', '#FFF4BD');
                    break;
            }
        case 'topping':
            switch (e.target.value) {
                case 'none':
                    meringue.style.display = 'none';
                    break;
                case 'meringue':
                    meringue.style.display = '';
                    break;
            }
    }
});

const animateButton = document.getElementById('animate');
let exploded = false;
animateButton.addEventListener('click', function () {
    if (exploded) {
        animateButton.innerHTML = "Ressemble";
        outerCrust.style.transform = 'translate(0,0) scale(1)';
        innerCrust.style.transform = 'translate(0,0) scale(1)';
        filling.style.transform = 'translate(0,0) scale(1)';
        meringue.style.transform = 'translate(0,0) scale(1)';
    }
    else {
        animateButton.innerHTML = "Ressemble";
        outerCrust.style.transform = 'translate(-20px,20px) scale(0.6)';
        innerCrust.style.transform = 'translate(-20px,20px) scale(0.6)';
        filling.style.transform = 'translate(180px,20px) scale(0.6)';
        meringue.style.transform = 'translate(80px,180px) scale(0.6)';
    }
    exploded = !exploded;
    let data = document.getElementById('btn').value;
    localStorage.setItem('mylocalData',data);
    // console.log(data);
})