import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWaterPercentFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 .269L5.636 6.633a9 9 0 1012.728 0L12 .269zm4.243 9.902l-7.071 7.072-1.415-1.415 7.072-7.07 1.414 1.413zM8.11 9.111a1.5 1.5 0 112.121 2.121 1.5 1.5 0 01-2.121-2.121zm7.778 7.778a1.5 1.5 0 11-2.121-2.121 1.5 1.5 0 012.121 2.12z" />
    </Svg>
  );
}

export default SvgWaterPercentFill;
