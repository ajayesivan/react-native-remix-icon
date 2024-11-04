import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAccountCircle2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-14a1 1 0 110 2 1 1 0 010-2zm0 4a3 3 0 100-6 3 3 0 000 6zm0 3a2 2 0 012 2h2a4 4 0 00-8 0h2a2 2 0 012-2z" />
    </Svg>
  );
}

export default SvgAccountCircle2Fill;
