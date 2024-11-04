import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgQuestionAnswerFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 18h10.237L20 19.385V9h1a1 1 0 011 1v13.5L17.546 20H9a1 1 0 01-1-1v-1zm-2.545-2L1 19.5V4a1 1 0 011-1h15a1 1 0 011 1v12H5.455z" />
    </Svg>
  );
}

export default SvgQuestionAnswerFill;
