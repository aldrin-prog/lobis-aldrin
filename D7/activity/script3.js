const productElem=document.querySelectorAll('.add_cart');
const checkoutBtn=document.querySelector('#checkout');
let carts_data={};
let total=0;
checkoutBtn.addEventListener('click',function(event){
    const elem=event.target;
    carts_data={};
    total=0;
    document.getElementById('total_price').innerText=total;
    elem.style.display="none";
    document.getElementById('carts').innerHTML="";
});
productElem.forEach(element => {
    element.addEventListener('click',function(event){
    const element=event.target;
    const price=element.dataset.price;
    const name=element.dataset.name;
    const product_name=element.dataset.product_name;
    const cartLists=document.getElementById('carts');
    const cartElem=document.querySelector('li#'+name);
    if(!carts_data[name])
        carts_data[name]=1;
    else
        carts_data[name]+=1;
    total+=parseInt(price);

    const newElem   = document.createElement('li');
    const divCon    = document.createElement('div');
    const productNameElem=document.createElement('a');
    const priceElem=document.createElement('a');
    const qtyElem=document.createElement('a');
    const btnElem=document.createElement('button');
    const totalElem=document.getElementById('total_price');
    if(!cartElem){
        newElem.setAttribute('id',name);
        qtyElem.setAttribute('id','qty_'+name);
        productNameElem.innerText=' '+product_name;
        priceElem.innerText=' $'+price+' '; 
        btnElem.innerText="Remove";
        btnElem.setAttribute('data-price',price);
        btnElem.setAttribute('data-qty',carts_data[name]);
        btnElem.setAttribute('id','btn_remove'+name);
        qtyElem.innerText=' '+carts_data[name];
        newElem.appendChild(divCon);
        divCon.appendChild(productNameElem);
        divCon.appendChild(priceElem);
        divCon.appendChild(btnElem);
        divCon.appendChild(qtyElem);
        cartLists.appendChild(newElem);
    }
    else{
        // btnElem.setAttribute('data-qty',carts_data[name]);
        // btnElem.attributes('data-qty').;
        const buttonRemove=document.getElementById('btn_remove'+name);
        buttonRemove.setAttribute('data-qty',carts_data[name]);
        document.getElementById('qty_'+name).innerText=' '+carts_data[name];
        
    }
    btnElem.addEventListener('click',function(event){
        const elem=event.target;
        const sub_price=parseInt(elem.dataset.price)*parseInt(elem.dataset.qty);
        const parentLiElem=elem.parentNode.parentNode;
        parentLiElem.remove();
        total-=sub_price;
        totalElem.innerHTML=total;
        carts_data[name]=0;
        const cartListData=cartLists.children;
        if(cartListData.length<=0){
            document.getElementById('checkout').style.display='none';
        }else{
            document.getElementById('checkout').style.display='block';
        }
    });
    const cartListData=cartLists.children;
    if(cartListData.length<=0){
        document.getElementById('checkout').style.display='none';
    }else{
        document.getElementById('checkout').style.display='block';
    }
    totalElem.innerHTML=total;
    })
});
