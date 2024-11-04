import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNotificationSnoozeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 17h-2v-7a8 8 0 10-16 0v7H2v2h20v-2zm-7 6v-2H9v2h6zM9 9V7h6v2.414L11.414 13H15v2H9v-2.414L12.586 9H9z" />
    </Svg>
  );
}

export default SvgNotificationSnoozeFill;
