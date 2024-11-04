import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShape2Fill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M2 2h5v5H2zm0 15h5v5H2zM17 2h5v5h-5zm0 15h5v5h-5zM8 4h8v2H8zM4 8h2v8H4zm14 0h2v8h-2zM8 18h8v2H8z" />
  </Svg>
);
export default SvgShape2Fill;
