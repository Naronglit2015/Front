import React from 'react';

export default function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded p-8">
        <div className='text-3xl mb-4 text-center'>Login Form</div>
        <form className="mb-4">
          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Username or Email</span>
            </div>
            <input type="text" placeholder="Username or Email" className="input input-bordered w-full max-w-xs" />
          </label>

          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
          </label>

          <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>
      </div>
    </div>
  );
}
