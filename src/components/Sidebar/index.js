import React, { useState } from "react";

import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
  SidebarToggler,
} from "./SidebarStyles.js";
// import BrandLogo from "./BrandLogo.svg";
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';

import { SidebarItems } from "..";

const MOBILE_VIEW = window.innerWidth < 468;

export default function Sidebar({ children }) {
  const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW);

  const handleSidebarDisplay = (e) => {
    e.preventDefault();
    if (window.innerWidth > 468) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(false);
    }
  };

  return (
    <React.Fragment>
      <SidebarContainer displaySidebar={displaySidebar}>
        <SidebarWrapper>
          <SidebarLogoWrapper displaySidebar={displaySidebar}>
            {/* Logo wrapper starts */}
            <SidebarLogo href="/">
            <IconButton aria-label="lock">
                  <ChildCareOutlinedIcon className="lock__icon"/>
                </IconButton>
              <SidebarBrand
                displaySidebar={displaySidebar}
                className="app__brand__text"
              >
                MyChapp
              </SidebarBrand>
            </SidebarLogo>
            {/* Logo wrapper ends */}
            {/* Toggle button */}
            <SidebarToggler className="lock__item"
              displaySidebar={displaySidebar}
              onClick={handleSidebarDisplay}
            >
                <IconButton aria-label="lock">
                  <PushPinOutlinedIcon className="lock__icon"/>
                </IconButton>
            </SidebarToggler>
          </SidebarLogoWrapper>
          <Divider />

            {/* Render the SidebarItems component */}
          <SidebarItems displaySidebar={displaySidebar} />
        </SidebarWrapper>
      </SidebarContainer>
            {/* Render the children */}
      <Children displaySidebar={displaySidebar}>{children}</Children>
    </React.Fragment>
  );
}