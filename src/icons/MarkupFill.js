import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMarkupFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m5.051-3.796-.862-3.447a1 1 0 0 0-.97-.757H8.781a1 1 0 0 0-.97.757l-.862 3.447A7.97 7.97 0 0 0 12 19.997a7.97 7.97 0 0 0 5.051-1.796M10 11.997h4v-1.5l-1.039-3.635a1 1 0 0 0-1.922 0L10 10.497z" />
  </Svg>
);
export default SvgMarkupFill;
