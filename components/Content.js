const Content = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Content;
