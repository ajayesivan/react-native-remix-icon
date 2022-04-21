import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHailFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18.995 17.794a4 4 0 00-5.085-3.644A4.001 4.001 0 006 15c0 1.08.428 2.059 1.122 2.778a8 8 0 119.335-10.68 5.5 5.5 0 012.537 10.696zM10 17a2 2 0 110-4 2 2 0 010 4zm5 3a2 2 0 110-4 2 2 0 010 4zm-5 3a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgHailFill;
