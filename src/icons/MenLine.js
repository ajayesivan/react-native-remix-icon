import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.05 8.537L18.585 5H14V3h8v8h-2V6.414l-3.537 3.537a7.5 7.5 0 11-1.414-1.414zM10.5 20a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" />
    </Svg>
  );
}

export default SvgMenLine;
