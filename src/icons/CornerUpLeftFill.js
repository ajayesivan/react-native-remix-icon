import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerUpLeftFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 10v9h-2v-7H9.414v5.414L3 11l6.414-6.414V10H19z" />
    </Svg>
  );
}

export default SvgCornerUpLeftFill;
