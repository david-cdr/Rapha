import type { Recording } from '../types/recording'

const defaultAnalysisResults = {
  // Basic Measurements
  ejectionFraction: '55',
  endSystolicVolume: '50',
  endDiastolicVolume: '120',
  heartRate: '72',
  
  // Additional Cardiac Function
  strokeVolume: '70',
  cardiacOutput: '5.04',
  wallMotionScore: '1.2',
  myocardialMass: '180',
  
  // Chamber Measurements
  leftAtrialVolume: '28',
  rightVentricularFunction: '23',
  eaRatio: '1.2',
  eeRatio: '8',
  
  // Dynamic Measurements
  strainRate: '-18.5',
  wallMotionVelocity: '12',
  ventricularSynchrony: '35',
  
  // Risk Scores
  cardiovascularRisk: '25',
  heartFailureRisk: '15',
  valveDiseaseRisk: '20'
}

export const mockRecordings: Recording[] = [
  {
    id: '1',
    patientId: 'P001',
    date: '2024-03-15',
    name: 'Initial Assessment',
    thumbnail: '/thumbnails/echo1.jpg',
    originalVideo: '/src/assets/videos/original/dynamic_1.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/dynamic_1_overlayed.mp4',
    analysisResults: defaultAnalysisResults
  },
  {
    id: '2',
    patientId: 'P002',
    date: '2024-03-14',
    name: 'Follow-up Study',
    thumbnail: '/thumbnails/echo2.jpg',
    originalVideo: '/src/assets/videos/original/dynamic_2.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/dynamic_2_overlayed.mp4',
    analysisResults: {
      ...defaultAnalysisResults,
      // Showing abnormal values
      ejectionFraction: '35',
      endSystolicVolume: '85',
      endDiastolicVolume: '140',
      heartRate: '88',
      strokeVolume: '55',
      cardiacOutput: '4.84',
      wallMotionScore: '1.8',
      myocardialMass: '220',
      leftAtrialVolume: '38',
      rightVentricularFunction: '18',
      eaRatio: '0.8',
      eeRatio: '15',
      strainRate: '-12.5',
      wallMotionVelocity: '8',
      ventricularSynchrony: '65',
      cardiovascularRisk: '75',
      heartFailureRisk: '65',
      valveDiseaseRisk: '45'
    }
  }
]