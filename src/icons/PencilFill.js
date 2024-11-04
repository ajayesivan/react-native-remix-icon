import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPencilFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m12.9 6.855 4.242 4.242-9.9 9.9H3v-4.243zm1.414-1.415 2.121-2.121a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415l-2.122 2.121z" />
  </Svg>
);
export default SvgPencilFill;
