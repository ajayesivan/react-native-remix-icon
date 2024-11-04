import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTreeFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M18 7q0 .393-.05.774A6 6 0 0 1 13 18.658V22h-2v-3.6a5.5 5.5 0 0 1-6.517-8.657A8 8 0 0 0 6.286 12.6l1.428-1.4A6 6 0 0 1 6 7a6 6 0 1 1 12 0" />
  </Svg>
);
export default SvgTreeFill;
