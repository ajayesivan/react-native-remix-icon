import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16.394 12L10 7.737v8.526L16.394 12zm2.982.416L8.777 19.482A.5.5 0 018 19.066V4.934a.5.5 0 01.777-.416l10.599 7.066a.5.5 0 010 .832z" />
    </Svg>
  );
}

export default SvgPlayLine;
