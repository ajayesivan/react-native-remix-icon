import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProhibitedLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.094 5.68L18.32 16.906A8 8 0 007.094 5.68zm9.812 12.64L5.68 7.094A8 8 0 0016.906 18.32zM4.929 4.929A9.972 9.972 0 0112 2c5.523 0 10 4.477 10 10a9.972 9.972 0 01-2.929 7.071A9.972 9.972 0 0112 22C6.477 22 2 17.523 2 12a9.972 9.972 0 012.929-7.071z" />
    </Svg>
  );
}

export default SvgProhibitedLine;
