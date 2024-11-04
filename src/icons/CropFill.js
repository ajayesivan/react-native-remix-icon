import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCropFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 17h3v2h-3v3h-2v-3H6a1 1 0 01-1-1V7H2V5h3V2h2v3h11a1 1 0 011 1v11z" />
    </Svg>
  );
}

export default SvgCropFill;
