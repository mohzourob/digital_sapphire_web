import styled from "styled-components";
import ClientOnly from "./HOC/ClientOnly";
import Input from "./Input";
import { SearchOutlined } from "@ant-design/icons";
import Logo from "./Logo";
import { Dropdown } from "antd";
import ArrowDropdown from "./ArrowDropdown";

const Navbar = (props: any) => {
  const serchIcon = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: "#FFF",
      }}
      {...props}
    />
  );

  return (
    <ClientOnly>
      <header>
        <StyledNavbar>
          <div className="container">
            <NavbarFlex>
              <Logo />
              <Input
                placeholder={`Search items, collection and accounts`}
                prefix={serchIcon}
              />
              <ArrowDropdown />
              <h1>tests</h1>
            </NavbarFlex>
          </div>
        </StyledNavbar>
      </header>
    </ClientOnly>
  );
};

const StyledNavbar = styled.nav`
  max-width: 100vw;
  height: 4rem;
  top: 0px;
  position: sticky;
  z-index: 1;
  transition: top 0.5s ease 0s;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const NavbarFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;
