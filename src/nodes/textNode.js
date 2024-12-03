import React, { useState, useEffect } from "react";
import { Handle, Position } from "reactflow";
import { useStore } from "../store";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState({}); // State for detected variables with values

  const deleteNode = useStore((state) => state.deleteNode);
  const handleDelete = () => {
    deleteNode(id);
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setCurrText(value);

    // Dynamically adjust the textarea height
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleVariableChange = (e, variable) => {
    const value = e.target.value;
    setVariables((prevVariables) => ({
      ...prevVariables,
      [variable]: value,
    }));
  };

  useEffect(() => {
    // Detect variables in the text input
    const matches = currText.match(/{{\s*([\w$]+)\s*}}/g) || [];
    const parsedVars = matches.map((match) => match.replace(/{{|}}/g, "").trim());
    setVariables((prevVariables) => {
      // Initialize variable states with empty strings or previously set values
      const newVariables = {};
      parsedVars.forEach((varName) => {
        newVariables[varName] = prevVariables[varName] || "";
      });
      return newVariables;
    });
  }, [currText]);

  return (
    <div className="relative bg-white border border-gray-300 rounded-lg shadow-md w-64 p-4 space-y-4">
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-all"
        title="Delete Node"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>
      {/* Node Header */}
      <div className="border-b border-gray-300 text-gray-800 text-base font-bold text-center pb-2">
        Text Node
      </div>

      {/* Node Body */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700">Text:</label>
        <textarea
          value={currText}
          onChange={handleTextChange}
          className="resize-y w-full max-w-full min-h-[50px] max-h-[150px] p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your text here..."
        />
      </div>

      {/* Dynamic Inputs for Variables */}
      <div className="space-y-2">
        {Object.keys(variables).map((variable, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">{`{{${variable}}}`}</span>
            <input
              type="text"
              value={variables[variable]}
              onChange={(e) => handleVariableChange(e, variable)}
              className="w-full text-sm border border-gray-300 rounded px-2 py-1"
              placeholder={`Enter value for ${variable}`}
            />
          </div>
        ))}
      </div>

      {/* Dynamic Handles */}
      {Object.keys(variables).map((variable, index) => (
        <Handle
          key={`${id}-handle-${variable}`}
          type="target"
          position={Position.Left}
          id={`${id}-handle-${variable}`} // Ensure unique and connectable ID
          style={{
            background: "#0078d4",
            borderRadius: "50%",
            top: `${index * 30 + 40}px`, // Space handles vertically
          }}
        />
      ))}

      {/* Right Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ background: "#0078d4", borderRadius: "50%" }}
      />
    </div>
  );
};
