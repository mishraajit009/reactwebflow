import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { useStore } from './store';

function App() {
  const alert = useStore((state) => state.alert);
    const hideAlert = useStore((state) => state.hideAlert);
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
      {alert.visible && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={hideAlert}  // Close the alert box on click
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
                        onClick={(e) => e.stopPropagation()}  // Prevent click event from closing the alert box
                    >
                        <h2 className="text-2xl font-semibold mb-4">{alert.message}</h2>
                        <p><strong>Number of Nodes:</strong> {alert.numNodes}</p>
                        <p><strong>Number of Edges:</strong> {alert.numEdges}</p>
                        <p><strong>Is DAG:</strong> {alert.isDAG ? 'Yes' : 'No'}</p>
                        <div className="mt-4">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                onClick={hideAlert}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
        )}
    </div>
  );
}

export default App;
