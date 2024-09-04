import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCalendarView = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 15h16V9H4zm7-6H6v4h5z" />
  </Svg>
);
export default SvgCalendarView;
