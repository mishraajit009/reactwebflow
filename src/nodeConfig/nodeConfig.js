// NodeConfigs.js
import { Position } from 'reactflow';
export const InputNodeConfig = {
    title: 'Input Node 1',
    fields: [
      { key: 'inputName', label: 'Name', defaultValue: 'Input', type: 'text' },
      { key: 'inputType', label: 'Type', defaultValue: 'Text', type: 'select', options: ['Text', 'File'] },
    ],
    handles: [
      { id: 'value', type: 'source', position: Position.Right },
    ],
  };
  
  export const OutputNodeConfig = {
    title: 'Output Node 1',
    fields: [
      { key: 'outputName', label: 'Name', defaultValue: 'Output', type: 'text' },
      { key: 'outputType', label: 'Type', defaultValue: 'Text', type: 'select', options: ['Text', 'Image'] },
    ],
    handles: [
      { id: 'value', type: 'target', position: Position.Left },
    ],
  };
  
  export const LLMNodeConfig = {
    title: 'NLP Node',
    fields: [],
    handles: [
      { id: 'system', type: 'target', position: Position.Left, style: { top: '33%' } },
      { id: 'prompt', type: 'target', position: Position.Left, style: { top: '66%' } },
      { id: 'response', type: 'source', position: Position.Right },
    ],
  };
  
  export const TextNodeConfig = {
    title: 'Textual Node',
    fields: [
      { key: 'text', label: 'Text', defaultValue: '{{input}}', type: 'text' },
    ],
    handles: [
      { id: 'output', type: 'source', position: Position.Right },
    ],
  };

  export const DatabaseNodeConfig = {
    title: 'Database Node',
    fields: [
      { key: 'dbName', label: 'Database Name', defaultValue: 'MyDB', type: 'text' },
      { key: 'dbType', label: 'Type', defaultValue: 'SQL', type: 'select', options: ['SQL', 'NoSQL'] },
    ],
    handles: [
      { id: 'data', type: 'source', position: Position.Right },
      { id: 'query', type: 'target', position: Position.Left },
    ],
  };
  
  export const APINodeConfig = {
    title: 'API Node',
    fields: [
      { key: 'apiUrl', label: 'API URL', defaultValue: 'https://api.example.com', type: 'text' },
      { key: 'method', label: 'Method', defaultValue: 'GET', type: 'select', options: ['GET', 'POST', 'PUT', 'DELETE'] },
      { key: 'timeout', label: 'Timeout (ms)', defaultValue: '5000', type: 'text' },
    ],
    handles: [
      { id: 'request', type: 'source', position: Position.Right },
      { id: 'response', type: 'target', position: Position.Left },
    ],
  };

  export const FileNodeConfig = {
    title: 'File Node',
    fields: [
      { key: 'filePath', label: 'File Path', defaultValue: '/data/files/input.csv', type: 'text' },
      { key: 'fileType', label: 'File Type', defaultValue: 'CSV', type: 'select', options: ['CSV', 'JSON', 'XML'] },
    ],
    handles: [
      { id: 'inputFile', type: 'source', position: Position.Right },
      { id: 'outputFile', type: 'target', position: Position.Left },
    ],
  };

  export const TransformNodeConfig = {
    title: 'Transform Node',
    fields: [
      { key: 'transformation', label: 'Transformation Logic', defaultValue: 'toUpperCase()', type: 'text' },
      { key: 'inputFormat', label: 'Input Format', defaultValue: 'JSON', type: 'select', options: ['JSON', 'CSV', 'XML'] },
      { key: 'outputFormat', label: 'Output Format', defaultValue: 'JSON', type: 'select', options: ['JSON', 'CSV', 'XML'] },
    ],
    handles: [
      { id: 'input', type: 'source', position: Position.Right },
      { id: 'output', type: 'target', position: Position.Left },
    ],
  };

  export const NotificationNodeConfig = {
    title: 'Notification Node',
    fields: [
      { key: 'notificationType', label: 'Notification Type', defaultValue: 'Email', type: 'select', options: ['Email', 'SMS', 'Push'] },
      { key: 'recipient', label: 'Recipient', defaultValue: 'user@example.com', type: 'text' },
      { key: 'message', label: 'Message', defaultValue: 'Data transformation completed successfully', type: 'textarea' },
    ],
    handles: [
      { id: 'trigger', type: 'source', position: Position.Right },
    ],
  };
  