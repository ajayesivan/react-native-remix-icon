import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowGoForwardFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 7h-5a6 6 0 100 12h9v2h-9a8 8 0 110-16h5V1l6 5-6 5V7z" />
    </Svg>
  );
}

export default SvgArrowGoForwardFill;
