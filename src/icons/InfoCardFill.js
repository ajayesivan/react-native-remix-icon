import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgInfoCardFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M1 5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm8 3H7v2h2zm-2 5v3h2v-5H6v2zm6-4v2h6V9zm5 4h-5v2h5z" />
  </Svg>
);
export default SvgInfoCardFill;
