import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCompassLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm3.5-11.5l-2 5-5 2 2-5 5-2z" />
    </Svg>
  );
}

export default SvgCompassLine;
