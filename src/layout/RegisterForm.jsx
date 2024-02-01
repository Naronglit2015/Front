import React from 'react';

export default function RegisterForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded p-8">
        <div className='text-3xl mb-4 text-center'>Register Form</div>
        <form className="mb-4">
          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
          </label>

          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
          </label>

          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
          </label>

          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Conirm password</span>
            </div>
            <input type="confirmpassword" placeholder="Conirm password" className="input input-bordered w-full max-w-xs" />
          </label>

          <button type="submit" className="btn btn-primary w-full">Submit</button>
        </form>
      </div>
    </div>
  );
}
