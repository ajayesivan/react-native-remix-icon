import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNotificationSnoozeFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M22 17h-2v-7a8 8 0 1 0-16 0v7H2v2h20zm-7 6v-2H9v2zM9 9V7h6v2.414L11.414 13H15v2H9v-2.414L12.586 9z" />
  </Svg>
);
export default SvgNotificationSnoozeFill;
