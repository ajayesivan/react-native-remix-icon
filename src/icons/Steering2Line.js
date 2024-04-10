import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSteering2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM8 13l-3.938.001A8.004 8.004 0 0011 19.938V16a3 3 0 01-3-3zm11.938.001L16 13a3 3 0 01-3 3l.001 3.938a8.004 8.004 0 006.937-6.937zM14 12h-4v1a1 1 0 001 1h2a1 1 0 001-1v-1zm-2-8a8.001 8.001 0 00-7.938 7H8a1 1 0 011-1h6a1 1 0 011 1h3.938A8.001 8.001 0 0012 4z" />
    </Svg>
  );
}

export default SvgSteering2Line;