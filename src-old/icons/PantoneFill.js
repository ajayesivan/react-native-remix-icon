import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPantoneFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 18.922l-1.35-.545a1 1 0 01-.552-1.302L4 12.367v6.555zM8.86 21H7a1 1 0 01-1-1v-6.078L8.86 21zM6.022 5.968l9.272-3.746a1 1 0 011.301.552l5.62 13.908a1 1 0 01-.553 1.302L12.39 21.73a1 1 0 01-1.302-.553L5.47 7.27a1 1 0 01.553-1.301zM9 9a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgPantoneFill;
