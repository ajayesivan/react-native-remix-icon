import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContractRightLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.171 11L7.516 6.343 8.929 4.93 15.999 12l-7.07 7.071-1.414-1.414L12.17 13H3v-2h9.171zM18 19V5h2v14h-2z" />
    </Svg>
  );
}

export default SvgContractRightLine;
