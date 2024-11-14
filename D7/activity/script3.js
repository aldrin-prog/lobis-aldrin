const productElem=document.querySelectorAll('.add_cart');
const btnRemoveElem=document.querySelectorAll('.btn_remove');
const carts_data={};
let total=0;
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
        btnElem.setAttribute('class','btn_remove');
        qtyElem.innerText=' '+carts_data[name];
        newElem.appendChild(divCon);
        divCon.appendChild(productNameElem);
        divCon.appendChild(priceElem);
        divCon.appendChild(btnElem);
        divCon.appendChild(qtyElem);
        cartLists.appendChild(newElem);
    }
    else{
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
    });
    totalElem.innerHTML=total;
    })
});
