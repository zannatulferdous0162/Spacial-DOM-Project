
const allBtn = document.getElementsByClassName('add-btn');
// console.log(allBtn);

for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;


        const selectedContainer = document.getElementById('selected-players-container');

        const div = document.createElement('div');
        div.classList.add('selected-players');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);

        updateTotalCost(price);
        updategrandTotal();
    })
}

function updategrandTotal(status) {

    if(status){
        // const totalCost = getConvartedValue('total-cost');
        // document.getElementById('grand-total').innerText= totalCost;
    }
    else{
     
    }
 
}


function updateTotalCost(value) {
    const totalCost = getConvartedValue('total-cost');
    const sum = totalCost + parseInt(value);
    document.getElementById('total-cost').innerText = sum;
}


function getConvartedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}


