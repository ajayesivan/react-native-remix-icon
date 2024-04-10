import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSave2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3h13l3.707 3.707a1 1 0 01.293.707V20a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm8 15a3 3 0 100-6 3 3 0 000 6zM5 5v4h10V5H5z" />
    </Svg>
  );
}

export default SvgSave2Fill;
