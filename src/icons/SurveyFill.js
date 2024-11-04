import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSurveyFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6 4v4h12V4h2.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4zm3 13H7v2h2zm0-3H7v2h2zm0-3H7v2h2zm7-9v4H8V2z" />
  </Svg>
);
export default SvgSurveyFill;
