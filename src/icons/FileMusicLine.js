import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileMusicLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 8v2h-3v4.5a2.5 2.5 0 11-2-2.45V8h4V4H5v16h14V8h-3zM3 2.992C3 2.444 3.447 2 3.998 2H16l5 5v13.992A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992z" />
    </Svg>
  );
}

export default SvgFileMusicLine;
