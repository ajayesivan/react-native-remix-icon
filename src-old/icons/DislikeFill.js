import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDislikeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2.808 1.393l18.384 18.385-1.414 1.414-3.747-3.747L12 21.485l-8.48-8.492a6 6 0 01.034-8.023L1.393 2.808l1.415-1.415zm17.435 3.364a6 6 0 01.236 8.236l-1.635 1.636L7.26 3.046a5.986 5.986 0 014.741 1.483 5.998 5.998 0 018.242.228z" />
    </Svg>
  );
}

export default SvgDislikeFill;
