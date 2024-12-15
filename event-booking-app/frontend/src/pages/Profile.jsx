import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/placeholder.svg?height=96&width=96" alt="Profile" />
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">Jane Doe</h2>
        <p className="text-sm text-base-content/70">Software Engineer</p>
        <p className="text-sm text-base-content/70">San Francisco, CA</p>
        <div className="divider"></div>
        <p className="text-base-content/80">Passionate about creating elegant solutions to complex problems. Always learning and exploring new technologies.</p>
        <div className="divider"></div>
        <div className="w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold">Email:</span>
            <span className="text-sm">jane.doe@example.com</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold">Phone:</span>
            <span className="text-sm">+1 (555) 123-4567</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold">Website:</span>
            <a href="https://janedoe.com" className="text-sm text-primary hover:underline">janedoe.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Profile;

