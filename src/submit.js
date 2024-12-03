// submit.js
import { useStore } from './store';

export const SubmitButton = () => {
    // Subscribe to nodes and edges from Zustand
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);
    const setAlert = useStore((state) => state.setAlert);
    const handleSubmit = () => {
        // Example: Sending nodes and edges to a backend
        const payload = { nodes, edges };
        fetch('http://localhost:8000/pipelines/parse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => response.json())
            .then((data) => {
                setAlert(true, `Pipeline submitted successfully!`, data.is_dag, data.num_nodes, data.num_edges);
            })
            .catch((error) => {
                console.error('Error submitting data:', error);
            });
    };

    return (
        <>
        {/*<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>*/}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button
                type="submit"
                onClick={handleSubmit}
                className="flex items-center justify-center w-32 h-12 bg-gradient-to-b from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-600"
            >
                Submit
            </button>
        </div>

        </>

    );
};
