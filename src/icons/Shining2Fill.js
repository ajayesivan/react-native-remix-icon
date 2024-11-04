import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShining2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 .5L16 8l7.5 4-7.5 4-4 7.5L8 16 .5 12 8 8l4-7.5z" />
    </Svg>
  );
}

export default SvgShining2Fill;
