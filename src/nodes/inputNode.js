import { useState } from "react";
import { Handle, Position } from "reactflow";
import { XMarkIcon } from '@heroicons/react/24/outline'; 
import { useStore } from '../store';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const deleteNode = useStore((state) => state.deleteNode);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleDelete = () => {
    deleteNode(id);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

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
        Input Node
      </div>

      {/* Node Body */}
      <div className="flex flex-col space-y-2">
        {/* Name Field */}
        <label className="text-sm font-medium text-gray-700">
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="w-full p-2 mt-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter name"
          />
        </label>

        {/* Type Field */}
        <label className="text-sm font-medium text-gray-700">
          Type:
          <select
            value={inputType}
            onChange={handleTypeChange}
            className="w-full p-2 mt-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>

      {/* Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        style={{ background: "#0078d4", borderRadius: "50%" }}
      />
    </div>
  );
};
