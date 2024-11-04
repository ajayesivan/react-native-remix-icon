import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRightDownLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.59 16.003L5.982 7.397l1.414-1.415 8.607 8.607V7.003h2v11h-11v-2h7.585z" />
    </Svg>
  );
}

export default SvgArrowRightDownLine;
