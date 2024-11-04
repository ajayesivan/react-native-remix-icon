import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 01-.993.992H3.993A1 1 0 013 20.993V8zm7-4.5L4.5 9H10V3.5z" />
    </Svg>
  );
}

export default SvgFileFill;
