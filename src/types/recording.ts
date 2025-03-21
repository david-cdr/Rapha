export interface AnalysisResults {
  ejectionFraction: string;
  endSystolicVolume: string;
  endDiastolicVolume: string;
  heartRate: string;
}

export interface Recording {
  id: string;
  patientId: string;
  date: string;
  name: string;
  thumbnail: string;
  originalVideo: string;
  analyzedVideo: string;
  analysisResults?: AnalysisResults;
} 