const fetchPosts=async()=>{
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        //Extract JSON from the response opbject
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
const buttonFetch = document.getElementById('fetch-btn');
buttonFetch.addEventListener('click',()=>{fetchPosts()});