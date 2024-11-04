import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatPrivateLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.956 9.956 0 01-4.708-1.175L2 22l1.176-5.29A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2zm0 2a8 8 0 00-8 8c0 1.335.326 2.618.94 3.766l.35.654-.656 2.946 2.948-.654.653.349A7.955 7.955 0 0012 20a8 8 0 100-16zm0 3a3 3 0 013 3v1h1v5H8v-5h1v-1a3 3 0 013-3zm2 6h-4v1h4v-1zm-2-4c-.552 0-1 .45-1 1v1h2v-1a1 1 0 00-1-1z" />
    </Svg>
  );
}

export default SvgChatPrivateLine;
