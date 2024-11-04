import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPantoneLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m5.765 8-.296-.73a1 1 0 0 1 .553-1.302l9.272-3.746a1 1 0 0 1 1.302.552l5.619 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L11 20.96V21H7a1 1 0 0 1-1-1v-.27l-3.35-1.353a1 1 0 0 1-.552-1.302zM8 19h2.209L8 13.533zm-2-6.244-1.673 4.141L6 17.608zm1.698-5.309 4.87 12.054 7.418-2.997-4.87-12.053zm2.979 2.033a1 1 0 1 1-.75-1.855 1 1 0 0 1 .75 1.855" />
  </Svg>
);
export default SvgPantoneLine;
