import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHotelBedLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 0 1 4 4m-2 3v-3a2 2 0 0 0-2-2h-4v5zM8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
  </Svg>
);
export default SvgHotelBedLine;
