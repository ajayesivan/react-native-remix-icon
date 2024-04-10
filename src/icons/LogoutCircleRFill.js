import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogoutCircleRFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5-6l5-4-5-4v3H9v2h8v3z" />
    </Svg>
  );
}

export default SvgLogoutCircleRFill;
