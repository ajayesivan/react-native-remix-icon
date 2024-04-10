import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRightUpFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.05 12.361l-5.656 5.657-1.414-1.414 5.657-5.657-4.95-4.95H18v11.314l-4.95-4.95z" />
    </Svg>
  );
}

export default SvgArrowRightUpFill;
