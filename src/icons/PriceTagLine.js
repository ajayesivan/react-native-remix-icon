import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPriceTagLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m3.005 7 8.445-5.63a1 1 0 0 1 1.11 0L21.005 7v14a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1zm2 1.07V20h14V8.07l-7-4.667zm7 2.93a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </Svg>
);
export default SvgPriceTagLine;
