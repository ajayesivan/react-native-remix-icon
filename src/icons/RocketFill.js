import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRocketFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.33 15.929a13.063 13.063 0 01-.33-2.93c0-5.087 2.903-9.435 7-11.181C16.099 3.564 19 7.912 19 13c0 1.01-.114 1.991-.33 2.929l2.02 1.795a.5.5 0 01.097.631l-2.457 4.096a.5.5 0 01-.782.096l-2.255-2.254a1 1 0 00-.707-.293H9.415a1 1 0 00-.707.293l-2.255 2.254a.5.5 0 01-.782-.096l-2.457-4.096a.5.5 0 01.096-.63l2.02-1.796zm6.67-2.93A2 2 0 1012 9a2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgRocketFill;
