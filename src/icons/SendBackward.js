import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSendBackward(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 3a1 1 0 011 1v5h5a1 1 0 011 1v10a1 1 0 01-1 1H10a1 1 0 01-1-1v-5H4a1 1 0 01-1-1V4a1 1 0 011-1h10zm-1 2H5v8h4v-3a1 1 0 011-1h3V5z" />
    </Svg>
  );
}

export default SvgSendBackward;
