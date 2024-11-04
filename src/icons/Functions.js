import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFunctions(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 18l7.68-6L5 6V4h14v2H8.263L16 12l-7.737 6H19v2H5v-2z" />
    </Svg>
  );
}

export default SvgFunctions;
