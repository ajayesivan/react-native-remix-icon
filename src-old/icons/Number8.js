import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNumber8(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 1.5a5.5 5.5 0 013.352 9.86c1.888 1.05 3.148 2.96 3.148 5.14 0 3.314-2.91 6-6.5 6s-6.5-2.686-6.5-6c0-2.181 1.261-4.09 3.147-5.141A5.5 5.5 0 0112 1.5zm0 11c-2.52 0-4.5 1.828-4.5 4 0 2.172 1.98 4 4.5 4s4.5-1.828 4.5-4c0-2.172-1.98-4-4.5-4zm0-9a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
    </Svg>
  );
}

export default SvgNumber8;
