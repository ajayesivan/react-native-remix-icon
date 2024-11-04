import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgEditBoxLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m16.757 2.997-2 2H5v14h14V9.239l2-2v12.758a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1zm3.728-.9L21.9 3.511l-9.193 9.193-1.412.002-.002-1.416z" />
  </Svg>
);
export default SvgEditBoxLine;
