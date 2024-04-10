import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerUpLeftDoubleFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 19v-9h-5.586V4.586L8 11l6.414 6.414V12H18v7h2zM10.164 6.05L8.75 4.636 2.386 11l6.363 6.364 1.415-1.414L5.214 11l4.95-4.95z" />
    </Svg>
  );
}

export default SvgCornerUpLeftDoubleFill;
