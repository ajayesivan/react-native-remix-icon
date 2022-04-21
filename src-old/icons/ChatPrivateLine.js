import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatPrivateLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.957 9.957 0 01-4.708-1.175L2 22l1.176-5.29A9.966 9.966 0 012 12C2 6.477 6.477 2 12 2zm0 2a8 8 0 00-7.06 11.766l.35.654-.656 2.946 2.948-.654.653.349A7.95 7.95 0 0012 20a8 8 0 000-16zm0 3a3 3 0 013 3v1h1v5H8v-5h1v-1a3 3 0 013-3zm2 6h-4v1h4v-1zm-2-4c-.552 0-1 .45-1 1v1h2v-1a1 1 0 00-1-1z" />
    </Svg>
  );
}

export default SvgChatPrivateLine;
