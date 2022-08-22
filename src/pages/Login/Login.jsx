import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "../../assets/Icons/Icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  LoginHeader,
  LoginForm,
  LoginFooter,
  InputClass,
  ButtonClass,
  Background,
} from "../../components/Login/Login_Components";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  let navigate = useNavigate();
  const [login, setLogin]=useState({
  email: '',
  password:'',
  error_list: [],
  error_wrong: [],
})

  const handleInput =(e)=>{
  e.persist();
  setLogin({...login, [e.target.name]: e.target.value });
}
  const loginSubmit=(e)=>{
  e.preventDefault();
  const data= {
    email: login.email,
    password: login.password,
  }
  axios.get('/sanctum/csrf-cookie').then(response => {
    axios.post(`api/login`, data).then(res =>{
      if(res.data.status === 200){
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_name', res.data.username)
      //   swal("Success", res.data.message, "success")
        navigate("/", { replace: true });

      }
      else if(res.data.status === 401){
      //   swal("Warning", res.data.message, "Warning")
        setLogin({...login, error_wrong: res.data.message})
      }
      else{
        setLogin({...login, error_list: res.data.validation_errors });

      }
    });
});

}
  return (
    <div className="relative">
      <Background />
      <LoginForm>
        <div className="p-4 w-[46vh] mx-auto">
          <LoginHeader />
          <form onSubmit={loginSubmit} className="flex flex-col gap-4 pb-4">

            <div className="py-3">
              <input
                onChange={handleInput} value={login.email}
                className={InputClass}
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="relative">
              <input
                onChange={handleInput}  value={login.password}
                className={InputClass}
                name="password"
                type={showPass ? `text` : `password`}
                placeholder="Password"
                required
              />
              <div className="flex absolute inset-y-0 right-0 items-center pr-2">
                <button
                  onMouseDown={() => setShowPass(!showPass)}
                  onMouseUp={() => setShowPass(!showPass)}
                  type="button"
                >
                  {showPass ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <div className="flex justify-end my-2">
              <p className="text-xs mb-2 cursor-pointer hover:underline text-white">
                Forgot Password?
              </p>
            </div>

            <button type="submit" className={ButtonClass}>
              Log In
            </button>
          </form>
        </div>
      </LoginForm>
      <LoginFooter />
    </div>
  );
};

export default Login;