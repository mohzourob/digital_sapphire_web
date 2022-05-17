import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.png";

const Logo = () => {
  return (
    <Link href={"/"}>
      <StyledLogo>
        <Image
          alt="Logo"
          src={logo}
          layout="fixed"
          width={45}
          height={45}
          loading="lazy"
        />
      </StyledLogo>
    </Link>
  );
};

const StyledLogo = styled.div`
  background-color: var(--secondary-color);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  position: relative;
`;

export default Logo;
