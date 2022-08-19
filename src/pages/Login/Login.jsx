import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "../../assets/Icons/Icons";
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

  return (
    <div className="relative">
      <Background />
      <LoginForm>
        <div className="p-4 w-[46vh] mx-auto">
          <LoginHeader />
          <form className="flex flex-col gap-4 pb-4">
            <div className="py-3">
              <input
                className={InputClass}
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="relative">
              <input
                className={InputClass}
                name="password"
                type={showPass ? `text` : `password`}
                placeholder="Password"
                required
              />
              <div className="flex absolute inset-y-0 right-0 items-center pr-2">
                <button onClick={() => setShowPass(!showPass)} type="button">
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
