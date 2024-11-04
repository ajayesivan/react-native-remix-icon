import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerUpLeftDoubleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 10v9h-2v-7h-6.172l3.95 3.95-1.414 1.414L8 11l6.364-6.364 1.414 1.414-3.95 3.95H20zM8.75 4.636l1.414 1.414L5.214 11l4.95 4.95-1.414 1.414L2.386 11 8.75 4.636z" />
    </Svg>
  );
}

export default SvgCornerUpLeftDoubleLine;
