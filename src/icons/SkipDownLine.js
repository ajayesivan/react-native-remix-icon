import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkipDownLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 10.086L7.207 5.293 5.793 6.707 12 12.914l6.207-6.207-1.414-1.414L12 10.086zM18 17H6v-2h12v2z" />
    </Svg>
  );
}

export default SvgSkipDownLine;
