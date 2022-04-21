import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpeedLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 13.333l-9.223 6.149A.5.5 0 012 19.066V4.934a.5.5 0 01.777-.416L12 10.667V4.934a.5.5 0 01.777-.416l10.599 7.066a.5.5 0 010 .832l-10.599 7.066a.5.5 0 01-.777-.416v-5.733zM10.394 12L4 7.737v8.526L10.394 12zM14 7.737v8.526L20.394 12 14 7.737z" />
    </Svg>
  );
}

export default SvgSpeedLine;
