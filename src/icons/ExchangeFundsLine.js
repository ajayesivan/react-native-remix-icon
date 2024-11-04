import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExchangeFundsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.379 15.106A8.001 8.001 0 008.035 5.056l-.993-1.737a9.996 9.996 0 019.962.023c4.49 2.593 6.21 8.143 4.118 12.77l1.341.775-4.165 2.214-.165-4.714 1.246.719zM4.629 8.9a8.001 8.001 0 0011.345 10.05l.992 1.737a9.996 9.996 0 01-9.962-.024c-4.49-2.593-6.21-8.142-4.117-12.77L1.545 7.12 5.71 4.905l.165 4.714-1.245-.72zm8.79 5.931l-2.829-2.828-2.828 2.828-1.415-1.414 4.243-4.243 2.828 2.829 2.829-2.829 1.414 1.415-4.243 4.242z" />
    </Svg>
  );
}

export default SvgExchangeFundsLine;
