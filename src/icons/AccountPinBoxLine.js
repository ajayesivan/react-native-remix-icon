import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAccountPinBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 21l-2 2-2-2H4.995A1.995 1.995 0 013 19.005V4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0119.005 21H14zm5-2V5H5v14h5.828L12 20.172 13.172 19H19zm-11.028-.82a9.977 9.977 0 01-1.751-.978A6.994 6.994 0 0112.102 14c2.4 0 4.517 1.207 5.778 3.047a9.987 9.987 0 01-1.724 1.025A4.993 4.993 0 0012.101 16c-1.716 0-3.23.864-4.13 2.18zM12 13a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Svg>
  );
}

export default SvgAccountPinBoxLine;
