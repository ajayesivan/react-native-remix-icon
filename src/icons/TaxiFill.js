import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTaxiFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M22 12v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9l2.48-5.788A2 2 0 0 1 6.32 5H9V3h6v2h2.681a2 2 0 0 1 1.838 1.212zM4.176 12h15.648l-2.143-5H6.32zM6.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  </Svg>
);
export default SvgTaxiFill;
