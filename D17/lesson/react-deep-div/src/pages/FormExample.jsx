import { useState } from "react"

const FormExample=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Thank you, ${name}`);
    }
    return (
        <div>
            <form action="">
                <div>
                    <label> Name:</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" name="" value={name}/>
                </div>
                <div>
                    <label> Email:</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" name="" value={email} />
                </div>
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </div>
    )
}
export default FormExample