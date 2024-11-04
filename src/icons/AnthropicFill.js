import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAnthropicFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.765 5h-3.308l5.923 15h3.23L16.766 5zM7.226 5L1.38 20h3.308l1.307-3.154h6.154l1.23 3.077h3.309L10.688 5H7.226zm-.308 9.077l2-5.308 2.077 5.308H6.918z" />
    </Svg>
  );
}

export default SvgAnthropicFill;
