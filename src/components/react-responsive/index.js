import {Responsive} from "./Responsive";
import {getWindowDimension, getDeviceTypeInfo, isMobileDevice, isTabletDevice, isLaptopDevice, isBiggerThanLaptop} from "./utilResponsive";

<>
  {isMobileDevice() && <h2>This is a MOBILE</h2>}

  {isTabletDevice() && <h2>This is a TABLET</h2>}

  {isLaptopDevice() && <h2>This is a LAPTOP</h2>}

  {isBiggerThanLaptop() && <h2>This is a LARGER SCREEN</h2>}
</>

export {
    Responsive,
    getDeviceTypeInfo,
    getWindowDimension,
    isMobileDevice, 
    isTabletDevice, 
    isLaptopDevice, 
    isBiggerThanLaptop
}