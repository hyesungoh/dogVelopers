import { css, Theme } from '@emotion/react';

interface IRecordArticle {
  title: string;
  value: string;
}

function RecordArticle({ title, value }: IRecordArticle) {
  return (
    <article css={articleStyle}>
      <span css={titleStyle}>{title}</span>
      <span css={valueStyle}>{value}</span>
    </article>
  );
}

export default RecordArticle;

const articleStyle = css`
  display: flex;
  flex-direction: column;
`;

const titleStyle = css``;

const valueStyle = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 2.5rem;
`;
