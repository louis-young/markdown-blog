import remark from "remark";
import html from "remark-html";
import prism from "remark-prism";

const markdownToHtml = async (markdown) => {
  const result = await remark()
    .use(html)
    .use(prism, {
      transformInlineCode: true,
      plugins: [
        "autolinker",
        "command-line",
        "data-uri-highlight",
        "diff-highlight",
        "inline-color",
        "keep-markup",
        "line-numbers",
        "show-invisibles",
        "treeview",
      ],
    })
    .process(markdown);

  return result.toString();
};

export default markdownToHtml;
