import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRainyFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.86 18l-3.153-3.153a1 1 0 00-1.414 0L8.18 17.96A8.001 8.001 0 1115.98 6.087 6 6 0 1117 18h-1.139zm-5.628.732L12 16.965l1.768 1.767a2.5 2.5 0 11-3.536 0z" />
    </Svg>
  );
}

export default SvgRainyFill;
