import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDropUpFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 10l4 4H8l4-4z" />
    </Svg>
  );
}

export default SvgArrowDropUpFill;
