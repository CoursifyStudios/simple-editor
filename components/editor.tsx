import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import TreeViewPlugin from "@/pages/plugins/TreeViewPlugin";
import simpletheme from "@/pages/simpletheme";

const editorConfig = {
  theme: simpletheme,
  onError(error: any) {
		throw error;
	},
  namespace: "My editor"
  }


export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <PlainTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <TreeViewPlugin />
      </div>
    </LexicalComposer>
  );
}

function Placeholder() {
  return (
    <div className="absolute top-1 left-1 -z-10">Enter some rich text...</div>
  );
}
