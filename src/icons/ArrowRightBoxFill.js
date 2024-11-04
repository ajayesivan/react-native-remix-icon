import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRightBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4zm13.657 9l-5.95 5.95V13H6.345v-2h5.364V6.05l5.95 5.95z" />
    </Svg>
  );
}

export default SvgArrowRightBoxFill;
