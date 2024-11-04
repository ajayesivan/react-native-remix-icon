import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBox1Fill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m12 1 9.5 5.5v11L13 22.421V11.423l-9.502-5.5zM2.5 7.656V17.5l8.5 4.921v-9.844z" />
  </Svg>
);
export default SvgBox1Fill;
