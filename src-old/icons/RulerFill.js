import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRulerFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4.929 13.207l2.121 2.121 1.414-1.414-2.12-2.121 2.12-2.121 2.829 2.828 1.414-1.414L9.88 8.257 12 6.136l2.121 2.121 1.415-1.414-2.122-2.121 2.829-2.829a1 1 0 011.414 0l4.95 4.95a1 1 0 010 1.414l-14.85 14.85a1 1 0 01-1.414 0l-4.95-4.95a1 1 0 010-1.414l3.536-3.536z" />
    </Svg>
  );
}

export default SvgRulerFill;
