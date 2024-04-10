import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSendPlaneLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.727 2.957l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37c-.51-.205-.503-.51.034-.689L21.043 2.32c.529-.176.832.12.684.638zm-2.692 2.14L6.812 9.17l5.637 2.255 3.04 6.08 3.546-12.41z" />
    </Svg>
  );
}

export default SvgSendPlaneLine;
