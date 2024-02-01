import React, { useState } from "react";
import RegisterForm from "./layout/RegisterForm";
import LoginForm from "./layout/LoginForm";

function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div data-theme="" className="min-h-screen flex flex-col items-center justify-center">
      <h1 style={{ width: '60%' }} className="text-5xl text-white text-center border py-5 m-6 font-bold rounded-md shadow-md bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700">
  Hello world!
</h1>




      <input
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller"
      />

      <hr />

      {isLoginForm ? <LoginForm /> : <RegisterForm />}

      <button onClick={toggleForm} className="my-4">
        {isLoginForm ? "Switch to Register Form" : "Switch to Login Form"}
      </button>
    </div>
  );
}

export default App;
