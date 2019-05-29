import { Article, OtherCases } from 'containers';
import cases from '../../data';

const Case = () => {
  const { title, text, backButton, backHref } = cases.impraise;

  const content = {
    title,
    text,
    shareText: 'Share this story',
    backButton,
    backHref
  };

  return (
    <>
      <Article content={content} />
      <OtherCases />
    </>
  );
};

export default Case;
