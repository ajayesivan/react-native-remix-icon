import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTyphoonFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.654 1.7l-2.782 2.533a9.137 9.137 0 013.49 1.973c3.512 3.2 3.512 8.388 0 11.588-2.592 2.36-6.598 3.862-12.016 4.506l2.782-2.533a9.138 9.138 0 01-3.49-1.973c-3.512-3.2-3.533-8.369 0-11.588C8.23 3.846 12.237 2.344 17.655 1.7zM12 8c-2.485 0-4.5 1.79-4.5 4s2.015 4 4.5 4 4.5-1.79 4.5-4-2.015-4-4.5-4z" />
    </Svg>
  );
}

export default SvgTyphoonFill;
