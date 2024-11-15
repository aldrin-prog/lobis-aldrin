const displayUserData=async ()=>{
    const userContainer=document.getElementById("userContainer");
    try {
        const response= await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response){
            throw new Error("Failed to fetch data");
        }
        const data=await response.json();
        let html="";
        data.forEach((user)=>{
            html+= `
                <div class="col">
                    <div class="card p-3">
                        <h5 class="card-title">${user.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${user.email}</h6>
                        <p class="card-text">Username: ${user.username}</p>
                        <p class="card-text">Phone: ${user.phone}</p>
                        <a href="${user.website}" class="card-link">Website</a>
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
const fetchButton=document.getElementById('fetchButton');
fetchButton.addEventListener("click",displayUserData);