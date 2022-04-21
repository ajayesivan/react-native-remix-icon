import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWheelchairLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8 10.341v2.194A3.999 3.999 0 1013.465 18h2.193A6.002 6.002 0 014 16a6.003 6.003 0 014-5.659zM12 17a3 3 0 01-3-3v-4c0-1.044.534-1.964 1.343-2.501a3 3 0 113.314.002A2.99 2.99 0 0115 10v4.999l1.434.001a2 2 0 011.626.836l.089.135 2.708 4.515-1.714 1.028L16.433 17 15 16.999 12 17zm0-8a1 1 0 00-1 1v4a1 1 0 001 1h.999L13 10a1 1 0 00-1-1zm0-5a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgWheelchairLine;
