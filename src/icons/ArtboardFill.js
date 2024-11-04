import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArtboardFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M8.586 17H3v-2h18v2h-5.586l3.243 3.243-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243-1.414-1.414zM5 3h14a1 1 0 0 1 1 1v10H4V4a1 1 0 0 1 1-1" />
  </Svg>
);
export default SvgArtboardFill;
