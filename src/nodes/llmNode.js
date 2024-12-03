import { Handle, Position } from "reactflow";
import { XMarkIcon } from '@heroicons/react/24/outline'; 
import { useStore } from '../store';
export const LLMNode = ({ id, data }) => {
  const deleteNode = useStore((state) => state.deleteNode);
  const handleDelete = () => {
    deleteNode(id);
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
        LLM Node
      </div>

      {/* Node Body */}
      <div className="text-sm text-gray-700">
        <p className="font-medium">LLM:</p>
        <p>This is an LLM.</p>
      </div>

      {/* Handles */}
      {/* Left Handles */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: "33%" }}
        className="bg-blue-500 w-3 h-3 border-none rounded-full"
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: "66%" }}
        className="bg-blue-500 w-3 h-3 border-none rounded-full"
      />

      {/* Right Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        className="bg-blue-500 w-3 h-3 border-none rounded-full"
      />
    </div>
  );
};
