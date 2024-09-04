import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBookletLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M20.005 2C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2zM8 4H6v16h2zm12 0H10v16h10z" />
  </Svg>
);
export default SvgBookletLine;
