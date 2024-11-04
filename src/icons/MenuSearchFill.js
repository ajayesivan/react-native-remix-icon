import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuSearchFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.617 13.032a5.5 5.5 0 111.414-1.414l2.676 2.675-1.414 1.414-2.675-2.675zM3 4h5v2H3V4zm0 7h5v2H3v-2zm0 7h18v2H3v-2z" />
    </Svg>
  );
}

export default SvgMenuSearchFill;
