import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeftBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4zm2.343 9l5.95-5.95V11h5.364v2h-5.364v4.95L6.343 12z" />
    </Svg>
  );
}

export default SvgArrowLeftBoxFill;
