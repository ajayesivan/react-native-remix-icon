import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMarkPenLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m15.243 4.512-6.738 6.737-.707 2.121-1.04 1.041 2.828 2.828 1.04-1.04 2.122-.708 6.737-6.737zm6.364 3.535a1 1 0 0 1 0 1.414l-7.778 7.778-2.122.707-1.414 1.415a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 0-1.414L6.05 12.29l.707-2.122 7.779-7.778a1 1 0 0 1 1.414 0zm-6.364-.707 1.414 1.414-4.95 4.95-1.414-1.414zm-10.96 9.546 2.828 2.828-1.414 1.415-4.243-1.415z" />
  </Svg>
);
export default SvgMarkPenLine;
