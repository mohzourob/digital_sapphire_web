import Image from "next/image";
import styled from "styled-components";
import avatarImg from "../public/avatar.png";

const Logo = () => {
  return (
    <StyledLogo
      src={avatarImg}
      alt="Digital Sapphire Logo"
      width={32}
      height={32}
    />
  );
};

const StyledLogo = styled(Image)`
  background-color: var(--main-button-color);
  border-radius: 50%;
`;

export default Logo;
