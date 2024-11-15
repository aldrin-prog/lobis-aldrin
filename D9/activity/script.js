const displayProductData=async ()=>{
    const userContainer=document.getElementById("userContainer");
    try {
        const response= await fetch("https://fakestoreapi.com/products");
        if(!response){
            throw new Error("Failed to fetch data");
        }
        const data=await response.json();
        let html="";
        data.forEach((product)=>{
            html+= `
                <div class="col">
                    <div class="card p-3" style="width: 18rem; height:40rem">
                        <img src="${product.image}" class="card-img-top img-fluid" style="object-fit:contain;height:300px;width:300px" >
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p>$${product.price}</p>
                            <p class="card-text product-description">
                            ${product.description}
                            </p>
                        </div>
                    </div>
                </div>
            `
        })
        userContainer.innerHTML=html;
        // console.log(data);s
    } catch (error) {
        userContainer.innerHTML("An Error occured while fetching data.");
        console.log(error);
    }
}
displayProductData()