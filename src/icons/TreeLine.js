import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTreeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6 7a6 6 0 1 1 11.95.775A6 6 0 0 1 15 19h-2v3h-2v-3H8.5A5.5 5.5 0 0 1 6.191 8.507 6 6 0 0 1 6 7m1.01 3.332A3.502 3.502 0 0 0 8.5 17H15a4 4 0 0 0 1.454-7.728l-.841-.328C15.79 8.304 16 7.672 16 7a4 4 0 1 0-6.4 3.2L8.4 11.8a6 6 0 0 1-1.39-1.468" />
  </Svg>
);
export default SvgTreeLine;
