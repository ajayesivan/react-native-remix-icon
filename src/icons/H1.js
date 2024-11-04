import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgH1 = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8z" />
  </Svg>
);
export default SvgH1;
