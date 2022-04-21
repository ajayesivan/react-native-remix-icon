import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRightDownFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11.637 13.05L5.98 7.395 7.394 5.98l5.657 5.657L18 6.687V18H6.687z" />
    </Svg>
  );
}

export default SvgArrowRightDownFill;
