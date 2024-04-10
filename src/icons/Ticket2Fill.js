import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTicket2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.005 3a1 1 0 011 1v5.5a2.5 2.5 0 000 5V20a1 1 0 01-1 1h-18a1 1 0 01-1-1v-5.5a2.5 2.5 0 000-5V4a1 1 0 011-1h18zm-5 6h-8v6h8V9z" />
    </Svg>
  );
}

export default SvgTicket2Fill;
