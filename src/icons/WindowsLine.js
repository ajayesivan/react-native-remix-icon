import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWindowsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.001 2.5v19l-18-2v-15l18-2zm-2 10.499l-7 .001v5.487l7 .779v-6.267zm-14 4.71l5 .556V13l-5-.001v4.71zm14-6.71V4.735l-7 .777V11l7-.001zm-9-5.265l-5 .556V11l5 .001V5.734z" />
    </Svg>
  );
}

export default SvgWindowsLine;
