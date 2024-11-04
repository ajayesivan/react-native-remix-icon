import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgThermometerLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M20.557 3.444a4 4 0 0 1 0 5.657l-8.2 8.2a4 4 0 0 1-2.387 1.147l-3.38.374-2.297 2.3a1 1 0 1 1-1.414-1.415l2.298-2.299.375-3.377A4 4 0 0 1 6.7 11.644l8.2-8.2a4 4 0 0 1 5.658 0m-4.243 1.414-8.2 8.2a2 2 0 0 0-.574 1.194l-.276 2.484 2.485-.276a2 2 0 0 0 1.193-.574l.422-.422L9.95 14.05l1.414-1.414 1.414 1.414 1.414-1.414-1.414-1.414 1.415-1.414 1.414 1.414 1.414-1.415-1.414-1.414L17.02 6.98l1.414 1.414.707-.707a2 2 0 0 0-2.828-2.828" />
  </Svg>
);
export default SvgThermometerLine;
