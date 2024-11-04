import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFahrenheitFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 12h7v2h-7v7h-2V8a4 4 0 0 1 4-4h7v2h-7a2 2 0 0 0-2 2zm-7.5-2a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  </Svg>
);
export default SvgFahrenheitFill;
