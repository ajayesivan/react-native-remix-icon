import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVipDiamondFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4.873 3h14.254a1 1 0 01.809.412l3.823 5.256a.5.5 0 01-.037.633L12.367 21.602a.5.5 0 01-.734 0L.278 9.302a.5.5 0 01-.037-.634l3.823-5.256A1 1 0 014.873 3z" />
    </Svg>
  );
}

export default SvgVipDiamondFill;
