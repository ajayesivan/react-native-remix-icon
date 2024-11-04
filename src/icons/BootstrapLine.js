import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBootstrapLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M1 11v2s2 0 2 4v1a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1c0-4 2-4 2-4v-2s-2 0-2-4V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1c0 4-2 4-2 4m19.674 1q-.045.042-.088.086C19.578 13.093 19 14.692 19 17v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1c0-2.308-.578-3.907-1.586-4.914L3.326 12q.045-.042.088-.086C4.422 10.907 5 9.308 5 7V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1c0 2.308.578 3.907 1.586 4.914zM8.5 7v10h5a3 3 0 0 0 1.615-5.529A3 3 0 0 0 12.5 7zm2 4V9h2a1 1 0 1 1 0 2zm0 2h3a1 1 0 1 1 0 2h-3z" />
  </Svg>
);
export default SvgBootstrapLine;
