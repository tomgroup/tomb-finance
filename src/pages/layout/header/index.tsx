import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  Navbar,
  ConnectMenu,
  Button,
  HeaderContent,
  MobileHeaderContent,
} from "./index.styled";
import { slide as Menu } from 'react-burger-menu';

declare global {
  interface Window {
    ethereum: any;
  }
}

const Header = () => {
  const [address, setAddress] = useState("");
  const [y, setY] = useState(window.scrollY);

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '25px',
      height: '25px',
      left: '36px',
      top: '36px',
      
    },
    bmBurgerBars: {
      background: '#e0e3bd'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      left: '0',
      top: '0',
    },
    bmMenu: {
      background: 'rgba(255,255,255,0.9)',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      overflowY: 'hidden',
    
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  useEffect(() => {
    const handleNavigation = (e: any) => {
      const window = e.currentTarget;
      if (y > 10) {
        document.getElementById("header")?.classList.add("scrollContainer");
      } else if (y <= 10) {
        document
          .getElementById("header")
          ?.classList.remove("scrollContainer");
      }
      setY(window.scrollY);
    };
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);
  useEffect(() => {
    document
      .getElementById("navbarItem" + 1)
      ?.classList.add("activeNavbarItem");
  }, []);
  const Connect = () => {
    const { ethereum } = window;
    ethereum
      .enable()
      .then((s: any) => {
        setAddress(ethereum.selectedAddress);
        let temp =
          ethereum.selectedAddress.slice(0, 5) +
          "..." +
          ethereum.selectedAddress.slice(-3, -1);
        setAddress(temp);
      })
      .catch((err: any) => console.log(err));
  };
  const ItemClick = (e: number) => {
    for (let i = 1; i <= 4; i++) {
      document
        .getElementById("navbarItem" + i)
        ?.classList.remove("activeNavbarItem");
    }
    document
      .getElementById("navbarItem" + e)
      ?.classList.add("activeNavbarItem");
  };
  return (
    <HeaderContainer id="header">
      <h2><a href="/">Tomb Finance</a></h2>
      <HeaderContent>
        <Navbar>
          <Link to="/">
            <div id="navbarItem1" onClick={() => ItemClick(1)}>
              HOME
            </div>
          </Link>

          <Link to="/playground">
            <div id="navbarItem2" onClick={() => ItemClick(2)}>
              Cemetery
            </div>
          </Link>
          <Link to="/collection">
            <div id="navbarItem3" onClick={() => ItemClick(3)}>
              Masonry
            </div>
          </Link>
          <Link to="/faq">
            <div id="navbarItem4" onClick={() => ItemClick(4)}>
              Pit
            </div>
          </Link>
          <Link to="/sbs">
            <div id="navbarItem5" onClick={() => ItemClick(5)}>
              SBS
            </div>
          </Link>
          <Link to="/faq">
            <div id="navbarItem6" onClick={() => ItemClick(6)}>
              Liquidity
            </div>
          </Link>
          <Link to="/faq">
            <div id="navbarItem7" onClick={() => ItemClick(7)}>
              Regulations
            </div>
          </Link>
          <a href="https://docs.tomb.finance/">
            <div id="navbarItem8" onClick={() => ItemClick(8)}>
              Docs
            </div>
          </a>
        </Navbar>
        <ConnectMenu>
          <Button onClick={() => Connect()}>
            {address !== "" ? address : "Connect"}
          </Button>
        </ConnectMenu>
      </HeaderContent>
      
        <Menu styles={ styles } noOverlay >
          <MobileHeaderContent>
            
            <Link to="/">
              <div id="navbarItem1" onClick={() => ItemClick(1)}>
                Home
              </div>
            </Link>
            <Link to="/playground">
              <div id="navbarItem2" onClick={() => ItemClick(2)}>
              Cemetery
              </div>
            </Link>
            <Link to="/collection">
              <div id="navbarItem3" onClick={() => ItemClick(3)}>
              Masonry
              </div>
            </Link>
            <Link to="/faq">
              <div id="navbarItem4" onClick={() => ItemClick(4)}>
              Pit
              </div>
            </Link>
            <Link to="/sbs">
              <div id="navbarItem5" onClick={() => ItemClick(5)}>
              SBS
              </div>
            </Link>
            <Link to="/faq">
              <div id="navbarItem6" onClick={() => ItemClick(6)}>
              Liquidity
              </div>
            </Link>
            <Link to="/faq">
              <div id="navbarItem7" onClick={() => ItemClick(7)}>
              Regulations
              </div>
            </Link>
            <a href="https://docs.tomb.finance/">
              <div id="navbarItem8" onClick={() => ItemClick(8)}>
              Docs
              </div>
            </a>
            <div className="connect__btn">
              <Button onClick={() => Connect()}>
                {address !== "" ? address : "Connect"}
              </Button>
            </div>
          </MobileHeaderContent>
        </Menu>
    </HeaderContainer>
  );
};

export default Header;
