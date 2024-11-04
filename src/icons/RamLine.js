import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRamLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 7h18v10h-2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2H7v-2H5v2H3V7zM2 5a1 1 0 00-1 1v12a1 1 0 001 1h20a1 1 0 001-1V6a1 1 0 00-1-1H2zm9 4H5v3h6V9zm2 0h6v3h-6V9z" />
    </Svg>
  );
}

export default SvgRamLine;
