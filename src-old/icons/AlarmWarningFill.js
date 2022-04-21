import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlarmWarningFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 20v-6a8 8 0 1116 0v6h1v2H3v-2h1zm2-6h2a4 4 0 014-4V8a6 6 0 00-6 6zm5-12h2v3h-2V2zm8.778 2.808l1.414 1.414-2.12 2.121-1.415-1.414 2.121-2.121zM2.808 6.222l1.414-1.414 2.121 2.12L4.93 8.344 2.808 6.222z" />
    </Svg>
  );
}

export default SvgAlarmWarningFill;
