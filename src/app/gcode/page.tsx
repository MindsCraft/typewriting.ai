'use client';

import { GCodeViewer } from '@/components/gcode/GCodeViewer';

export default function GCodePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            G-code Viewer
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Upload, view, and analyze your G-code files in the browser
          </p>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <GCodeViewer />
        </div>
        
        <div className="mt-12 bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">About G-code</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                G-code is the most widely used computer numerical control (CNC) programming language. 
                It is used mainly in computer-aided manufacturing to control automated machine tools.
              </p>
              <p className="mt-4">
                This tool allows you to upload and inspect G-code files directly in your browser. 
                You can view the raw G-code and see a structured breakdown of the commands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
