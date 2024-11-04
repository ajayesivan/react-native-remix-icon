import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileCheckLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 20v2H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16l5 5v7h-2V8h-4V4H5v16zm2.465-.535L18 23l4.95-4.95-1.414-1.414L18 20.172 15.88 18.05z" />
  </Svg>
);
export default SvgFileCheckLine;
