import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDraftLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M20 2a1 1 0 0 1 1 1v3.757l-2 2V4H5v16h14v-2.758l2-2V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm1.778 6.808 1.414 1.414L15.414 18l-1.416-.002.002-1.412zM13 12v2H8v-2zm3-4v2H8V8z" />
  </Svg>
);
export default SvgDraftLine;
