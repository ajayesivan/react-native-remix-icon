import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKeynoteFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 12v8h4v2H7v-2h4v-8H2.992c-.548 0-.906-.43-.797-.977l1.61-8.046C3.913 2.437 4.445 2 5 2h13.998c.553 0 1.087.43 1.196.977l1.61 8.046c.108.54-.26.977-.797.977H13z" />
    </Svg>
  );
}

export default SvgKeynoteFill;
