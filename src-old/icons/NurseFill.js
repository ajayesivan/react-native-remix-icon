import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNurseFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14.956 15.564A8.008 8.008 0 0119.938 22H4.062a8.008 8.008 0 014.982-6.436L12 20l2.956-4.436zM18 2v6A6 6 0 116 8V2h12zm-2 6H8c0 2.21 1.79 4 4 4s4-1.79 4-4z" />
    </Svg>
  );
}

export default SvgNurseFill;
