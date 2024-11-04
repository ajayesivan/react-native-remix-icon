import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGlassesFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M1 12a5 5 0 0 1 8.192-3.848A3.99 3.99 0 0 1 12 7c1.095 0 2.086.44 2.808 1.152a5 5 0 1 1-1.264 1.578A2 2 0 0 0 12 9c-.62 0-1.177.283-1.544.73A5 5 0 1 1 1 12" />
  </Svg>
);
export default SvgGlassesFill;
