import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNotificationOffFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.586 20H4a.5.5 0 01-.4-.8l.4-.533V10c0-1.33.325-2.584.899-3.687L1.394 2.808l1.414-1.415 19.799 19.8-1.415 1.414L18.587 20zM20 15.786L7.56 3.345A8 8 0 0120 10v5.786zM9.5 21h5a2.5 2.5 0 01-5 0z" />
    </Svg>
  );
}

export default SvgNotificationOffFill;
