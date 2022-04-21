import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPinDistanceFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11.39 10.39L7.5 14.277 3.61 10.39a5.5 5.5 0 117.78 0zM7.5 8.5a2 2 0 100-4 2 2 0 000 4zm12.89 10.89l-3.89 3.888-3.89-3.889a5.5 5.5 0 117.78 0zM16.5 17.5a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgPinDistanceFill;
