import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileExcelFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-2.8 10L16 8h-2.4L12 10.286 10.4 8H8l2.8 4L8 16h2.4l1.6-2.286L13.6 16H16l-2.8-4z" />
    </Svg>
  );
}

export default SvgFileExcelFill;
