import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilePdfLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 16H8V8h4a4 4 0 010 8zm-2-6v4h2a2 2 0 100-4h-2zm5-6H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.998 2H16l5 5v13.992A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992z" />
    </Svg>
  );
}

export default SvgFilePdfLine;
