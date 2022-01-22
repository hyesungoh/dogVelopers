import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: { white: string; black900: string; black500: string; brand: string };
    fontWeight: { bold: number; normal: number; light: numbers };
    mediaQuery: { tablet: string; mobile: string };
  }
}
