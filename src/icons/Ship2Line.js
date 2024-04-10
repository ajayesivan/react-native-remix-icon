import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShip2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 4h5.446a1 1 0 01.848.47L18.75 10h4.408a.5.5 0 01.439.74L19.637 18H19a6.01 6.01 0 01-1.535-.198L20.63 12H3.4l1.048 5.824A6.012 6.012 0 013 18h-.545l-1.24-6.821A1 1 0 012.197 10H3V5a1 1 0 011-1h1V1h4v3zm-4 6h11.392l-2.5-4H5v4zM3 20a5.978 5.978 0 004-1.528A5.978 5.978 0 0011 20a5.978 5.978 0 004-1.528A5.978 5.978 0 0019 20h2v2h-2a7.963 7.963 0 01-4-1.07A7.963 7.963 0 0111 22a7.963 7.963 0 01-4-1.07A7.963 7.963 0 013 22H1v-2h2z" />
    </Svg>
  );
}

export default SvgShip2Line;
