import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const defaultContent = `
![Logo](https://www.pngitem.com/pimgs/m/37-374273_pray-clipart-welcome-welcome-logo-png-hd-transparent.png)

# Hi, this this Kaleb
## You're welcome
### how are you doing today?


\`Quote\`

\`\`\`
A person who never made a mistake never tried anything new.
\`\`\`

**Some bold text**

[Follow me on twitter](https://www.twitter.com/kalebnwachuks)

> Block Quot

1. Think
2. Reflect
`;


marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  } });


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextareaChange }) => /*#__PURE__*/React.createElement("textarea", { value: content, onChange: handleTextareaChange, id: "editor" });

const Previewer = ({ content }) => /*#__PURE__*/React.createElement("div", { id: "preview", dangerouslySetInnerHTML: {
    __html: marked(content, { renderer: renderer }) } });



const App = () => {
  const [content, setContent] = React.useState(defaultContent);
  const handleTextareaChange = event => {
    setContent(event.target.value);
  };
  return /*#__PURE__*/(
    React.createElement("div", { className: "main" }, /*#__PURE__*/
    React.createElement(Editor, { content: content, handleTextareaChange: handleTextareaChange }), /*#__PURE__*/
    React.createElement(Previewer, { content: content })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));