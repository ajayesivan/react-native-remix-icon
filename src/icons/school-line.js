import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSchoolLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12 .586 6 6V9h4v10h1v2H1v-2h1V9h4V6.586zM18 19h2v-8h-2zM6 11H4v8h2zm2-3.586V19h3v-7h2v7h3V7.414l-4-4z" />
  </Svg>
);
export default SvgSchoolLine;
