import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUsbLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 1l3 5h-2v7.381l3-1.499-.001-.882H15V7h4v4h-1.001L18 13.118l-5 2.5v1.553A3.001 3.001 0 0112 23a3 3 0 01-1.31-5.7L6 14l-.001-2.268a2 2 0 112.001 0V13l3 2.086V6H9l3-5zm0 18a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgUsbLine;
