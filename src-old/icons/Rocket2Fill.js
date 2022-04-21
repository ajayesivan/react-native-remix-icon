import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRocket2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8.498 20h7.004A6.523 6.523 0 0112 23.502 6.523 6.523 0 018.498 20zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9v5.805zM12 11a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgRocket2Fill;
