import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolder2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM20 11H4v8h16v-8zm0-2V7h-8.414l-2-2H4v4h16z" />
    </Svg>
  );
}

export default SvgFolder2Line;
