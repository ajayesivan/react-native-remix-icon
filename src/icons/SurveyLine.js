import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSurveyLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2zM7 6H5v14h14V6h-2v2H7zm2 10v2H7v-2zm0-3v2H7v-2zm0-3v2H7v-2zm6-6H9v2h6z" />
  </Svg>
);
export default SvgSurveyLine;
