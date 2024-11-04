import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayReverseLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.606 12L14 7.737v8.526L7.606 12zm-2.982.416l10.599 7.066a.5.5 0 00.777-.416V4.934a.5.5 0 00-.777-.416L4.624 11.584a.5.5 0 000 .832z" />
    </Svg>
  );
}

export default SvgPlayReverseLine;
