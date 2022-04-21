import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailCheckFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 13.341A6 6 0 0014.341 21H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v9.341zm-9.94-1.658L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439zM19 22l-3.536-3.536 1.415-1.414L19 19.172l3.536-3.536 1.414 1.414L19 22z" />
    </Svg>
  );
}

export default SvgMailCheckFill;
