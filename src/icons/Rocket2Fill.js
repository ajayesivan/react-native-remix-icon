import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRocket2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.498 20.005h7.004A6.522 6.522 0 0112 23.507a6.522 6.522 0 01-3.502-3.502zM18 14.81l2 2.268v1.927H4v-1.927l2-2.268V9.005c0-3.483 2.504-6.447 6-7.545 3.496 1.098 6 4.062 6 7.545v5.804zm-6-3.805a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgRocket2Fill;
