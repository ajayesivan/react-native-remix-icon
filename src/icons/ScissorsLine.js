import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgScissorsLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M9.446 8.029 12 10.582l6.728-6.727a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414l2.554-2.554-2.554-2.554a4 4 0 1 1 1.414-1.414m5.38 5.379 6.73 6.73a2 2 0 0 1-2.828 0l-5.317-5.316zm-7.412 3.175a2 2 0 1 0-2.828 2.828 2 2 0 0 0 2.828-2.829m0-9.172a2 2 0 1 0-2.828-2.828A2 2 0 0 0 7.414 7.41" />
  </Svg>
);
export default SvgScissorsLine;
