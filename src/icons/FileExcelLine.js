import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileExcelLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.2 12l2.8 4h-2.4L12 13.714 10.4 16H8l2.8-4L8 8h2.4l1.6 2.286L13.6 8H15V4H5v16h14V8h-3l-2.8 4zM3 2.992C3 2.444 3.447 2 3.998 2H16l5 5v13.992A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992z" />
    </Svg>
  );
}

export default SvgFileExcelLine;
