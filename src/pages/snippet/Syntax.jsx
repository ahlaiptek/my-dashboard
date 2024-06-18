// import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Syntax() {
  const codeSnippet = `function helloWorld() {console.log('Hello, World!');}`;

  return (
    <div>
      <h2>Kode:</h2>
      <SyntaxHighlighter
        language='javascript'
        style={dark}
        showLineNumbers={true}
      >
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  );
}

export default Syntax;
