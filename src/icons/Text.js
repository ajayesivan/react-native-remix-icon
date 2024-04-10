import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgText(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 6v15h-2V6H5V4h14v2h-6z" />
    </Svg>
  );
}

export default SvgText;
