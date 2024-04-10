import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoneyCnyBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 3.003h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1v-16a1 1 0 011-1zm10 10v-1h3v-2h-2.586L15.54 7.88l-1.414-1.414-2.121 2.122-2.121-2.122-1.415 1.414 2.122 2.122H8.005v2h3v1h-3v2h3v2h2v-2h3v-2h-3z" />
    </Svg>
  );
}

export default SvgMoneyCnyBoxFill;
