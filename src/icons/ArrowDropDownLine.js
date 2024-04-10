import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDropDownLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 15l-4.243-4.242 1.415-1.414L12 12.172l2.828-2.828 1.415 1.414L12 15.001z" />
    </Svg>
  );
}

export default SvgArrowDropDownLine;
