import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgToggleFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 5h8a7 7 0 110 14H8A7 7 0 118 5zm8 10a3 3 0 100-6 3 3 0 000 6z" />
    </Svg>
  );
}

export default SvgToggleFill;
