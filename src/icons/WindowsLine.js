import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgWindowsLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M21.001 2.5v19l-18-2v-15zm-2 10.499-7 .001v5.487l7 .779zm-14 4.71 5 .556V13l-5-.001zm14-6.71V4.735l-7 .777V11zm-9-5.265-5 .556V11l5 .001z" />
  </Svg>
);
export default SvgWindowsLine;
