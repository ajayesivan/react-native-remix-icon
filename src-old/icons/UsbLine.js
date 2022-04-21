import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUsbLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 1l3 5h-2v7.381l3-1.499-.001-.882H15V7h4v4h-1.001L18 13.118l-5 2.5v1.553a3 3 0 11-2.31.129L6 14l-.001-2.268a2 2 0 112.001 0V13l3 2.086V6H9l3-5zm0 18a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgUsbLine;
