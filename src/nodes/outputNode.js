import { useState } from "react";
import { Handle, Position } from "reactflow";
import { useStore } from '../store';
import { XMarkIcon } from '@heroicons/react/24/outline'; 

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  const deleteNode = useStore((state) => state.deleteNode);
  const handleDelete = () => {
    deleteNode(id);
  };

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
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
        Output Node
      </div>

      {/* Node Body */}
      <div className="flex flex-col space-y-3">
        {/* Name Input */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Type Select */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Type:</label>
          <select
            value={outputType}
            onChange={handleTypeChange}
            className="border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </div>
      </div>

      {/* Handle */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        className="bg-blue-500 w-3 h-3 border-none rounded-full"
      />
    </div>
  );
};
