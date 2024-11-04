import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUserForbidLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 7a4 4 0 118 0 4 4 0 01-8 0zm4-6a6 6 0 100 12 6 6 0 000-12zm3 17a3 3 0 014.293-2.708l-4 4.001A2.988 2.988 0 0115 18zm1.707 2.708l4-4.001a3 3 0 01-4.001 4.001zM18 13a5 5 0 100 10 5 5 0 000-10zm-6 1c.084 0 .168.001.252.004a6.97 6.97 0 00-.975 2.04A6.001 6.001 0 006 22H4a8 8 0 018-8z" />
    </Svg>
  );
}

export default SvgUserForbidLine;
