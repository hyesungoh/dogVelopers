import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: { white: string; black900: string; black500: string };
    fontWeight: { bold: number; normal: number; light: numbers };
  }
}
