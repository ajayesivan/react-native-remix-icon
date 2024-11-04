import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPentagonLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 3.03l8.53 6.198-3.258 10.028H6.729L3.47 9.228 12 3.03zm10.747 5.478L12 .7 1.253 8.508l4.105 12.634h13.284l4.105-12.634z" />
    </Svg>
  );
}

export default SvgPentagonLine;
