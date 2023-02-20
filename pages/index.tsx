import Editor from "@/components/editor";

export default function playground() {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-2xl">
        <h1 className="font-medium text-3xl text-center p-4">Simple Editor</h1>
        <Editor />
      </div>
    </div>
  );
}
