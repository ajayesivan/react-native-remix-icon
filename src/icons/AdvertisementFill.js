import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAdvertisementFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.552 13l.847-2.115L9.244 13H7.552zM16 12h1v2h-1a1 1 0 110-2zm5-9H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1zm-8.402 13h-2.155l-.4-1h-3.29l-.4 1H4.199l1.199-2.998.001-.002 2-5h2l3.199 8zM17 8h2v8h-3a3 3 0 110-6h1V8z" />
    </Svg>
  );
}

export default SvgAdvertisementFill;
