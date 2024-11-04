import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilePptLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 2.992C3 2.444 3.447 2 3.998 2H16l5 5v13.992A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992zM5 4v16h14V8h-3v6h-6v2H8V8h7V4H5zm5 6v2h4v-2h-4z" />
    </Svg>
  );
}

export default SvgFilePptLine;
