// toolbar.js

import { DraggableNode } from './draggableNode';
import {
    ArrowUpTrayIcon,
    ArchiveBoxIcon,
    DocumentIcon,
    ServerIcon,
    BellIcon,
    CogIcon,
    CodeBracketIcon,
    PencilSquareIcon,
    ArrowDownTrayIcon
  } from '@heroicons/react/24/solid'; 
export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type="customInput" label="Input" icon={<ArrowDownTrayIcon className="w-7 h-7 text-blue-500"/>} />
                <DraggableNode type="llm" label="LLM" icon={<ServerIcon className="w-7 h-7 text-blue-500"/>} />
                <DraggableNode type="customOutput" label="Output" icon={<ArrowUpTrayIcon className="w-7 h-7 text-blue-500" />} />
                <DraggableNode type="text" label="Text" icon={<PencilSquareIcon className="w-7 h-7 text-blue-500" />} />
                <DraggableNode type="customDatabase" label="Custom DB" icon={<ArchiveBoxIcon className="w-7 h-7 text-blue-500" />} />
                <DraggableNode type="fileNode" label="File Node" icon={<DocumentIcon className="w-7 h-7 text-blue-500" />} />
                <DraggableNode type="apiNode" label="API Node" icon={<CodeBracketIcon className="w-7 h-7 text-blue-500" />} />
                <DraggableNode type="transFromNode" label="Transform Node" icon={<CogIcon className="w-7 h-7 text-blue-500" />} />
                <DraggableNode type="notficationNode" label="Notification Node" icon={<BellIcon className="w-7 h-7 text-blue-500" />} />
            </div>
        </div>
    );
};
