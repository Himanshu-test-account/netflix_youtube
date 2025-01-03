import React from 'react';
import { useDropzone } from 'react-dropzone';
import Sidebar from './Sidebar';

function Profile() {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    image: null
  });
  const [error, setError] = React.useState('');

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxSize: 5000000, // 5MB
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png']
    },
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (acceptedFiles.length > 0) {
        setFormData(prev => ({
          ...prev,
          image: acceptedFiles[0]
        }));
        setError('');
      }
      if (rejectedFiles.length > 0) {
        const errors = rejectedFiles[0].errors.map(err => err.message).join(', ');
        setError(errors);
      }
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <Sidebar>
      <div className='flex flex-col gap-6'>
        <h2 className='text-2xl font-bold text-white'>Profile</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload Section */}
          <div>
            <div 
              {...getRootProps()} 
              className="px-8 py-6 border-2 border-dashed border-blue-400 bg-dry rounded-lg 
                cursor-pointer transition-all duration-300 ease-in-out transform 
                hover:bg-main hover:border-subMain"
            >
              <input {...getInputProps()} />
              <span className="flex justify-center items-center text-subMain text-5xl mb-4">
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
              <p className="text-lg text-gray-300 font-medium mt-2">Drag Your Image here</p>
              <em className="text-sm text-gray-500 mt-2 block">(only .jpg, .jpeg, and .png files will be accepted)</em>
            </div>
            {error && (
              <div className="mt-2 text-red-500 text-sm">
                {error}
              </div>
            )}
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <label className="text-gray-300 font-semibold">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full bg-main text-white border border-gray-800 rounded-lg px-4 py-3 mt-2"
              />
            </div>

            <div>
              <label className="text-gray-300 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full bg-main text-white border border-gray-800 rounded-lg px-4 py-3 mt-2"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
            <button 
              type="button"
              className='bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'
              onClick={() => console.log('Delete account')}
            >
              Delete Account
            </button>
            <button 
              type="submit"
              className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </Sidebar>
  );
}

export default Profile;