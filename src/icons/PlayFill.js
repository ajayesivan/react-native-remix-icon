import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.376 12.416L8.777 19.482A.5.5 0 018 19.066V4.934a.5.5 0 01.777-.416l10.599 7.066a.5.5 0 010 .832z" />
    </Svg>
  );
}

export default SvgPlayFill;
