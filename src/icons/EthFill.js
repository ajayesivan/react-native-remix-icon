import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgEthFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 0 4.63 12.22 12 16.574l7.37-4.354zm0 24L4.63 13.617 12 18l7.37-4.383z" />
  </Svg>
);
export default SvgEthFill;
