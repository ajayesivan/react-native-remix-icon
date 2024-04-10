import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCodeBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm13.465 12.536L20 12l-3.535-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.415 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5l3.64-10h-2.128l-3.64 10h2.128z" />
    </Svg>
  );
}

export default SvgCodeBoxFill;
