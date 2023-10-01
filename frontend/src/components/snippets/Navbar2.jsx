import React, { useEffect, useState } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
// import { Menu, Search, ShoppingBagOutlined } from "@mui/icons-material";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import { Badge, Slide, useMediaQuery, useScrollTrigger } from "@mui/material";
import BadgeUnstyled from "@mui/base/BadgeUnstyled";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AddIcon from "@mui/icons-material/Add";

const Container = styled.div`
  height: 70px;
  background-color: white;
  z-index: 2;
  border-bottom: 1px solid #f2f2f2;

  // On Scroll Fixed Header
  position: sticky;
  top: 0;
`;
// ${(props) => (props.isSquare ? "10px" : "50%")};
const Wrapper = styled.div`
  padding: 10px 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  display: flex;
`;

const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  height: 70px;
  align-items: center;
  padding: 11.25px 15px;
`;

const MenuIcons = styled.div`
  padding: 22.5px 25px;
`;

const MobileWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const LeftMobile = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const LeftIconMobile = styled.div`
  padding: 23.75px 25px;
`;

const ItemMobile = styled.div``;

const MenuMobile = styled.div`
  padding: 0 14.25px;
  position: relative;
  z-index: 1;
  background-color: white;
`;

const MenuMobileItems = styled.div`
  padding: 19px 0;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  border-top: 1px solid #ededed;
`;

const Mm = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MenuMobileButtons = styled.div`
  display: flex;
  padding: 19px 0;
  border-top: 1px solid #ededed;
  justify-content: space-between;
  cursor: pointer;
`;

const MenuMobileBut = styled.div`
  padding: 24px;
  border: 1px solid #ededed;
  width: 49.6%;
  text-align: center;
`;

// function HideOnScroll(props) {
//   const { children } = props;
//   const trigger = useScrollTrigger();
//
//   return (
//     <Slide appear={false} derection={"down"} in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

const Navbar2 = (props) => {
  const themem = createTheme({
    palette: {
      custom: {
        main: "#9EE2CF",
      },
    },
  });
  const { classes } = props;

  const theme = useTheme();
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isUnMatch = useMediaQuery(theme.breakpoints.up("md"));
  console.log(isMatch);

  const [scroll, setScroll] = useState(false);
  const [back, setBack] = useState(false);

  const handleMenu = () => {
    setScroll(!scroll);
    setBack(!back);
    if (scroll) {
      document.body.style.overflow = "scroll";
      document.body.style.backgroundColor = "transparent";
    } else {
      document.body.style.overflow = "hidden";
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
    // console.log(scroll);
  };

  if (isUnMatch) {
    // console.log("asdf");
    document.body.style.overflow = "scroll";
    document.body.style.backgroundColor = "transparent";
  }

  const gg = () => {
    console.log("icon");
  };

  return (
    <Container>
      {/* {isMatch ? (
        <React.Fragment>
          <MobileWrapper>
            <LeftMobile>
              <LeftIconMobile onClick={handleMenu}>
                <MenuIcon />
              </LeftIconMobile>
              <ItemMobile>Laced</ItemMobile>
            </LeftMobile>
            <Right>
              <MenuIcons>
                <SearchIcon sx={{ fontSize: 25 }} />
              </MenuIcons>
              <MenuIcons>
                <Badge badgeContent={4} color="#9EE2CF">
                  <ShoppingBagOutlinedIcon sx={{ fontSize: 25 }} />
                </Badge>
              </MenuIcons>
            </Right>
          </MobileWrapper>
          {scroll && (
            <MenuMobile>
              <MenuMobileItems>
                <Mm>Browse</Mm>
              </MenuMobileItems>
              <MenuMobileItems>
                <Mm>
                  <div>Yeezy</div>
                  <AddIcon sx={{ fontSize: 24 }} />
                </Mm>
              </MenuMobileItems>
              <MenuMobileItems>
                Air Jordan
                <AddIcon sx={{ fontSize: 24 }} />
              </MenuMobileItems>
              <MenuMobileItems>
                Nike <AddIcon sx={{ fontSize: 24 }} />
              </MenuMobileItems>
              <MenuMobileItems>
                New Balance <AddIcon sx={{ fontSize: 24 }} />
              </MenuMobileItems>
              <MenuMobileItems>
                New Releases <AddIcon sx={{ fontSize: 24 }} />
              </MenuMobileItems>
              <MenuMobileItems>
                Best Sellers <AddIcon sx={{ fontSize: 24 }} />
              </MenuMobileItems>
              <MenuMobileButtons>
                <MenuMobileBut style={{ background: "black", color: "white" }}>
                  My Account
                </MenuMobileBut>
                <MenuMobileBut>Logout</MenuMobileBut>
              </MenuMobileButtons>
            </MenuMobile>
          )}
        </React.Fragment>
      ) : ( */}
      <React.Fragment>
        <Wrapper>
          <Left onClick={gg}>icon</Left>
          <Right>
            <MenuItem>New Releases</MenuItem>
            <MenuItem>Best Sellers</MenuItem>
            <MenuItem>Brows</MenuItem>
            <MenuItem>Sell</MenuItem>
            <MenuItem className="mr-10">Login</MenuItem>
            <MenuIcons>
              <SearchIcon sx={{ fontSize: 25 }} />
            </MenuIcons>
            <MenuIcons>
              <ThemeProvider theme={themem}>
                <Badge badgeContent={4} color="custom">
                  <ShoppingBagOutlinedIcon sx={{ fontSize: 25 }} />
                </Badge>
              </ThemeProvider>
            </MenuIcons>
          </Right>
        </Wrapper>
      </React.Fragment>
      {/* )} */}
    </Container>
  );
};

export default Navbar2;

// const menuIcons = {
//   color: "blue",
//   padding: "22.5px 25px",
// };

// <SearchIcon style={{ fontSize: 25 }} />
// <SearchIcon sx={{ fontSize: 25 }} />
// <ShoppingBagOutlinedIcon sx={{ fontSize: 25 }} />
