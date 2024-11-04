import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSyringeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m21.678 7.98-1.414 1.413-2.122-2.12-2.121 2.12 3.536 3.536-1.415 1.414-.707-.707L11.071 20H5.414l-2.12 2.121-1.415-1.414L4 18.586v-5.657l6.364-6.364-.707-.707 1.414-1.414 3.536 3.535 2.121-2.121-2.121-2.121 1.414-1.415zm-5.657 4.242-4.243-4.243-1.414 1.414 2.121 2.122-1.414 1.414-2.121-2.121-1.414 1.414 2.121 2.121-1.414 1.414-2.121-2.121-.122.121V18h4.243z" />
  </Svg>
);
export default SvgSyringeLine;
