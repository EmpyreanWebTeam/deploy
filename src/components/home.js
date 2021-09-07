import React from "react";
import Laptop from "../components/responsive/laptop";
import Desktop from "../components/responsive/desktop";
import Tablet from "../components/responsive/tablet";
import Mobile from "../components/responsive/mobile";
import { useMediaQuery } from 'react-responsive';

 

const Home = () => {
  
    const DesktopResponsive = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 1441, maxWidth: 9999 })
        return isDesktop ? children : null
      }
    const LaptopResponsive = ({ children }) => {
        const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1440 })
        return isLaptop ? children : null
    }
    const TabletResponsive = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        return isTablet ? children : null
      }
      const MobileResponsive = ({ children }) => {
        const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 })
        return isMobile ? children : null
      }


    return (
        <div className="container">
          <DesktopResponsive>
            <Desktop />
          </DesktopResponsive>
          <LaptopResponsive>
            <Laptop />
          </LaptopResponsive>
          <TabletResponsive>
            <Tablet />
          </TabletResponsive>
          <MobileResponsive>
            <Mobile />
          </MobileResponsive>
        </div>
    );
  }


export default Home;