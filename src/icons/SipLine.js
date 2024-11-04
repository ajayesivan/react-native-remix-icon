import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSipLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m6.457 18.954 8.564-8.564-1.414-1.414-8.564 8.564zm5.735-11.392-1.414-1.414 1.414-1.415 1.768 1.768 2.829-2.828a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 0 1 0 1.414l-2.828 2.829 1.768 1.767-1.415 1.415-1.414-1.415-9.192 9.193H3v-4.243z" />
  </Svg>
);
export default SvgSipLine;
