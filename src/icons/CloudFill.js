import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCloudFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 7a8 8 0 0 0-7.493 5.19l1.874.703A6.002 6.002 0 0 1 23 15a6 6 0 0 1-6 6H7A6 6 0 0 1 5.008 9.339a7 7 0 0 1 13.757-2.143A8 8 0 0 0 17 7" />
  </Svg>
);
export default SvgCloudFill;
