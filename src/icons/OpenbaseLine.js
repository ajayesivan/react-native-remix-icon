import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgOpenbaseLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 3L2 5.996l1 9.464 9 7.04 9-7.04 1-9.464L12 3zm7.837 4.436L12 19.96 4.163 7.436 12 5.088l7.837 2.348z" />
    </Svg>
  );
}

export default SvgOpenbaseLine;
