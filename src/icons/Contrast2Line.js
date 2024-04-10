import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContrast2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-5-4.681a8.965 8.965 0 005.707-2.612 8.965 8.965 0 002.612-5.707A6 6 0 117 15.316z" />
    </Svg>
  );
}

export default SvgContrast2Line;
