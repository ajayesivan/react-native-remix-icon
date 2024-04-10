import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWaterPercentLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.05 8.047L12 3.097l4.95 4.95a7 7 0 11-9.9 0zm11.314-1.414L12 .269 5.636 6.633a9 9 0 1012.728 0zm-2.121 3.538l-1.414-1.414-7.072 7.071 1.415 1.415 7.07-7.072zM8.11 11.232a1.5 1.5 0 102.121-2.121 1.5 1.5 0 00-2.121 2.121zm7.778 5.657a1.5 1.5 0 11-2.121-2.121 1.5 1.5 0 012.121 2.12z" />
    </Svg>
  );
}

export default SvgWaterPercentLine;
