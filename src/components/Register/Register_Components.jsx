import logoWhite from "../../assets/img/logo-white.png";
import logoBlack from "../../assets/img/logo-black.png";
import bg_desktop from "../../assets/img/bg_1920x859.jpg";

// background
export const Background = () => {
  return (
    <div className="relative">
      <img
        className="w-screen h-screen object-cover"
        src={bg_desktop}
        alt="1920x859"
      />
    </div>
  );
};

// Logo
export const WhiteLogo = () => {
  return (
    <img
      className="h-16 mobile:h-13 mx-auto my-4"
      src={logoWhite}
      alt="Araktek Logo"
    />
  );
};

// components
export const LoginHeader = () => {
  return (
    <div className="flex items-start my-6 flex-col">
      <p className="text-4xl font-dge_bold cursor-default text-white">
        Create An Account
      </p>
      <p className="text-xs py-1 leading-loose text-center cursor-default text-gray-300">
        Create a new account.
      </p>
    </div>
  );
};

export const LoginForm = ({ children }) => {
  return (
    <div className="absolute inset-x-0 inset-y-8">
      <div className="container mx-auto">
        <div className="my-10">
          <WhiteLogo />
        </div>
        <div className="border border-gray-100 w-[55vh] mx-auto bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export const LoginFooter = () => {
  return (
    <div className="absolute inset-x-0 bottom-5 text-sm text-white container mx-auto text-center">
      © 2022 Araktek. All Rights Reserved | Handfully created by{" "}
      <span>Aracholō Group</span>
    </div>
  );
};

// ClassStyles

export const InputClass = `h-12 w-full border-0 text-white font-thin bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 ring-0 focus:ring-white focus:ring-1 placeholder:text-white placeholder:font-thin`;

export const ButtonClass = `bg-zinc-900 w-full text-white py-2 mt-10 mb-2 text-xl font-bold rounded-md hover:bg-transparent hover:outline hover:outline-1 hover:outline-white`;

export const SelectClass = `user-roles h-12 w-full text-white font-thin border-0 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 outline outline-0 ring-0 focus:ring-white focus:ring-1`;
