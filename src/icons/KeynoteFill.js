import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKeynoteFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 2c.552 0 1.086.43 1.195.977l1.61 8.046c.108.54-.26.977-.797.977H13v8h4v2H7v-2h4v-8H2.992c-.548 0-.906-.43-.797-.977l1.61-8.046C3.913 2.437 4.445 2 5 2h13.998z" />
    </Svg>
  );
}

export default SvgKeynoteFill;
