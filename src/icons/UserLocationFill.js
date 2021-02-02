import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUserLocationFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 14v8H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm8.828 7.828L18 23.657l-2.828-2.829a4 4 0 115.656 0zM18 17a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgUserLocationFill;
