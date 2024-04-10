import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAedElectrodesFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 3a1 1 0 00-1 1v3H4a1 1 0 00-1 1v12a1 1 0 001 1h5v2h2v-2h5a1 1 0 001-1v-3h3a1 1 0 001-1V4a1 1 0 00-1-1H8zm9 12V8a1 1 0 00-1-1H9V5h10v10h-2z" />
    </Svg>
  );
}

export default SvgAedElectrodesFill;
