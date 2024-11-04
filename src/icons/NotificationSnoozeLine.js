import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNotificationSnoozeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M22 17h-2v-7a8 8 0 1 0-16 0v7H2v2h20zm-4-7v7H6v-7a6 6 0 1 1 12 0m-3 13v-2H9v2zM9 9h3.586L9 12.586V15h6v-2h-3.586L15 9.414V7H9z" />
  </Svg>
);
export default SvgNotificationSnoozeLine;
