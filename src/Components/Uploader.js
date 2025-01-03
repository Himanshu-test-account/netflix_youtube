import React from 'react';
import { useDropzone } from 'react-dropzone';

function Uploader({ onUpload }) {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        multiple: false,
        maxSize: 2000000, // 2MB limit
        accept: {
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/png': ['.png']
        },
        onDrop: (acceptedFiles, rejectedFiles) => {
            if (acceptedFiles.length > 0) {
                if (onUpload) onUpload(acceptedFiles[0]);
                console.log(`File accepted: ${acceptedFiles[0].name}`);
            }
            if (rejectedFiles.length > 0) {
                rejectedFiles.forEach(file => {
                    if (file.errors) {
                        file.errors.forEach(err => {
                            console.error(`Error: ${err.message}`);
                        });
                    }
                });
            }
        },
    });

    return (
        <div className="w-full text-center">
            <div 
                {...getRootProps()} 
                className={`px-8 py-6 border-2 border-dashed border-subMain bg-main rounded-lg 
                    cursor-pointer transition-all duration-300 ease-in-out 
                    ${isDragActive ? 'border-white bg-dry' : 'hover:bg-dry hover:border-white'}`}
            >
                <input {...getInputProps()} />
                <span className="flex justify-center items-center text-subMain text-5xl mb-4">
                    {/* Inline SVG instead of FiUploadCloud */}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-12 w-12" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                        />
                    </svg>
                </span>
                <p className="text-lg text-gray-300 font-medium mt-2">
                    {isDragActive ? "Drop your image here" : "Drag your image here"}
                </p>
                <em className="text-sm text-gray-500 mt-2 block">
                    (only .jpg, .jpeg, and .png files will be accepted)
                </em>
            </div>
        </div>
    );
}

export default Uploader;