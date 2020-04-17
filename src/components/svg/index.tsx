import * as React from 'react';
import classNames from 'classnames';
import { VerticalAlignProperty } from 'csstype';

import baseStyles from './styles';

type SVGStyle = {
  svg?: string;
}

type Props = {
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
  preserveAspectRatio?: string;
  className?: string;
  size?: string | number;
  fill?: string | number;
  stroke?: string;
  verticalAlign?: VerticalAlignProperty<any>;
  styles?: SVGStyle;
}

const SVG: React.FC<Props> = ({
  className,
  fill,
  stroke,
  size,
  width,
  height,
  children,
  preserveAspectRatio,
  verticalAlign,
  styles,
}: Props) => {
  const classes = baseStyles();
  const finalHeight = size || height;
  const finalWidth = size || width;
  const SVGImage = children as any;

  return (
    <span
      className={classNames(classes.svgWrapper, [className, styles && styles.svg])}
      style={{ height: finalHeight, width: finalWidth }}
      role="presentation"
    >
      <SVGImage
        preserveAspectRatio={preserveAspectRatio}
        height={finalHeight}
        width={finalWidth}
        fill={fill}
        style={{
          display: 'flex',
          margin: 'auto',
          width: finalWidth,
          height: finalHeight,
          fill,
          stroke,
          verticalAlign,
        }}
      />
    </span>
  );
};

SVG.defaultProps = {
  stroke: 'none',
  width: '100%',
  height: '100%',
  className: '',
  preserveAspectRatio: 'xMidYMid',
  fill: 'currentColor',
  verticalAlign: 'middle',
  styles: {},
};

export default SVG;
