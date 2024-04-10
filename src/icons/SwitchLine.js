import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSwitchLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.001 3v18h-4.4a4.6 4.6 0 01-4.6-4.6V7.6a4.6 4.6 0 014.6-4.6h4.4zm-2 2h-2.4a2.6 2.6 0 00-2.6 2.6v8.8a2.6 2.6 0 002.6 2.6h2.4V5zm-2.5 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6.5-7h2.4a4.6 4.6 0 014.6 4.6v8.8a4.6 4.6 0 01-4.6 4.6h-2.4V3zm3 11.7a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z" />
    </Svg>
  );
}

export default SvgSwitchLine;
