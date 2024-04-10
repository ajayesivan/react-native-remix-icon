import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgQuestionAnswerLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.455 15L1 18.5V3a1 1 0 011-1h15a1 1 0 011 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 011 1v13.5L17.546 19H9a1 1 0 01-1-1v-1z" />
    </Svg>
  );
}

export default SvgQuestionAnswerLine;
