import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGpsLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M7.132 20.737A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-5.132 8.737l-.896-1.791a8 8 0 1 0-7.945 0zm1.792-3.584a6 6 0 1 1 6.151 0l-.898-1.797a4 4 0 1 0-4.354 0zM12 16l3 6H9z" />
  </Svg>
);
export default SvgGpsLine;
