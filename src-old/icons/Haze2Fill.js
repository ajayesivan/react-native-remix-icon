import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHaze2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 19a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-15 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM17 7a5 5 0 010 10c-1.844 0-3.51-1.04-5-3.122C10.51 15.96 8.844 17 7 17A5 5 0 017 7c1.844 0 3.51 1.04 5 3.122C13.49 8.04 15.156 7 17 7zm-5-5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM4.5 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm15 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
    </Svg>
  );
}

export default SvgHaze2Fill;
