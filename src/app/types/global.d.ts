declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import * as React from 'react';

  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
declare module '*.jpeg' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}

// eslint-disable-next-line no-unused-vars
declare const __IS_DEV__: boolean;
