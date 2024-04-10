import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTicketLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.005 3a1 1 0 011 1v5.5a2.5 2.5 0 000 5V20a1 1 0 01-1 1h-18a1 1 0 01-1-1v-5.5a2.5 2.5 0 000-5V4a1 1 0 011-1h18zm-1 2h-16v2.968l.156.08a4.5 4.5 0 012.339 3.74l.005.212a4.499 4.499 0 01-2.344 3.95l-.156.08V19h16v-2.97l-.156-.08a4.5 4.5 0 01-2.34-3.738L17.506 12c0-1.704.947-3.187 2.344-3.951l.156-.081V5z" />
    </Svg>
  );
}

export default SvgTicketLine;
