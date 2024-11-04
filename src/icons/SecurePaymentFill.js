import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSecurePaymentFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11.005 2l7.298 2.28a1 1 0 01.702.955V7h2a1 1 0 011 1v2h-13V8a1 1 0 011-1h7V5.97l-6-1.876-6 1.876v7.404a4 4 0 001.558 3.169l.189.136 4.253 2.9L14.787 17h-4.782a1 1 0 01-1-1v-4h13v4a1 1 0 01-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L11.005 22l-5.38-3.668a6 6 0 01-2.62-4.958V5.235a1 1 0 01.702-.954L11.005 2z" />
    </Svg>
  );
}

export default SvgSecurePaymentFill;
