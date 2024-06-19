import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

function Syntax() {
  const codeSnippet = `class Main() {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
  }`

  return (
    <div>
      <h2>Kode:</h2>
      <SyntaxHighlighter language='java' style={dark} showLineNumbers>
        {codeSnippet.trim()}
      </SyntaxHighlighter>
    </div>
  )
}

export default Syntax
