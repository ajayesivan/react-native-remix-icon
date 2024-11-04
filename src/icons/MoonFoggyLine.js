import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMoonFoggyLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M16 20.335v-2.2a7.52 7.52 0 0 0 3.623-4.281 9 9 0 0 1-10.622-8.99A7.52 7.52 0 0 0 5.151 10H3.117a9.505 9.505 0 0 1 8.538-7.963 7 7 0 0 0 10.316 8.728q.027.364.028.735c0 4.01-2.485 7.44-6 8.834M7 20h7v2H7zm-3-8h6v2H4zm-2 4h10v2H2z" />
  </Svg>
);
export default SvgMoonFoggyLine;
