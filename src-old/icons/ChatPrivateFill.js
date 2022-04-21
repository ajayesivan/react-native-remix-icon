import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatPrivateFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.957 9.957 0 01-4.708-1.175L2 22l1.176-5.29A9.966 9.966 0 012 12C2 6.477 6.477 2 12 2zm0 5c-1.598 0-3 1.34-3 3v1H8v5h8v-5h-1v-1a3 3 0 00-3-3zm2 6v1h-4v-1h4zm-2-4c.476 0 1 .49 1 1v1h-2v-1c0-.51.487-1 1-1z" />
    </Svg>
  );
}

export default SvgChatPrivateFill;
