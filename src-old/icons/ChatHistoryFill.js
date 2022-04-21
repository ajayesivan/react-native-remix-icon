import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatHistoryFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.957 9.957 0 01-4.708-1.175L2 22l1.176-5.29A9.966 9.966 0 012 12C2 6.477 6.477 2 12 2zm1 5h-2v7h6v-2h-4V7z" />
    </Svg>
  );
}

export default SvgChatHistoryFill;
