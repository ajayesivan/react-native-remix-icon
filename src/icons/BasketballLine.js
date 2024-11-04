import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBasketballLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.366 11.366l-3.469 6.01a8.056 8.056 0 004.459.51 9.938 9.938 0 01.784-5.494l-1.774-1.026zm3.518 2.031a7.957 7.957 0 00-.587 3.894 8.022 8.022 0 003.078-2.456l-2.492-1.438zm-7.025-4.055a9.95 9.95 0 01-4.365 3.428 8.01 8.01 0 002.671 3.605l3.469-6.009-1.775-1.024zm11.103-.13l-.258.12a7.946 7.946 0 00-2.82 2.333l2.492 1.439a7.976 7.976 0 00.586-3.893zM4 12c0 .266.013.53.038.789a7.95 7.95 0 003.078-2.454L4.624 8.897A7.975 7.975 0 004 12zm12.835-6.374l-3.469 6.008 1.775 1.025a9.951 9.951 0 014.366-3.43 8.015 8.015 0 00-2.419-3.402l-.253-.201zM12 4c-.463 0-.916.04-1.357.115a9.928 9.928 0 01-.784 5.494l1.775 1.025 3.469-6.01A7.975 7.975 0 0012 4zm-3.297.71l-.191.088a8.033 8.033 0 00-2.886 2.367l2.49 1.438a7.956 7.956 0 00.587-3.893z" />
    </Svg>
  );
}

export default SvgBasketballLine;
