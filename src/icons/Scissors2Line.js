import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScissors2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 13.41l-2.554 2.555a4 4 0 11-1.414-1.414l2.554-2.554-6.021-6.021a2 2 0 010-2.829L12 10.582l7.435-7.435a2 2 0 010 2.829l-6.02 6.02 2.553 2.554a4 4 0 11-1.414 1.414L12 13.412zm-6 6.587a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgScissors2Line;
