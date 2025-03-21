import { useState } from 'react'

export function useAnalysis() {
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

  const resetAnalysis = () => {
    setAnalysisComplete(false)
  }

  return {
    isAnalyzing,
    analysisComplete,
    startAnalysis,
    resetAnalysis,
  }
} 