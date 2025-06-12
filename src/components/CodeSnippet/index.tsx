interface CodeSnippetProps {
  code: string
  language?: string
}

export function CodeSnippet({ code, language = "typescript" }: CodeSnippetProps) {
  return (
    <div className="code-snippet">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )
}

