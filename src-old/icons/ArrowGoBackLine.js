import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowGoBackLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 110 16H4v-2h9a6 6 0 100-12H5.828z" />
    </Svg>
  );
}

export default SvgArrowGoBackLine;
