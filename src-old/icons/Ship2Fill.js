import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShip2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9 4h5.446a1 1 0 01.848.47L18.75 10h4.408a.5.5 0 01.439.74l-3.937 7.217A4.992 4.992 0 0115 16a4.992 4.992 0 01-4 2 4.992 4.992 0 01-4-2 4.992 4.992 0 01-4.55 1.97l-1.236-6.791A1 1 0 012.198 10H3V5a1 1 0 011-1h1V1h4v3zm-4 6h11.392l-2.5-4H5v4zM3 20a5.978 5.978 0 004-1.528A5.978 5.978 0 0011 20a5.978 5.978 0 004-1.528A5.978 5.978 0 0019 20h2v2h-2a7.963 7.963 0 01-4-1.07A7.963 7.963 0 0111 22a7.963 7.963 0 01-4-1.07A7.963 7.963 0 013 22H1v-2h2z" />
    </Svg>
  );
}

export default SvgShip2Fill;
