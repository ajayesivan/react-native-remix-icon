import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHeart2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.243 4.757a6 6 0 01.236 8.236l-8.48 8.492-8.478-8.492a6 6 0 018.48-8.464 5.998 5.998 0 018.242.228zM5.172 6.172a4 4 0 00-.192 5.451L12 18.654l7.02-7.03a4 4 0 00-5.646-5.64l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069a4.001 4.001 0 00-5.328.295z" />
    </Svg>
  );
}

export default SvgHeart2Line;
