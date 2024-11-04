import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKeyboardBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm2 4v2h2V7H5zm0 4v2h2v-2H5zm0 4v2h14v-2H5zm4-4v2h2v-2H9zm0-4v2h2V7H9zm4 0v2h2V7h-2zm4 0v2h2V7h-2zm-4 4v2h2v-2h-2zm4 0v2h2v-2h-2z" />
    </Svg>
  );
}

export default SvgKeyboardBoxFill;
