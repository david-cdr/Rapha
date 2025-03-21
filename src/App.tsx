import { useState } from 'react'
import type { Recording } from './types/recording'
import raphaLogo from './assets/brand/rapha-logo-white.png'

// Mock data for recordings
const mockRecordings: Recording[] = [
  {
    id: '001',
    patientId: '001',
    date: '2024-03-12',
    name: '0X1002E8FBACD08477',
    thumbnail: '/src/assets/thumbnails/patient-001-2024-03-12.jpg',
    originalVideo: '/src/assets/videos/original/patient-001-2024-03-12-original.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/patient-001-2024-03-12-analyzed.mp4',
    analysisResults: {
      ejectionFraction: '59%',
      endSystolicVolume: '40 mL',
      endDiastolicVolume: '98 mL',
      heartRate: '72 bpm'
    }
  },
  {
    id: '002',
    patientId: '002',
    date: '2024-03-11',
    name: '0X10099BA0A0B8A2A7',
    thumbnail: '/src/assets/thumbnails/patient-002-2024-03-11.jpg',
    originalVideo: '/src/assets/videos/original/patient-002-2024-03-11-original.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/patient-002-2024-03-11-analyzed.mp4',
    analysisResults: {
      ejectionFraction: '25%',
      endSystolicVolume: '127 mL',
      endDiastolicVolume: '169 mL',
      heartRate: '75 bpm'
    }
  },
  {
    id: '003',
    patientId: '003',
    date: '2024-03-10',
    name: '0X100E3B8D32B8BEC5',
    thumbnail: '/src/assets/thumbnails/patient-003-2024-03-10.jpg',
    originalVideo: '/src/assets/videos/original/patient-003-2024-03-10-original.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/patient-003-2024-03-10-analyzed.mp4',
    analysisResults: {
      ejectionFraction: '37%',
      endSystolicVolume: '82 mL',
      endDiastolicVolume: '129 mL',
      heartRate: '78 bpm'
    }
  },
  {
    id: '004',
    patientId: '004',
    date: '2024-03-09',
    name: '0X10569E00E4DFFF7D',
    thumbnail: '/src/assets/thumbnails/patient-004-2024-03-09.jpg',
    originalVideo: '/src/assets/videos/original/patient-004-2024-03-09-original.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/patient-004-2024-03-09-analyzed.mp4',
    analysisResults: {
      ejectionFraction: '81%',
      endSystolicVolume: '18 mL',
      endDiastolicVolume: '95 mL',
      heartRate: '70 bpm'
    }
  },
  {
    id: '005',
    patientId: '005',
    date: '2024-03-08',
    name: '0X106E73F749G1CC47B',
    thumbnail: '/src/assets/thumbnails/patient-005-2024-03-08.jpg',
    originalVideo: '/src/assets/videos/original/patient-005-2024-03-08-original.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/patient-005-2024-03-08-analyzed.mp4',
    analysisResults: {
      ejectionFraction: '60%',
      endSystolicVolume: '30 mL',
      endDiastolicVolume: '76 mL',
      heartRate: '73 bpm'
    }
  },
  {
    id: '006',
    patientId: '006',
    date: '2024-03-07',
    name: '0X108A8ADB48536C3D5',
    thumbnail: '/src/assets/thumbnails/patient-006-2024-03-07.jpg',
    originalVideo: '/src/assets/videos/original/patient-006-2024-03-07-original.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/patient-006-2024-03-07-analyzed.mp4',
    analysisResults: {
      ejectionFraction: '19%',
      endSystolicVolume: '102 mL',
      endDiastolicVolume: '127 mL',
      heartRate: '82 bpm'
    }
  },
  {
    id: '007',
    patientId: '007',
    date: '2024-03-06',
    name: '0X10D8F3659B144070',
    thumbnail: '/src/assets/thumbnails/patient-007-2024-03-06.jpg',
    originalVideo: '/src/assets/videos/original/patient-007-2024-03-06-original.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/patient-007-2024-03-06-analyzed.mp4',
    analysisResults: {
      ejectionFraction: '49%',
      endSystolicVolume: '21 mL',
      endDiastolicVolume: '39 mL',
      heartRate: '76 bpm'
    }
  },
  {
    id: '008',
    patientId: '008',
    date: '2024-03-05',
    name: '0X1151F27F49E964AF',
    thumbnail: '/src/assets/thumbnails/patient-008-2024-03-05.jpg',
    originalVideo: '/src/assets/videos/original/patient-008-2024-03-05-original.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/patient-008-2024-03-05-analyzed.mp4',
    analysisResults: {
      ejectionFraction: '72%',
      endSystolicVolume: '10 mL',
      endDiastolicVolume: '35 mL',
      heartRate: '68 bpm'
    }
  },
  {
    id: '009',
    patientId: '009',
    date: '2024-03-04',
    name: '0X12B70D2902C13E73',
    thumbnail: '/src/assets/thumbnails/patient-009-2024-03-04.jpg',
    originalVideo: '/src/assets/videos/original/patient-009-2024-03-04-original.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/patient-009-2024-03-04-analyzed.mp4',
    analysisResults: {
      ejectionFraction: '64%',
      endSystolicVolume: '23 mL',
      endDiastolicVolume: '65 mL',
      heartRate: '74 bpm'
    }
  }
]

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
    <div className="flex h-screen">
      {/* Sidebar with recordings */}
      <div className="w-72 bg-slate-900 shadow-lg overflow-y-auto border-r border-slate-700">
        <div className="py-8 px-8 border-b border-slate-700">
          <img src={raphaLogo} alt="Rapha" className="h-12" />
        </div>
        <div className="space-y-4 p-4">
          {mockRecordings.map((recording) => (
            <div
              key={recording.id}
              className={`cursor-pointer transition-all rounded-lg ${
                selectedRecording === recording.id
                  ? 'ring-2 ring-indigo-400 bg-slate-800'
                  : 'hover:bg-slate-800'
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
              <div className="mt-2 space-y-1 p-2">
                <p className="text-xs font-medium text-white">Patient #{recording.patientId}</p>
                <p className="text-xs text-slate-400">Age: {65 + Number(recording.id)} • {recording.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="max-w-4xl mx-auto p-8">
          {!selectedRecording ? (
            <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-gray-400">
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
              <p className="text-xl text-gray-600">Pick a recording for analysis</p>
            </div>
          ) : (
            <div className="pb-12">
              {isAnalyzing ? (
                <div className="h-96 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
                  <p className="mt-4 text-lg text-gray-600">Analyzing recording...</p>
                </div>
              ) : (
                <>
                  <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
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
                  
                  {analysisComplete && selectedVideo?.analysisResults ? (
                    <div className="mt-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                          <p className="text-base text-gray-500">Ejection Fraction</p>
                          <p className="text-4xl font-semibold text-indigo-600 mt-2">
                            {selectedVideo.analysisResults.ejectionFraction}
                          </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                          <p className="text-base text-gray-500">End Systolic Volume</p>
                          <p className="text-4xl font-semibold text-indigo-600 mt-2">
                            {selectedVideo.analysisResults.endSystolicVolume}
                          </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                          <p className="text-base text-gray-500">End Diastolic Volume</p>
                          <p className="text-4xl font-semibold text-indigo-600 mt-2">
                            {selectedVideo.analysisResults.endDiastolicVolume}
                          </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                          <p className="text-base text-gray-500">Heart Rate</p>
                          <p className="text-4xl font-semibold text-indigo-600 mt-2">
                            {selectedVideo.analysisResults.heartRate}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={startAnalysis}
                      className="mt-6 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md"
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
    </div>
  )
}

export default App
