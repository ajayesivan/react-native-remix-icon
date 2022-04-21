import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlarmLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 22a9 9 0 110-18 9 9 0 010 18zm0-2a7 7 0 100-14 7 7 0 000 14zm1-7h3v2h-5V8h2v5zM1.747 6.282l3.535-3.535 1.415 1.414L3.16 7.697 1.747 6.282zm16.97-3.535l3.536 3.535-1.414 1.415-3.536-3.536 1.415-1.414z" />
    </Svg>
  );
}

export default SvgAlarmLine;
