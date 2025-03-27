import styled from "styled-components";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  position: fixed;
  left: ${(props) => (props.isOpen ? "0" : "-26rem")};
  top: 0;
  height: 100vh;
  width: 26rem;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  @media (max-width: 450px) {
    width: 13rem;
    padding: 3.2rem 0rem;
  }
`;

const MenuButton = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
  svg {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 450px) {
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      <MenuButton onClick={toggleSidebar}>
        <Menu size={32} />
      </MenuButton>
      <StyledSidebar isOpen={isOpen}>
        <Logo />
        <MainNav />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
