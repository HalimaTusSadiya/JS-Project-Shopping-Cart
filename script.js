// function for Product Area
function handleProductChange (product,isIncrease){
    const phnQuantity = document.getElementById(product+"-quantity");
    const phnQuantityNumber = parseInt(phnQuantity.value);
    let phnIncreaseQuantity = phnQuantityNumber;
    if(isIncrease){
         phnIncreaseQuantity = phnQuantityNumber + 1;
    }else{
        if(phnIncreaseQuantity > 0){
            phnIncreaseQuantity = phnQuantityNumber - 1;
        }    
    }
    phnQuantity.value = phnIncreaseQuantity;
    let phnPrice = 0;
    if(product == 'phone'){
        phnPrice = phnIncreaseQuantity * 1219;
    }else if(product == 'case'){
        phnPrice = phnIncreaseQuantity * 59
    }
    document.getElementById(product+'-price').innerText = phnPrice;
    handlePriceChange()
}

// function for Total Area
function handlePriceChange(){
    const phonePrice = getInnerText('phone');
    const casePrice = getInnerText('case');

    const subTotal = phonePrice + casePrice;
    document.getElementById('sub-total').innerText = subTotal;

    const tax = Math.round(subTotal/100*5);
    document.getElementById('tax').innerText = tax;

    document.getElementById('total').innerText = subTotal + tax;
}

//  function for get innerText
function getInnerText(id){
    const productPriceId = document.getElementById(id+'-price');
    const productPrice = parseFloat(productPriceId.innerText);
    return productPrice;
}





