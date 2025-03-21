export interface Recording {
  id: string;
  patientId: string;
  date: string;
  name: string;
  thumbnail: string;
  originalVideo: string;
  analyzedVideo?: string;
}

export interface AnalysisResults {
  ejectionFraction: string;
  strokeVolume: string;
  cardiacOutput: string;
  heartRate: string;
} 