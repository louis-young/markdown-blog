import styles from "./Content.module.css";

const Content = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Content;
