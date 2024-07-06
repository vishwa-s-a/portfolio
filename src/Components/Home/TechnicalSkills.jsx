import React, { useState } from 'react';

const TechnicalSkills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white">
      <div className="mb-4">
        <h1 className="text-5xl font-bold">Technical Skills</h1>
      </div>
      <div>
        <div className="flex border-b border-gray-700 mb-4">
          <button
            className={`tab-button py-2 px-4 ${activeTab === 'frontend' ? 'text-gray-300 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('frontend')}
          >
            Frontend
          </button>
          <button
            className={`tab-button py-2 px-4 ${activeTab === 'backend' ? 'text-gray-300 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('backend')}
          >
            Backend
          </button>
          <button
            className={`tab-button py-2 px-4 ${activeTab === 'Machine learning' ? 'text-gray-300 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('Machine learning')}
          >
            Machine learning
          </button>
          <button
            className={`tab-button py-2 px-4 ${activeTab === 'others' ? 'text-gray-300 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('others')}
          >
            Other
          </button>
        </div>
        <div className={activeTab === 'frontend' ? '' : 'hidden'}>
          <div className="space-y-4">
            <div>
              <h2 className="font-semibold">LANGUAGES</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Javascript</span>
              </div>
            </div>
            <div>
              <h2 className="font-semibold">FRAMEWORKS</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">ReactJs</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Bootstrap</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Tailwind CSS</span>
              </div>
            </div>
            <div>
              <h2 className="font-semibold">MARKUP / STYLING</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">HTML</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">CSS</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Markdown</span>
                
              </div>
            </div>
            <div>
              <h2 className="font-semibold">BUILD TOOLS</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Webpack</span>
              </div>
            </div>
          </div>
        </div>
        <div className={activeTab === 'backend' ? '' : 'hidden'}>
          <div className="space-y-4">
            <div>
              <h2 className="font-semibold">LANGUAGES</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Node.js</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Python</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">PHP</span>
              </div>
            </div>
            <div>
              <h2 className="font-semibold">FRAMEWORKS</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Express.js</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Django</span>
              </div>
            </div>
            <div>
              <h2 className="font-semibold">DATABASES</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">MongoDB</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">MySQL</span>
              </div>
            </div>
            <div>
              <h2 className="font-semibold">CLOUD SERVICES</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">AWS EC2</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Render</span>
              </div>
            </div>
          </div>
        </div>
        <div className={activeTab === 'Machine learning' ? '' : 'hidden'}>
          <div className="space-y-4">
            <div>
              <h2 className="font-semibold">FRAMEWORKS</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">TensorFlow</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Keras</span>
              </div>
            </div>
            <div>
              <h2 className="font-semibold">LIBRARIES</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">NumPy</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Pandas</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">matplotlib</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">scikit-learn</span>
              </div>
            </div>
          </div>
        </div>
        <div className={activeTab === 'others' ? '' : 'hidden'}>
          <div className="space-y-4">
            <div>
              <h2 className="font-semibold">LANGUAGES</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Java</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">C</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">C++</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Latex</span>
              </div>
            </div>
            <div>
              <h2 className="font-semibold">OTHER</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Git</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Postman</span>
              </div>
            </div>
            <div>
              <h2 className="font-semibold">CYBERSECURITY TOOLS</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">NMAP</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">WireShark</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">BeEF</span>
                <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded">Aircrack-ng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
