import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const EditFormSeminar = (props) => {
    const {seminar}=props
    const navigate=useNavigate();
    const URL=import.meta.env.VITE_BACKEND_API;
    const [formData, setFormData] = useState(seminar);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleNestedInputChange = (e, parentKey) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [parentKey]: {
          ...prev[parentKey],
          [name]: value,
        },
      }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add API submission logic here
        try {
            
            console.log("Seminar Data:", formData);
            const token=localStorage.getItem('token');
            const newSeminar= await fetch(`${URL}/api/seminars/${seminar._id}`,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })
            const data=await newSeminar.json();
            console.log(data);
            if(newSeminar.ok)
                navigate('/dashboard');
        } catch (error) {
            console.log(error);
        }
      };    
  return (
    <div className="max-w-3xl mx-auto bg-base-100 p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Edit Seminar</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter seminar title"
          />
        </div>

        {/* Description */}
        <div>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="textarea textarea-bordered w-full"
            placeholder="Enter seminar description"
          ></textarea>
        </div>

        {/* Date */}
        <div>
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>

        {/* Time Frame */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text">From</span>
            </label>
            <input
              type="time"
              name="from"
              value={formData.timeFrame.from}
              onChange={(e) => handleNestedInputChange(e, "timeFrame")}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">To</span>
            </label>
            <input
              type="time"
              name="to"
              value={formData.timeFrame.to}
              onChange={(e) => handleNestedInputChange(e, "timeFrame")}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Venue */}
        <div>
          <label className="label">
            <span className="label-text">Venue</span>
          </label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter venue"
          />
        </div>

        {/* Speaker */}
        <div>
          <label className="label">
            <span className="label-text">Speaker Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.speaker.name}
            onChange={(e) => handleNestedInputChange(e, "speaker")}
            className="input input-bordered w-full"
            placeholder="Enter speaker's name"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Speaker Image URL</span>
          </label>
          <input
            type="text"
            name="image"
            value={formData.speaker.image}
            onChange={(e) => handleNestedInputChange(e, "speaker")}
            className="input input-bordered w-full"
            placeholder="Enter speaker image URL"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Speaker LinkedIn</span>
          </label>
          <input
            type="url"
            name="linkedin"
            value={formData.speaker.linkedin}
            onChange={(e) => handleNestedInputChange(e, "speaker")}
            className="input input-bordered w-full"
            placeholder="Enter LinkedIn URL"
          />
        </div>

        {/* Fee */}
        <div>
          <label className="label">
            <span className="label-text">Participation Fee</span>
          </label>
          <input
            type="number"
            name="fee"
            value={formData.fee}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter participation fee"
          />
        </div>

        {/* Slots Available */}
        <div>
          <label className="label">
            <span className="label-text">Slots Available</span>
          </label>
          <input
            type="number"
            name="slotsAvailable"
            value={formData.slotsAvailable}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter available slots"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button className="btn btn-primary w-full" type="submit">
            Update Seminar
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditFormSeminar;
