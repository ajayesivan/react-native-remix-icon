import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHonorOfKingsFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21.158 4.258c.034 3.5.591 4.811.788 6.701a9.98 9.98 0 01-2.875 8.112c-3.666 3.666-9.471 3.89-13.4.673l2.852-2.853a6.002 6.002 0 008.368-8.368l4.267-4.265zm-2.83-.002l-2.851 2.853a6.002 6.002 0 00-8.368 8.368l-4.267 4.265c-.034-3.5-.591-4.811-.788-6.701a9.98 9.98 0 012.875-8.112c3.666-3.666 9.471-3.89 13.4-.673zM12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2.5a1.5 1.5 0 10.001 3.001A1.5 1.5 0 0012 10.5z" />
    </Svg>
  );
}

export default SvgHonorOfKingsFill;
