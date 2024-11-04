import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCalendarCloseFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M9 3V1H7v2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4V1h-2v2zM4 8h16v11H4zm5.879 1.964 2.12 2.122 2.122-2.122 1.414 1.415-2.12 2.121 2.12 2.121-1.414 1.414L12 14.915l-2.122 2.12-1.414-1.414 2.122-2.121-2.122-2.121z" />
  </Svg>
);
export default SvgCalendarCloseFill;
