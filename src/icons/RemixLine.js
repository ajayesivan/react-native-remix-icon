import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRemixLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 2c5.512 0 9.982 4.46 9.999 9.968v.02L22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2c-1.925 0-3.691.68-5.071 1.813A7 7 0 0 1 16 12.5a1 1 0 1 1-2-.001 5 5 0 0 0-5-5c-2.611 0-4.769 2-4.999 4.543a8 8 0 0 0 13.07 6.143A7 7 0 0 1 8 11.5a1 1 0 1 1 1.999 0 5 5 0 0 0 5 5c2.612 0 4.768-2.001 4.998-4.544A8 8 0 0 0 12 4" />
  </Svg>
);
export default SvgRemixLine;
