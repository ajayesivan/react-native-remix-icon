import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExchangeDollarLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.379 15.106A8.001 8.001 0 008.035 5.056l-.993-1.737a9.996 9.996 0 019.962.023c4.49 2.593 6.21 8.143 4.118 12.77l1.341.775-4.165 2.214-.165-4.714 1.246.719zM4.629 8.9a8.001 8.001 0 0011.345 10.05l.992 1.737a9.996 9.996 0 01-9.962-.024c-4.49-2.593-6.21-8.142-4.117-12.77L1.545 7.12 5.71 4.905l.165 4.714-1.245-.72zm3.875 5.103h5.5a.5.5 0 100-1h-4a2.5 2.5 0 010-5h1v-1h2v1h2.5v2h-5.5a.5.5 0 000 1h4a2.5 2.5 0 010 5h-1v1h-2v-1h-2.5v-2z" />
    </Svg>
  );
}

export default SvgExchangeDollarLine;
