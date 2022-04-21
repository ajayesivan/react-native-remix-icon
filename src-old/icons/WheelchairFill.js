import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWheelchairFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8 10.341v2.194A3.999 3.999 0 1013.465 18h2.193A6.002 6.002 0 014 16a6.003 6.003 0 014-5.659zM12 17a3 3 0 01-3-3v-4a3 3 0 116 0v5h1.434a2 2 0 011.626.836l.089.135 2.708 4.515-1.714 1.028L16.433 17H12zm0-15a2.5 2.5 0 010 5 2.5 2.5 0 010-5z" />
    </Svg>
  );
}

export default SvgWheelchairFill;
