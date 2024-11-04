import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSensorFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 8v2h12V8h-3V2h2v4h5v2h-2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V8H2V6h5V2h2v6H6zm7-6v6h-2V2h2z" />
    </Svg>
  );
}

export default SvgSensorFill;
