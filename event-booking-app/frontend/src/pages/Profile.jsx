import React, { useEffect, useState } from 'react';
import { useEvent } from '../context/AppContext';
import { Link } from 'react-router-dom';
const Profile = () => {
    const { loginUser, verifyToken,uploadUserImage } = useEvent();
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState('');
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        // console.log(file);
        // return;
        try {
          const response = await uploadUserImage(formData);
        //   setFileUrl(response.data.fileUrl); // Cloudinary URL of the uploaded file
        window.location.reload();
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };
    useEffect(() => {
        verifyToken();
    }, [])
    return (
        <>
            <div className="flex items-center justify-center w-full">
                <div className="card bg-base-100 shadow-xl w-96">
                    <div className="card-hearder p-2 mt-5">
                        <Link to="/profile/edit" className='btn btn-primary float-right btn-sm'>Edit Profile</Link>
                    </div>
                    <div className="card-body items-center text-center">
                        <figure className='p-4'>
                            <div className="avatar self-center" onClick={() => document.getElementById('my_modal_1').showModal()}>
                                <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2">
                                    {
                                        loginUser.profileImage ? <img src={loginUser.profileImage} />
                                            : <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    }

                                </div>
                            </div>
                        </figure>
                        <h2 className="card-title text-2xl font-bold">{`${loginUser.firstName} ${loginUser.lastName}`}</h2>
                        <p className="text-sm text-base-content/70">{loginUser.occupation}</p>
                        <p className="text-sm text-base-content/70">{loginUser.homeAddress}</p>
                        <div className="divider"></div>
                        <p className="text-base-content/80">{loginUser.aboutSelf}</p>
                        <div className="divider"></div>
                        <div className="w-full">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-semibold">Email:</span>
                                <span className="text-sm">{loginUser.email}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-semibold">Phone:</span>
                                <span className="text-sm">{loginUser.phoneNumber}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold">Website:</span>
                                <Link to={loginUser.website} className="text-sm text-primary hover:underline">{loginUser.website}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box ">
                    <form onSubmit={handleUpload} >
                        <p className='text-center mb-10'> Update Profile Picture</p>
                        <div className="join flex border justify-between">
                            <input type="file" required onChange={handleFileChange} className="focus:outline-none join-item file-input w-full max-w-xs" />
                            <button type="submit" className='btn join-item w-32'>Upload</button>
                        </div>
                    </form>
                    <div className="modal-action">

                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Profile;

