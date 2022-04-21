import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeftUpFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12.36 10.947l5.658 5.656-1.415 1.415-5.656-5.657-4.95 4.95V5.997H17.31z" />
    </Svg>
  );
}

export default SvgArrowLeftUpFill;
