import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarricadeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6.493 19h11.014l-.667-3H7.16zm13.063 0H21v2H3v-2h1.444L7.826 3.783A1 1 0 0 1 8.802 3h6.396a1 1 0 0 1 .976.783zM7.604 14h8.792l-.89-4H8.494zm1.334-6h6.124l-.666-3H9.604z" />
  </Svg>
);
export default SvgBarricadeLine;
