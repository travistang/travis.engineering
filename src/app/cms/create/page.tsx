"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function CMSCreatePage() {
  const [content, setContent] = useState("");
  return (
    <div className="flex flex-col item-stretch py-4 px-2 gap-4">
      <div className="py-4 flex items-center justify-between pr-4 pl-2">
        <h1 className="text-4xl">Create a blog</h1>
        <button className="btn btn-success">
          <FaCheckCircle />
          Publish
        </button>
      </div>
      <MDEditor
        autoFocus
        className="min-w-[50vh] flex-1 mx-4 text-lg"
        value={content}
        onChange={(v) => setContent(v ?? "")}
      />
    </div>
  );
}
