import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScissorsLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9.446 8.032L12 10.586l6.728-6.728a2 2 0 012.828 0l-12.11 12.11a4 4 0 11-1.414-1.414L10.586 12 8.032 9.446a4 4 0 111.414-1.414zm5.38 5.38l6.73 6.73a2 2 0 01-2.828 0l-5.317-5.316 1.415-1.415zm-7.412 3.174a2 2 0 10-2.828 2.828 2 2 0 002.828-2.828zm0-9.172a2 2 0 10-2.828-2.828 2 2 0 002.828 2.828z" />
    </Svg>
  );
}

export default SvgScissorsLine;
