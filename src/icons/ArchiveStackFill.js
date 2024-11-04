import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArchiveStackFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 5h16V3H4zm16 4H4V7h16zM9 13h6v-2h6v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9h6z" />
  </Svg>
);
export default SvgArchiveStackFill;
