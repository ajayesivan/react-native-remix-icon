import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgForbidFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM8.523 7.109A6.04 6.04 0 007.11 8.523l8.368 8.368a6.037 6.037 0 001.414-1.414L8.523 7.109z" />
    </Svg>
  );
}

export default SvgForbidFill;
