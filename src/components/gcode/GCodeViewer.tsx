'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FiUpload, FiCode, FiEye, FiX } from 'react-icons/fi';

interface GCodeViewerProps {
  gcode?: string;
  onGcodeChange?: (gcode: string) => void;
  showVisualizer?: boolean;
}

export function GCodeViewer({
  gcode: initialGcode = '',
  onGcodeChange,
  showVisualizer = true,
}: GCodeViewerProps) {
  const [gcode, setGcode] = useState(initialGcode);
  const [parsedGcode, setParsedGcode] = useState<Array<{line: number; text: string; command?: string}>>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [showVisualizerState, setShowVisualizer] = useState(showVisualizer);
  
  // Simple G-code line parser
  const parseGcodeLine = (line: string) => {
    // Remove comments and trim whitespace
    const cleanLine = line.split(';')[0].trim();
    if (!cleanLine) return null;
    
    // Extract command (G0, G1, G28, etc.)
    const commandMatch = cleanLine.match(/^[GMT][0-9]+\.?[0-9]*/);
    const command = commandMatch ? commandMatch[0] : undefined;
    
    return {
      command,
      text: line.trim() // Keep original line for display
    };
  };
  
  // Parse the entire G-code content
  const parseGcodeContent = (content: string) => {
    const lines = content.split('\n');
    return lines
      .map((line, index) => {
        const parsed = parseGcodeLine(line);
        return parsed ? { line: index + 1, ...parsed } : null;
      })
      .filter((line): line is { line: number; text: string; command?: string } => line !== null);
  };

  // Handle file drag and drop
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.name.endsWith('.gcode')) {
      handleFile(file);
    } else {
      setError('Please upload a valid .gcode file');
    }
  }, []);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setGcode(content);
      if (onGcodeChange) onGcodeChange(content);
      setError(null);
    };
    reader.onerror = () => {
      setError('Error reading file');
    };
    reader.readAsText(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleGcodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newGcode = e.target.value;
    setGcode(newGcode);
    if (onGcodeChange) onGcodeChange(newGcode);
  };

  // Parse G-code when it changes
  useEffect(() => {
    try {
      const parsed = parseGcodeContent(gcode);
      setParsedGcode(parsed);
      setError(null);
    } catch (e) {
      console.error('Error parsing G-code:', e);
      setError('Error parsing G-code');
    }
  }, [gcode]);

  const toggleEditor = () => setShowEditor(!showEditor);
  const toggleVisualizer = () => setShowVisualizer(!showVisualizerState);

  return (
    <div className="space-y-6">
      {/* File Upload Area */}
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".gcode"
          onChange={handleFileInputChange}
        />
        <div className="flex flex-col items-center justify-center space-y-2">
          <FiUpload className="h-12 w-12 text-gray-400" />
          <p className="text-lg font-medium text-gray-700">
            {isDragging ? 'Drop the file here' : 'Drag and drop a .gcode file here, or click to select'}
          </p>
          <p className="text-sm text-gray-500">Supports .gcode files</p>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <FiX className="h-5 w-5 text-red-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={toggleEditor}
          className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
            showEditor
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <FiCode className="mr-2 h-4 w-4" />
          {showEditor ? 'Hide Editor' : 'Show Editor'}
        </button>
        <button
          onClick={toggleVisualizer}
          className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
            showVisualizerState
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <FiEye className="mr-2 h-4 w-4" />
          {showVisualizerState ? 'Hide Preview' : 'Show Preview'}
        </button>
      </div>

      {/* Editor */}
      {showEditor && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">G-code Editor</h3>
          </div>
          <div className="border-t border-gray-200">
            <textarea
              className="w-full h-96 font-mono text-sm p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={gcode}
              onChange={handleGcodeChange}
              placeholder="Paste your G-code here or upload a file..."
            />
          </div>
        </div>
      )}

      {/* Visualizer */}
      {showVisualizerState && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <div className="flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">G-code Preview</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {parsedGcode.length} commands
              </span>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="bg-gray-50 p-4 h-96 overflow-auto">
              {parsedGcode.length > 0 ? (
                <div className="space-y-1">
                  {parsedGcode.slice(0, 200).map((line, i) => (
                    <div 
                      key={i} 
                      className={`px-2 py-1 text-sm font-mono ${
                        line.command ? 'text-gray-900' : 'text-gray-500'
                      }`}
                    >
                      <span className="text-gray-400 text-xs w-8 inline-block">{line.line}</span>
                      {line.text}
                    </div>
                  ))}
                  {parsedGcode.length > 200 && (
                    <div className="text-center text-sm text-gray-500 py-2">
                      ... and {parsedGcode.length - 200} more lines
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <p className="mt-2">Upload a G-code file to see the preview</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
