import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRestaurantFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M21 2v20h-2v-8h-3V7a5 5 0 0 1 5-5M9 13.9V22H7v-8.1A5 5 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5 5 0 0 1-4 4.9" />
  </Svg>
);
export default SvgRestaurantFill;
