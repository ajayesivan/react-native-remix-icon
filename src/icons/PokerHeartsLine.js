import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPokerHeartsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 8.81l1.635-2.322A3.5 3.5 0 0120 8.5c0 2.879-1.96 5.621-4.357 7.836A27.084 27.084 0 0112 19.146a27.064 27.064 0 01-3.643-2.81C5.959 14.122 4 11.379 4 8.5a3.5 3.5 0 016.365-2.012L12 8.811zm-1.444-4.884A5.5 5.5 0 002 8.5C2 16 12 21.485 12 21.485S22 16 22 8.5a5.5 5.5 0 00-10-3.163 5.53 5.53 0 00-1.444-1.41z" />
    </Svg>
  );
}

export default SvgPokerHeartsLine;
