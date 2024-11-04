import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBrushFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.289 6.213l4.939-3.842a1 1 0 011.32.083l2.995 2.994a1 1 0 01.082 1.32l-3.84 4.939a7.505 7.505 0 01-7.283 9.292C8 20.999 3.5 19.497 1 17.997c3.98-3 3.047-4.81 3.5-6.5 1.058-3.95 4.842-6.258 8.789-5.284zM16.7 8.092c.066.063.13.128.194.193L18.03 9.42l2.475-3.182-1.746-1.746-3.182 2.475L16.7 8.092z" />
    </Svg>
  );
}

export default SvgBrushFill;
