import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgQuestionFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm2-1.645A3.502 3.502 0 0012 6.5a3.501 3.501 0 00-3.433 2.813l1.962.393A1.5 1.5 0 1112 11.5a1 1 0 00-1 1V14h2v-.645z" />
    </Svg>
  );
}

export default SvgQuestionFill;
