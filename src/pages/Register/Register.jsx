import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "../../assets/Icons/Icons";
import {
  LoginHeader,
  LoginForm,
  LoginFooter,
  InputClass,
  ButtonClass,
  Background,
  SelectClass,
} from "../../components/Register/Register_Components";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPassPass] = useState(false);

  const userRoles = (e) => {
    const roles = e.target.value;
    console.log(roles ? roles : "empty");
  };

  return (
    <div className="relative">
      <Background />
      <LoginForm>
        <div className="p-4 w-[46vh] mx-auto">
          <LoginHeader />
          <form className="flex flex-col gap-4 pb-4">
            <div className="pt-3">
              <input
                className={InputClass}
                name="name"
                type="text"
                placeholder="Full Name"
                autocomplete="do-not-autofill"
                required
              />
            </div>
            <div>
              <input
                className={InputClass}
                name="email"
                type="email"
                placeholder="Email Address"
                autocomplete="do-not-autofill"
                required
              />
            </div>

            <div>
              <select
                id="user-roles"
                className={SelectClass}
                onClick={userRoles}
                required
              >
                <option value="">Select User Roles</option>
                <option value="Manager">Manager</option>
                <option value="Admin">Admin</option>
                <option value="Owner">Owner</option>
              </select>
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

            <div className="relative">
              <input
                className={InputClass}
                name="confirm-password"
                type={showConfirmPass ? `text` : `password`}
                placeholder="Confirm Password"
                required
              />
              <div className="flex absolute inset-y-0 right-0 items-center pr-2">
                <button
                  onClick={() => setShowConfirmPassPass(!showConfirmPass)}
                  type="button"
                >
                  {showConfirmPass ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <button type="submit" className={ButtonClass}>
              Register
            </button>
          </form>
        </div>
      </LoginForm>
      <LoginFooter />
    </div>
  );
};

export default Register;
