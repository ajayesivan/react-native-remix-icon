import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEBike2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 1a1 1 0 011 1v1h5v6h-2.019l2.746 7.544a4 4 0 11-7.6 2.456h-4.253a4.002 4.002 0 01-7.8-.226A2 2 0 012 17V7a1 1 0 011-1h7a1 1 0 011 1v5a1 1 0 001 1h2a1 1 0 001-1V3h-3V1h4zM7 16a2 2 0 100 4 2 2 0 000-4zm12-.001a2 2 0 101.88 1.316l-.017-.044A2 2 0 0019 16zM17.853 9H17v3a3 3 0 01-3 3h-2a3 3 0 01-3-3H4v3.354A4.002 4.002 0 0110.874 17h4.252a4.002 4.002 0 014.568-2.94L17.853 9zM9 8H4v2h5V8zm11-3h-3v2h3V5z" />
    </Svg>
  );
}

export default SvgEBike2Line;
