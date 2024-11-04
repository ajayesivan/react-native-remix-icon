import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCompassFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.5-13.5l-5 2-2 5 5-2 2-5z" />
    </Svg>
  );
}

export default SvgCompassFill;
