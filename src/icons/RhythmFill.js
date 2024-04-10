import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRhythmFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 9h2v12H2V9zm6-6h2v18H8V3zm6 9h2v9h-2v-9zm6-6h2v15h-2V6z" />
    </Svg>
  );
}

export default SvgRhythmFill;
