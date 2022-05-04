import styled from "@emotion/styled";
import Image from "next/image";

import logo from "../public/logo.png";

const Logo = () => {
  return (
    <StyledLogo
      alt="Logo"
      src={logo}
      layout="fixed"
      width={45}
      height={45}
      loading="lazy"
    />
  );
};

const StyledLogo = styled(Image)`
  background-color: var(--secondary-color);
  border-radius: 50%;
`;

export default Logo;
