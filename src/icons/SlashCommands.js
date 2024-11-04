import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSlashCommands(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3h2v4H3V3zm6.788 18H7.66l6.551-18h2.129L9.788 21zM21 3h-2v4h2V3z" />
    </Svg>
  );
}

export default SvgSlashCommands;
