import { useState } from 'react'
import { mockRecordings } from './data/mockRecordings'
import { Sidebar } from './components/layout/Sidebar'
import { VideoPlayer } from './components/recording/VideoPlayer'
import { AnalysisResults } from './components/recording/AnalysisResults'
import { EmailSignup } from './components/layout/EmailSignup'
import { useAnalysis } from './hooks/useAnalysis'

function App() {
  const [selectedRecording, setSelectedRecording] = useState<string | null>(null)
  const { isAnalyzing, analysisComplete, startAnalysis, resetAnalysis } = useAnalysis()

  const selectedVideo = mockRecordings.find(r => r.id === selectedRecording)
  const videoSrc = selectedVideo 
    ? (analysisComplete ? selectedVideo.analyzedVideo : selectedVideo.originalVideo)
    : ''

  return (
    <div className="flex h-screen">
      <Sidebar
        recordings={mockRecordings}
        selectedId={selectedRecording}
        onSelect={(id) => {
          setSelectedRecording(id)
          resetAnalysis()
        }}
        onLogoClick={() => setSelectedRecording(null)}
      />

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
              <p className="text-xl text-gray-600 mb-16">Pick a recording for analysis</p>
              <div className="w-full max-w-2xl">
                <EmailSignup />
              </div>
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
                  {selectedVideo && <VideoPlayer src={videoSrc} />}
                  
                  {analysisComplete && selectedVideo?.analysisResults ? (
                    <AnalysisResults results={selectedVideo.analysisResults} />
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
