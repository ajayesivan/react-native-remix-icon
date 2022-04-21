import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLuggageCartFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.5 20a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 015.5 20zm13 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0118.5 20zM2.172 1.757l3.827 3.828V17H20v2H5a1 1 0 01-1-1V6.413L.756 3.172l1.415-1.415zM16 3a1 1 0 011 1v2h2.993C20.55 6 21 6.456 21 6.995v8.01a1 1 0 01-1.007.995H8.007A1.007 1.007 0 017 15.005v-8.01A1 1 0 018.007 6h2.992L11 4a1 1 0 011-1h4zm-5 5h-1v6h1V8zm7 0h-1v6h1V8zm-3-3h-2v1h2V5z" />
    </Svg>
  );
}

export default SvgLuggageCartFill;
