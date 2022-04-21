import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDropUpFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 10l4 4H8z" />
    </Svg>
  );
}

export default SvgArrowDropUpFill;
