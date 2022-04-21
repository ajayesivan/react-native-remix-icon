import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHeadphoneLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 4a8 8 0 00-8 8h3a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 01-2 2h-3a2 2 0 01-2-2v-5a2 2 0 012-2h3a8 8 0 00-8-8zM4 14v5h3v-5H4zm13 0v5h3v-5h-3z" />
    </Svg>
  );
}

export default SvgHeadphoneLine;
