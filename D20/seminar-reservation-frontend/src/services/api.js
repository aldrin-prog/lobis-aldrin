const URL=import.meta.env.VITE_BACKEND_API;
const token=localStorage.getItem('token');
const fetchSeminars=async ()=>{
    try {
        const seminarsData= await fetch(`${URL}/api/seminars`);
        const data=await seminarsData.json();
        // console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
}
const verifyToken=async ()=>{
    try {
        const isVerify=await fetch(`${URL}/api/auth/verify-token`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({token:token})
        })
        if(!isVerify.ok)
            return false;
        return true;
    } catch (error) {
        return false;
    }
}
const createUser=async(formData)=>{
    try {
        const user=await fetch(`${URL}/api/auth/register`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formData)
        })
        if(!user.ok)
            return false;
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
const deleteSeminar= async (id) =>{
        try {
            const deletedSeminar=fetch(`${URL}/api/seminars/${id}`,{
                method:'DELETE',
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })
            if(!deletedSeminar.ok)
                return false;
            return true;
        } catch (error) {
            console.log(error);
        }
}
export {fetchSeminars,createUser,deleteSeminar,verifyToken};