import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowRightCircleFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 9H8v2h4v3l4-4-4-4z" />
  </Svg>
);
export default SvgArrowRightCircleFill;
