import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCursorLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.387 13.498l2.553 7.014-4.698 1.71-2.553-7.014-3.899 2.445 1.619-16.02 11.537 11.232-4.559.633zm-.01 5.818l-2.715-7.46 2.96-.41-5.64-5.49-.791 7.83 2.531-1.587 2.715 7.46.94-.343z" />
    </Svg>
  );
}

export default SvgCursorLine;
