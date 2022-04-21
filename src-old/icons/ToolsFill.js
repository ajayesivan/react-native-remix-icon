import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgToolsFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.33 3.271a3.5 3.5 0 014.472 4.474L20.647 18.59l-2.122 2.121L7.68 9.867a3.5 3.5 0 01-4.472-4.474L5.444 7.63a1.5 1.5 0 102.121-2.121L5.329 3.27zm10.367 1.884l3.182-1.768 1.414 1.414-1.768 3.182-1.768.354-2.12 2.121-1.415-1.414 2.121-2.121.354-1.768zm-7.071 7.778l2.121 2.122-4.95 4.95A1.5 1.5 0 013.58 17.99l.097-.107 4.95-4.95z" />
    </Svg>
  );
}

export default SvgToolsFill;
