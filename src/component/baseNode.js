import React, { useState } from 'react';
import { Handle } from 'reactflow';
import { InputField } from './inputField';
import { SelectField } from './selectField';
import { XMarkIcon } from '@heroicons/react/24/outline'; 
import { useStore } from '../store';

export const BaseNode = ({ id, data, config }) => {
  const [values, setValues] = useState(() =>
    config.fields.reduce((acc, field) => {
      acc[field.key] = data?.[field.key] || field.defaultValue || '';
      return acc;
    }, {})
  );

  const deleteNode = useStore((state) => state.deleteNode);

  const handleChange = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleDelete = () => {
    deleteNode(id);
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'text':
        return (
          <InputField
            key={field.key}
            label={field.label}
            value={values[field.key]}
            onChange={(e) => handleChange(field.key, e.target.value)}
          />
        );
      case 'select':
        return (
          <SelectField
            key={field.key}
            label={field.label}
            value={values[field.key]}
            options={field.options}
            onChange={(e) => handleChange(field.key, e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative bg-white border border-gray-300 rounded-lg shadow-md w-60 p-4 space-y-4">
      <button
                onClick={handleDelete}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-all"
                title="Delete Node"
            >
                <XMarkIcon className="w-5 h-5" />
      </button>
      {/* Node Header */}
      <div className="border-b border-gray-300 text-gray-800 text-base font-bold text-center pb-2 mb-3">
        {config.title}
      </div>


      {/* Node Body */}
      <div className="flex flex-col space-y-3">
        {config.fields.map((field) => renderField(field))}
      </div>

      {/* Handles */}
      {config.handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={{ ...handle.style, background: '#0078d4', borderRadius: '50%' }}
        />
      ))}

      {/* Node Footer */}
      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded-md text-sm font-medium transition"
      >
        Submit
      </button>
    </div>
  );
};
