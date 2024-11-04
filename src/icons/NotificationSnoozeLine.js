import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNotificationSnoozeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 17h-2v-7a8 8 0 10-16 0v7H2v2h20v-2zm-4-7v7H6v-7a6 6 0 1112 0zm-3 13v-2H9v2h6zM9 9h3.586L9 12.586V15h6v-2h-3.586L15 9.414V7H9v2z" />
    </Svg>
  );
}

export default SvgNotificationSnoozeLine;
