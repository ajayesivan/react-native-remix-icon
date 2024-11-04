import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGlobalFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.049 13m0-2a10.005 10.005 0 0 1 8.402-8.881 17.9 17.9 0 0 0-2.925 8.88zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.881 10.005 10.005 0 0 1 8.403 8.88m0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13zM9.53 13h4.94A15.9 15.9 0 0 1 12 20.592 15.9 15.9 0 0 1 9.53 13m0-2A15.9 15.9 0 0 1 12 3.408 15.9 15.9 0 0 1 14.47 11z" />
  </Svg>
);
export default SvgGlobalFill;
