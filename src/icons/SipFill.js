import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSipFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m13.96 6.501 2.829-2.828a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 0 1 0 1.414l-2.828 2.829 1.768 1.767-1.415 1.415-7.07-7.071 1.413-1.415zm-3.182 2.475 4.243 4.243-7.778 7.778H3v-4.243z" />
  </Svg>
);
export default SvgSipFill;
