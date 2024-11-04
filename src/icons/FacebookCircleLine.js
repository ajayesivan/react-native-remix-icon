import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFacebookCircleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.001 19.938a8.001 8.001 0 00-1-15.938 8 8 0 00-1 15.938V14h-2v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.725 2.725 0 0112.537 6.9c.382-.205.857-.328 1.687-.381.329-.021.755.005 1.278.08v1.9h-.5c-.917 0-1.296.043-1.522.164a.728.728 0 00-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5.938zm-1 2.062c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
    </Svg>
  );
}

export default SvgFacebookCircleLine;
