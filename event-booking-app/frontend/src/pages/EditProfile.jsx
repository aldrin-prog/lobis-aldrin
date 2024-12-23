import React, { useEffect, useState } from 'react'
import { useEvent } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
const EditProfile=()=>{
    const navigate=useNavigate();
    const {verifyToken,loginUser,updateUserProfile}=useEvent();
    const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
    website: '',
    aboutSelf: '',
    occupation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    try {
        const response= await updateUserProfile(profileData);
        if(!response)
            throw new Error("error");
        navigate('/profile');
    } catch (error) {
        swal("Something happened","Try again","error");
    }
  }
useEffect(()=>{
verifyToken();
setProfileData(loginUser);
},[])
  return (
    <div className="min-h-screen bg-base-200 self-center w-full flex items-center justify-center p-4">
      <div className="card w-full max-w-2xl shadow-xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="card-title text-2xl font-bold mb-6">Edit Profile</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label" htmlFor="firstName">
                <span className="label-text">First Name*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                defaultValue={profileData.firstName}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label" htmlFor="lastName">
                <span className="label-text">Last Name*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                defaultValue={profileData.lastName}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={profileData.email}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          
          <div className="form-control">
            <label className="label" htmlFor="address">
              <span className="label-text">Home Address</span>
            </label>
            <input
              type="text"
              id="address"
              name="homeAddress"
              defaultValue={profileData.homeAddress}
              onChange={handleChange}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="phoneNumber">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              defaultValue={profileData.phoneNumber}
              onChange={handleChange}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="website">
              <span className="label-text">Website</span>
            </label>
            <input
              type="url"
              id="website"
              name="website"
              defaultValue={profileData.website}
              onChange={handleChange}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="occupation">
              <span className="label-text">Occupation</span>
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              defaultValue={profileData.occupation}
              onChange={handleChange}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="aboutSelf">
              <span className="label-text">About Self</span>
            </label>
            <textarea
              id="aboutSelf"
              name="aboutSelf"
              defaultValue={profileData.aboutSelf}
              onChange={handleChange}
              className="textarea textarea-bordered h-24"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile