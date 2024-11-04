import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNotificationOffLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M18.586 20H4a.5.5 0 0 1-.4-.8l.4-.533V10c0-1.33.325-2.584.899-3.687L1.394 2.808l1.414-1.415 19.799 19.8-1.415 1.414zM6.408 7.822A6 6 0 0 0 6 10v8h10.586zM20 15.786l-2-2V10a6 6 0 0 0-8.99-5.203L7.56 3.345A8 8 0 0 1 20 10zM9.5 21h5a2.5 2.5 0 0 1-5 0" />
  </Svg>
);
export default SvgNotificationOffLine;
