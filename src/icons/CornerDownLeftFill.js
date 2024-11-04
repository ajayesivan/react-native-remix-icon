import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerDownLeftFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 14V5h-2v7H9.414V6.586L3 13l6.414 6.414V14H19z" />
    </Svg>
  );
}

export default SvgCornerDownLeftFill;
