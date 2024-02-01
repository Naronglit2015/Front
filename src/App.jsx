import React, { useState } from "react";
import RegisterForm from "./layout/RegisterForm";
import LoginForm from "./layout/LoginForm";

function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div data-theme="" className="min-h-screen">
      <h1 className="text-4xl text-pink-600 text-center border bg-ghost-400 py-5 m-6 font-bold">
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
