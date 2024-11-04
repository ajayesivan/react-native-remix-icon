import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInboxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm6 9a3 3 0 106 0h5V5H4v7h5z" />
    </Svg>
  );
}

export default SvgInboxFill;
