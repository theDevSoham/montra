import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Ellipse,
  G,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Welcome2 = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#E5E5EE"
      d="M58.691 27.943C78.718 11.537 136 2.479 162.135 0c-11.121 5.729-30.535 26.712-19.216 64.814-40.106 6.659-82.331 18.767-98.43 23.99-3.61-13.452-5.825-44.456 14.202-60.861Z"
    />
    <Path
      fill="url(#a)"
      fillOpacity={0.36}
      d="M58.691 27.943C78.718 11.537 136 2.479 162.135 0c-11.121 5.729-30.535 26.712-19.216 64.814-40.106 6.659-82.331 18.767-98.43 23.99-3.61-13.452-5.825-44.456 14.202-60.861Z"
    />
    <Path
      fill="#D2D2D2"
      d="M53.577 30.727a22.006 22.006 0 0 1 2.136-1.468C75.06 16.41 124.2-5.151 183.33 1.118c32.811 5.33 36.043 75.256 33.557 109.553-3.48 29.115-1.79 82.608 32.811 63.658-16.704 17.766-51.205 28.129-66.368 31.09-33.557 16.038-99.478 22.651-94.706-79.204 4.534-96.768-18.843-105.43-32.912-96.956-.758.503-1.47.993-2.136 1.468Z"
    />
    <Path
      fill="url(#b)"
      d="M53.577 30.727a22.006 22.006 0 0 1 2.136-1.468C75.06 16.41 124.2-5.151 183.33 1.118c32.811 5.33 36.043 75.256 33.557 109.553-3.48 29.115-1.79 82.608 32.811 63.658-16.704 17.766-51.205 28.129-66.368 31.09-33.557 16.038-99.478 22.651-94.706-79.204 4.534-96.768-18.843-105.43-32.912-96.956-.758.503-1.47.993-2.136 1.468Z"
    />
    <Path
      fill="#F1F1FA"
      d="M246.623 192.377C225.847 207.882 149 216.5 140 214.5c11.377-5.218 33.758-24.359 24.26-63.12 40.365-4.77 83.105-14.908 99.429-19.38 2.968 13.666 3.71 44.873-17.066 60.377Z"
    />
    <Path
      fill="url(#c)"
      fillOpacity={0.16}
      d="M246.623 192.377C225.847 207.882 149 216.5 140 214.5c11.377-5.218 33.758-24.359 24.26-63.12 40.365-4.77 83.105-14.908 99.429-19.38 2.968 13.666 3.71 44.873-17.066 60.377Z"
    />
    <Path
      fill="#B18AFF"
      d="M306 52.05C280.746 62.609 268.779 81.083 265.952 89 259.167 61.552 224.49 43.546 208 37.975c8.292 1.76 16.019-6.305 18.846-10.557 22.144-2.053 68.977 0 79.154 24.633Z"
    />
    <Path
      fill="#7F3DFF"
      d="M270.664 50.291c-1.987 3.515-8.875 5.048-15.549 1.76-6.673-3.288-12.192-9.917-10.206-13.431 1.987-3.514 15.311-3.288 21.985 0 6.674 3.288 5.756 8.157 3.77 11.671Z"
    />
    <Path
      fill="url(#d)"
      fillOpacity={0.64}
      d="M306 52.05C280.746 62.609 268.779 81.083 265.952 89 259.167 61.552 224.49 43.546 208 37.975c8.292 1.76 16.019-6.305 18.846-10.557 22.144-2.053 68.977 0 79.154 24.633Z"
      style={{
        mixBlendMode: 'soft-light',
      }}
    />
    <Path
      fill="#B18AFF"
      d="M74 152.821c-3.6 15.6-14.833 24.167-20 26.5-9.833-4.833-48-19-48-19 4.833-4.5 15.4-16.9 19-30.5 4.5-17 15.5-41 33.5-43.5 14.4-2 42.667 5.833 55 10-26.5 20.5-35 37-39.5 56.5Z"
    />
    <Ellipse
      cx={58.606}
      cy={123.023}
      fill="#7F3DFF"
      rx={15.166}
      ry={12.638}
      transform="rotate(-46.537 58.606 123.023)"
    />
    <Path
      fill="url(#e)"
      fillOpacity={0.46}
      d="M74 152.821c-3.6 15.6-14.833 24.167-20 26.5-9.833-4.833-48-19-48-19 4.833-4.5 15.4-16.9 19-30.5 4.5-17 15.5-41 33.5-43.5 14.4-2 42.667 5.833 55 10-26.5 20.5-35 37-39.5 56.5Z"
      style={{
        mixBlendMode: 'soft-light',
      }}
    />
    <G
      filter="url(#f)"
      style={{
        mixBlendMode: 'soft-light',
      }}>
      <Path
        fill="url(#g)"
        fillOpacity={0.64}
        d="M74 153.821c-3.6 15.6-14.833 24.167-20 26.5-9.833-4.833-48-19-48-19 4.833-4.5 15.4-16.9 19-30.5 4.5-17 15.5-41 33.5-43.5 14.4-2 42.667 5.833 55 10-26.5 20.5-35 37-39.5 56.5Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={76}
        x2={123}
        y1={84.5}
        y2={-10.5}
        gradientUnits="userSpaceOnUse">
        <Stop stopOpacity={0.24} />
        <Stop offset={0.594} />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={106.5}
        x2={209}
        y1={0}
        y2={204.5}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={203.638}
        x2={203.638}
        y1={148.985}
        y2={297.485}
        gradientUnits="userSpaceOnUse">
        <Stop stopOpacity={0} />
        <Stop offset={1} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={85}
        x2={37}
        y1={86}
        y2={179}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={0.422} stopColor="#E3E3E3" stopOpacity={0.628} />
        <Stop offset={0.766} stopColor="#636363" stopOpacity={0.325} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={85}
        x2={37}
        y1={87}
        y2={180}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={0.422} stopColor="#E3E3E3" stopOpacity={0.628} />
        <Stop offset={0.766} stopColor="#636363" stopOpacity={0.325} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <RadialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(69.99996 32.00002 -50.43088 110.31741 218.5 28.5)"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default Welcome2;
