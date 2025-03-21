import { useState } from 'react'
import type { Recording, AnalysisResults } from './types/recording'

// Mock data for recordings
const mockRecordings: Recording[] = [
  {
    id: '001',
    patientId: '001',
    date: '2024-03-12',
    name: 'Patient A - 12/03/2024',
    thumbnail: '/src/assets/thumbnails/patient-001-2024-03-12.jpg',
    originalVideo: '/src/assets/videos/original/patient-001-2024-03-12-original.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/patient-001-2024-03-12-analyzed.mp4'
  },
  {
    id: '002',
    patientId: '002',
    date: '2024-03-11',
    name: 'Patient B - 11/03/2024',
    thumbnail: '/src/assets/thumbnails/patient-002-2024-03-11.jpg',
    originalVideo: '/src/assets/videos/original/patient-002-2024-03-11-original.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/patient-002-2024-03-11-analyzed.mp4'
  },
  // Add more mock recordings as needed
]

// Mock analysis results
const mockResults: AnalysisResults = {
  ejectionFraction: '65%',
  strokeVolume: '70 mL',
  cardiacOutput: '5.2 L/min',
  heartRate: '75 bpm'
}

function App() {
  const [selectedRecording, setSelectedRecording] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const startAnalysis = () => {
    setIsAnalyzing(true)
    // Mock analysis time
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisComplete(true)
    }, 3000)
  }

  const selectedVideo = mockRecordings.find(r => r.id === selectedRecording)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar with recordings */}
      <div className="w-72 bg-white shadow-lg overflow-y-auto">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Recordings</h2>
        </div>
        <div className="space-y-4 p-4">
          {mockRecordings.map((recording) => (
            <div
              key={recording.id}
              className={`cursor-pointer transition-all ${
                selectedRecording === recording.id
                  ? 'ring-2 ring-blue-500'
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => {
                setSelectedRecording(recording.id)
                setAnalysisComplete(false)
              }}
            >
              <img
                src={recording.thumbnail}
                alt={recording.name}
                className="w-full rounded-lg shadow-sm"
              />
              <p className="mt-2 text-sm text-gray-600">{recording.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-8">
        {!selectedRecording ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-500">
            <svg
              className="w-24 h-24 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-xl">Pick a recording for analysis</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {isAnalyzing ? (
              <div className="h-96 flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                <p className="mt-4 text-lg text-gray-600">Analyzing recording...</p>
              </div>
            ) : (
              <>
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  {selectedVideo && (
                    <video
                      src={analysisComplete ? selectedVideo.analyzedVideo : selectedVideo.originalVideo}
                      controls
                      className="w-full h-full"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                
                {analysisComplete ? (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Analysis Results</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-sm text-gray-500">Ejection Fraction</p>
                        <p className="text-2xl font-bold text-blue-600">{mockResults.ejectionFraction}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-sm text-gray-500">Stroke Volume</p>
                        <p className="text-2xl font-bold text-blue-600">{mockResults.strokeVolume}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-sm text-gray-500">Cardiac Output</p>
                        <p className="text-2xl font-bold text-blue-600">{mockResults.cardiacOutput}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-sm text-gray-500">Heart Rate</p>
                        <p className="text-2xl font-bold text-blue-600">{mockResults.heartRate}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={startAnalysis}
                    className="mt-6 w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Start Analysis
                  </button>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
