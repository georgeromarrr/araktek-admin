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
    <div className="flex items-start my-12 flex-col">
      <p className="text-4xl font-dge_bold cursor-default text-white">
        Welcome to Araktek CMS
      </p>
      <p className="text-xs py-1 leading-loose text-center cursor-default text-gray-300">
        Log in to your account.
      </p>
    </div>
  );
};

export const LoginForm = ({ children }) => {
  return (
    <div className="absolute inset-x-0 inset-y-14">
      <div className="container mx-auto">
        <div className="my-10">
          <WhiteLogo />
        </div>
        <div className="border border-gray-100 w-[55vh] mx-auto bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
          {children}
          <div className="flex justify-center text-white flex-row text-sm my-8">
            <p className="hover:underline cursor-pointer">Contact</p>
            <span className="mx-3">•</span>
            <p className="hover:underline cursor-pointer">Privacy</p>
          </div>
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

export const InputClass = `h-12 w-full border-0 text-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 ring-0 focus:ring-white focus:ring-1 placeholder:text-white placeholder:font-thin`;

export const ButtonClass = `bg-zinc-900 w-full text-white py-2 my-6 text-xl font-bold rounded-md hover:bg-transparent hover:outline hover:outline-1 hover:outline-white`;
