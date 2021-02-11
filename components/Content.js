import styles from "./Content.module.css";

import "prism-theme-night-owl";

const Content = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto language-diff-javascript diff-highlight line-numbers">
      <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Content;
