import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHonorOfKingsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.33 4.256l-1.424 1.423a8.001 8.001 0 00-12.272 9.444l2.417-2.417a5.002 5.002 0 017.707-4.879l-1.464 1.465a3.001 3.001 0 00-4.001 4l-6.45 6.45c-.034-3.5-.591-4.811-.788-6.701A9.98 9.98 0 014.93 4.929c3.666-3.666 9.471-3.89 13.4-.673zm2.83.002c.033 3.5.59 4.81.787 6.701a9.98 9.98 0 01-2.875 8.112c-3.666 3.666-9.471 3.89-13.4.673l1.424-1.423a8.001 8.001 0 0012.272-9.444l-2.417 2.417a5.002 5.002 0 01-7.707 4.878l1.464-1.464a3.001 3.001 0 004.001-4l6.45-6.45z" />
    </Svg>
  );
}

export default SvgHonorOfKingsLine;
