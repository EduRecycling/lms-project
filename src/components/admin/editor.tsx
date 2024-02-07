import React, { useRef } from "react";
import { Editor as TinyMCEEditor } from "@tinymce/tinymce-react";
import { Module } from "../../../type";

interface EditorInstance {
  getContent: () => string;
}

interface AppProps {
  handleModuleChange: (
    moduleIndex: number,
    field: keyof Module | "referenceText" | "referenceUrl" | "article",
    value: string | File
  ) => void;
  moduleIndex: number;
}

const Editor: React.FC<AppProps> = ({ handleModuleChange, moduleIndex }) => {
  const editorRef = useRef<EditorInstance | null>(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const handleEditorChange = (content: string) => {
    // Update module's article content
    handleModuleChange(moduleIndex, "article", content);
  };
  return (
    <>
      <TinyMCEEditor
        apiKey="omrp58s44cffyszc8fvt3412mqq2kqrgm19udvdolcby5a4i"
        onEditorChange={(content, editor) => {
          handleEditorChange(content);
        }}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px }",
        }}
      />

      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
};

export default Editor;
