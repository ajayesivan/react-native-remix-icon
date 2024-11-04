import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutBottomFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 16v4a1 1 0 01-1 1H3a1 1 0 01-1-1v-4h20zM21 3a1 1 0 011 1v10H2V4a1 1 0 011-1h18z" />
    </Svg>
  );
}

export default SvgLayoutBottomFill;
