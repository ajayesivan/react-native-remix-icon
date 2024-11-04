import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAddLargeFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 11V2h2v9h9v2h-9v9h-2v-9H2v-2z" />
  </Svg>
);
export default SvgAddLargeFill;
