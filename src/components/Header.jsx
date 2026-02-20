import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <header className="mb-5">
      <Container>
        <h1
          className="text-3xl font-bold text-[#3A2F26]
"
        >
          Voucher App
        </h1>
        <p className="text-[#2B2B2B]">MiniMartie</p>
      </Container>
    </header>
  );
};

export default Header;
