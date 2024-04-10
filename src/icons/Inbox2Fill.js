import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInbox2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 3a1 1 0 00-.976.783l-2 9A1 1 0 002 13v7a1 1 0 001 1h18a1 1 0 001-1v-7c0-.073-.008-.146-.024-.217l-2-9A1 1 0 0019 3H5zm14.753 9H15a3 3 0 11-6 0H4.247l1.555-7h12.396l1.555 7z" />
    </Svg>
  );
}

export default SvgInbox2Fill;
