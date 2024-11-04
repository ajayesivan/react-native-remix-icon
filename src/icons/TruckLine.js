import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTruckLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M8.965 18a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3l3 4.056V18h-2.035a3.501 3.501 0 0 1-6.93 0zM15 7H3v8.05a3.5 3.5 0 0 1 5.663.95h5.674c.168-.353.393-.674.663-.95zm2 6h4v-.285L18.992 10H17zm.5 6a1.5 1.5 0 1 0 0-3.001 1.5 1.5 0 0 0 0 3.001M7 17.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
  </Svg>
);
export default SvgTruckLine;
