export interface AnalysisResults {
  // Basic Measurements
  ejectionFraction: string;
  endSystolicVolume: string;
  endDiastolicVolume: string;
  heartRate: string;
  
  // Additional Cardiac Function
  strokeVolume: string;
  cardiacOutput: string;
  wallMotionScore: string;
  myocardialMass: string;
  
  // Chamber Measurements
  leftAtrialVolume: string;
  rightVentricularFunction: string;
  eaRatio: string;
  eeRatio: string;
  
  // Dynamic Measurements
  strainRate: string;
  wallMotionVelocity: string;
  ventricularSynchrony: string;
  
  // Risk Scores (0-100)
  cardiovascularRisk: string;
  heartFailureRisk: string;
  valveDiseaseRisk: string;
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