import swal from "sweetalert";
import { deleteSeminar } from "../services/api";
import { Link } from "react-router-dom";
const SeminarCard=(props)=>{
    const {seminar}=props;
    const handleDelete=()=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Seminar!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then(() => {
            const actionDeleteSeminar=async ()=>{
                try {
                    const response=await deleteSeminar(seminar._id);
                    if(response){
                        swal("Seminar has been deleted!", {
                            icon: "success",
                        });
                    }
                } catch (error) {
                    
                }
            }
            actionDeleteSeminar();
        });
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            {/* <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure> */}
            <div className="card-body">
                <h2 className="card-title">{seminar.title}</h2>
                <p>{seminar.description}</p>
                <p>Speaker: {seminar.speaker.name}</p>
                <p>Price: {seminar.fee}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleDelete} className="btn btn-error">Delete</button>
                    {/* <a href={`/edit-seminar/${seminar._id}`} className="btn btn-info">Edit</a> */}
                    <Link className="btn btn-info" to={`/edit-seminar/${seminar._id}`}>Edit</Link>
                    <button className="btn btn-primary">Attend</button>
                </div>
            </div>
        </div>
    )
}
export default SeminarCard;