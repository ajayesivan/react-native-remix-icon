import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSliceLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m15.69 12.915 1.769 1.767c-6.01 6.01-10.96 6.01-15.203 4.597L17.812 3.722l3.536 3.536zm-2.827 0 5.656-5.657-.707-.707L6.314 18.048c2.732.108 5.358-.906 8.267-3.415z" />
  </Svg>
);
export default SvgSliceLine;
