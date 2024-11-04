import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCrossFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M14 2h-4v6H4v4h6v10h4V12h6V8h-6z" />
  </Svg>
);
export default SvgCrossFill;
