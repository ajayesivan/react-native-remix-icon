import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInfoCardLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 6h18v12H3V6zM2 4a1 1 0 00-1 1v14a1 1 0 001 1h20a1 1 0 001-1V5a1 1 0 00-1-1H2zm11 5h6v2h-6V9zm5 4h-5v2h5v-2zM6 13h1v3h2v-5H6v2zm3-5H7v2h2V8z" />
    </Svg>
  );
}

export default SvgInfoCardLine;
