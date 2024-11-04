import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAdvertisementLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.598 16l-3.2-8h-2l-2 5v.002L4.199 16h2.154l.4-1h3.29l.4 1h2.155zm-5.046-3l.847-2.115L9.244 13H7.552zM17 8h2v8h-3a3 3 0 110-6h1V8zm-1 4a1 1 0 000 2h1v-2h-1zm5-9H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1zM4 19V5h16v14H4z" />
    </Svg>
  );
}

export default SvgAdvertisementLine;
