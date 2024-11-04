import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUnsplashFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M8.501 11v5h7v-5h5.5v10h-18V11zm7-8v5h-7V3z" />
  </Svg>
);
export default SvgUnsplashFill;
