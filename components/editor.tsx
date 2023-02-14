import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import TreeViewPlugin from "@/components/plugins/TreeViewPlugin";
import simpletheme from "@/components/simpletheme";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const editorConfig = {
  theme: simpletheme,
  onError(error: any) {
    throw error;
  },
  namespace: "simple editor",
};

export default function Editor() {
  return (
    <GrammarlyEditorPlugin clientId="client_KWyxmir7xgLzzLByc4TkDc">
      <LexicalComposer initialConfig={editorConfig}>
        <div className="relative mb-2 rounded-xl p-4 shadow-lg">
          <PlainTextPlugin
            contentEditable={
              <ContentEditable className="h-full p-1 focus:outline-none" />
            }
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
        </div>
        <TreeViewPlugin />
      </LexicalComposer>
    </GrammarlyEditorPlugin>
  );
}

function Placeholder() {
  return (
    <div className="absolute top-5 left-5 -z-10">Enter some simple text...</div>
  );
}
