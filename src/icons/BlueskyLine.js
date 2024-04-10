import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBlueskyLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.907 3.44c.709.12 1.533.501 2.576 1.247C9.28 5.97 10.769 7.739 12 9.564c1.231-1.825 2.72-3.593 4.517-4.877 1.043-.746 1.867-1.127 2.576-1.248.767-.13 1.29.065 1.615.2C21.717 4.06 22 5.225 22 6.215c0 .201-.086 1.302-.185 2.36-.052.546-.11 1.108-.166 1.577-.053.428-.115.88-.19 1.133a4.331 4.331 0 01-1.951 2.517c.937.707 1.277 1.856.928 2.984-.597 1.924-2.737 4.397-4.835 4.618-1.773.186-2.935-1.325-3.601-2.76-.666 1.435-1.828 2.946-3.6 2.76-2.099-.22-4.24-2.694-4.836-4.618-.35-1.128-.01-2.277.928-2.984a4.331 4.331 0 01-1.95-2.517c-.076-.253-.138-.705-.19-1.133a60.58 60.58 0 01-.167-1.577C2.085 7.517 2 6.416 2 6.215c0-.99.283-2.155 1.292-2.576.326-.135.847-.33 1.615-.2zM4.05 6.916c.064.818.18 2.108.288 2.992.032.268.055.545.122.807.397 1.34 1.929 2.082 3.686 1.887a1 1 0 01.257 1.983c-.756.112-3.315.357-2.928 1.607.357 1.151 1.848 3.087 3.134 3.222.928.097 1.5-1.394 1.766-2.045.275-.674.488-1.38.668-1.982a1 1 0 011.916 0c.18.602.393 1.308.668 1.982.266.651.838 2.142 1.766 2.045 1.286-.135 2.777-2.07 3.134-3.222.387-1.25-2.172-1.495-2.928-1.607a1 1 0 01.257-1.983c1.757.195 3.289-.547 3.686-1.887.069-.266.089-.536.122-.807.108-.884.224-2.174.288-2.992.037-.468.247-1.637-.522-1.506-.286.049-.823.241-1.749.903-1.943 1.389-3.705 3.513-4.789 5.64a1 1 0 01-1.782 0c-1.084-2.127-2.846-4.251-4.789-5.64-.926-.662-1.463-.854-1.749-.903-.784-.134-.559 1.034-.522 1.506z" />
    </Svg>
  );
}

export default SvgBlueskyLine;
