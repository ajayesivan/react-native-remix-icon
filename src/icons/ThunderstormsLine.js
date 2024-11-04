import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgThunderstormsLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18zm-4-1.995h3l-5 6.5v-4.5H8l5-6.505z" />
  </Svg>
);
export default SvgThunderstormsLine;
