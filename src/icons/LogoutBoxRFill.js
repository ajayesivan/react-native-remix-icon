import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogoutBoxRFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 22a1 1 0 01-1-1V3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1H5zm10-6l5-4-5-4v3H9v2h6v3z" />
    </Svg>
  );
}

export default SvgLogoutBoxRFill;
