import styled from "styled-components";

// Children Component
export const Children = styled.div`
  width: 100%;
  height: 100%;
  margin-left: ${({ displaySidebar }) => (displaySidebar ? "15rem" : "5rem")};

  @media (max-width: 468px) {
    margin-left: 5rem;
  }
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
`;

export const SidebarLogoWrapper = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: ${({ displaySidebar }) =>
    displaySidebar ? "space-between" : "center"};
  align-items: center;

  @media (max-width: 468px) {
    justify-content: center;
  }
`;

export const SidebarLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 468px) {
    display: block;
  }
`;

export const SidebarBrand = styled.span`
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
`;

export const SidebarToggler = styled.button`
  cursor: pointer;
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};

  @media (max-width: 468px) {
    display: none;
  }
`;

// SidebarItem styles
export const ItemsList = styled.ul`
  list-style: none;
`;

export const ItemContainer = styled.li`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.25rem;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background: #1c0068;
  }

  &.active {
    background-color: #361aa6;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #F7F6FB;
`;

export const ItemName = styled.span`
  margin-left: ${({ displaySidebar }) => (displaySidebar ? "0.5rem" : "0")};
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
  text-transform: capitalize;
`;

// Sidebar Container
export const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  width: ${({ displaySidebar }) => (displaySidebar ? "15rem" : "5rem")};
  height: 100vh;
  padding: 0.75rem;
  background: #2a009dde;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  transition: width 350ms ease;
  overflow-x: hidden;
  box-shadow: 0px 0px 10px 0 #888;
  ${({ displaySidebar }) =>
    displaySidebar && "box-shadow: 8px 0px 12px 0px rgba(0,0,0,0.1)"};

  ${ItemWrapper} {
    justify-content: ${({ displaySidebar }) => !displaySidebar && "center"};
  }

  &:hover {
    ${({ displaySidebar }) =>
      !displaySidebar && "box-shadow: 0px 0px 10px 0 #888"};

    @media (min-width: 468px) {
      width: ${({ displaySidebar }) => !displaySidebar && "15rem"};

      ${SidebarLogoWrapper} {
        justify-content: ${({ displaySidebar }) =>
          !displaySidebar && "space-between"};
      }

      ${SidebarBrand} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
      }

      ${SidebarToggler} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
      }

      ${ItemWrapper} {
        justify-content: ${({ displaySidebar }) =>
          !displaySidebar && "flex-start"};
      }

      ${ItemName} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
        margin-left: ${({ displaySidebar }) => !displaySidebar && "0.5rem"};
      }
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 3px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #eaeced;

    &:hover {
      background: #d5e0f3;
    }
  }

  @media (max-width: 468px) {
    width: 5rem;
  }
`;
