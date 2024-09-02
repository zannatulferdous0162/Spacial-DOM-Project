
const allBtn = document.getElementsByClassName('add-btn');
// console.log(allBtn);

for(const btn of allBtn){
    btn.addEventListener('click',function(event){
        const name = event.target.parentNode.childNodes[1].innerText;
        const price =  event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        console.log(category);
        
    })
}



// const price = getConvartedVlue('budget');
// const cartCount= getConvartedVlue('cart');
// const leftCount = getConvartedVlue('left');

function getConvartedVlue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}


