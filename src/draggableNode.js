// draggabeNode.js

export const DraggableNode = ({ type, label,icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`${type} flex flex-col items-center justify-center w-36 h-36 bg-gradient-to-b from-blue-50 to-white border border-blue-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full shadow-sm">
        {icon}
      </div>
      <span className="mt-3 text-base font-semibold text-gray-800">{label}</span>
    </div>
  );
};
