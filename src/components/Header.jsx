import React from "react";
import Container from "./Container";
import useCookie from "react-use-cookie";

const Header = () => {
  const [userCookie]= useCookie("user");

  const {name,email,profile_img}= JSON.parse(userCookie);
  return (
    <header className="mb-5">
      <Container>
        <div className="flex justify-between">
          <div className="">
            <h1
              className="text-3xl font-bold text-[#3A2F26]
"
            >
              Voucher App
            </h1>
            <p className="text-[#2B2B2B]">MiniMartie</p>
          </div>

          <div className="flex gap-3 items-center">
            <img src={profile_img
              ? profile_img
              :"../public/logo.png"} alt="user photo" className="size-15 shadow-sm  border-[#3A2F26] rounded-full object-cover object-top" />
           <div>
           <h1
              className="text-lg font-bold text-[#3A2F26]
"
            >
             {name}
            </h1>
            <p className="text-sm text-[#2B2B2B]">{email}</p>
           </div>
          </div>



        </div>
      </Container>
    </header>
  );
};

export default Header;
