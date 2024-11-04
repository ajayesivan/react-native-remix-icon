import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatHistoryLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.956 9.956 0 01-4.708-1.175L2 22l1.176-5.29A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2zm0 2a8 8 0 00-8 8c0 1.335.326 2.618.94 3.766l.35.654-.656 2.946 2.948-.654.653.349A7.955 7.955 0 0012 20a8 8 0 100-16zm1 3v5h4v2h-6V7h2z" />
    </Svg>
  );
}

export default SvgChatHistoryLine;
