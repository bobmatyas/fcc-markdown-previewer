
// settings for marked.js to add line break to <br> detection

marked.setOptions({
  gfm: true,
  breaks: true });



// react app starts here 

function App() {
  return (
    React.createElement("div", null,
    React.createElement("h1", null, "Markdown Previewer"),
    React.createElement(Editor, null)));


}

class Editor extends React.Component {
  constructor(props) {
    super(props);

    const defaultMarkdownPreview = `# Sample Markdown Header Level

## Sample Header Level 2

### Link

Here's a link to [Codepen](https://codepen.io).

### Code Block

1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.

### Inline Code

I think you should use an \`<addr>\` element here instead.

### List

- First item
- Second item

### Blockquote

> Dorothy followed her through many of the beautiful rooms in her castle.

### Image

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/208px-Markdown-mark.svg.png "Markdown Logo")

### Bold Text

I just love **bold text**.

    

`;

    this.state = {
      previewMarkdown: defaultMarkdownPreview };


    this.markdownProcess = this.markdownProcess.bind(this);

  }

  markdownProcess(e) {
    this.setState({
      previewMarkdown: e.target.value });

  }


  render() {

    return (
      React.createElement("div", null,

      React.createElement("p", { class: "mt-5 mb-5 alert alert-secondary" }, "Type your Markdown-formatted text in the input area. It will be instantly transformed to HTML."),

      React.createElement("textarea", { class: "form-control", id: "editor", rows: "10", value: this.state.previewMarkdown, onChange: this.markdownProcess }),

      React.createElement(Preview, { markdown: this.state.previewMarkdown })));


  }}


function Preview(props) {

  function rawMarkup() {
    let rawMarkup = marked(props.markdown, { sanitize: true });
    return { __html: rawMarkup };
  }

  return (
    React.createElement("div", null,
    React.createElement("h2", { class: "mt-5 mb-5 border-bottom" }, "Parsed Markdown"),

    React.createElement("div", { id: "preview", class: "html__preview border rounded mb-5", dangerouslySetInnerHTML: rawMarkup() })));


}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));