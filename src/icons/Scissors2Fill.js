import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScissors2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 14.118l-2.317 2.316a4 4 0 11-2.121-2.121l2.317-2.316L4.21 6.329a2 2 0 010-2.828l.708-.707L12 9.875l7.081-7.081.708.707a2 2 0 010 2.828l-5.668 5.668 2.317 2.316a4 4 0 11-2.121 2.121L12 14.119zm-6 5.879a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgScissors2Fill;
