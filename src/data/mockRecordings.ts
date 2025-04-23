import type { Recording } from '../types/recording'

const defaultAnalysisResults = {
  // Left Ventricle Measurements
  ejectionFraction: '29.53',
  globalLongitudinalStrain: '10.26',
  leftVentricularEndDiastolicVolume: '243.80',
  leftVentricularEndSystolicVolume: '169.06',
  leftVentricularStrokeVolume: '75.82',
  leftVentricularSize: ['0.20', '0.26', '0.55'],
  leftVentricularWallThickness: {
    any: '0.82',
    moderateSevere: '0.04'
  },
  leftVentricularSystolicFunction: ['0.09', '0.91', '0.00'],
  leftVentricularWallMotionAbnormalities: '0.99',
  interventricularSeptumThickness: '1.31',
  leftVentricularPosteriorWallThickness: '1.05',
  leftVentricularInternalDimensionSystolic: '5.06',
  leftVentricularInternalDimensionDiastolic: '5.97',
  leftVentricularDiastolicFunction: ['0.67', '0.29', '0.04'],
  eaRatio: '19.33',

  // Right Ventricle Measurements
  rightVentricularSize: ['0.14', '0.08', '0.78'],
  rightVentricularSystolicFunction: '0.32',
  rightVentricularInternalDimensionDiastolic: '3.19',
  tricuspidAnnularPlaneSystolicExcursion: '1.71',
  rightVentricularSystolicVelocity: '8.64',

  // Atrial Measurements
  leftAtrialSize: ['0.35', '0.48', '0.17'],
  leftAtrialInternalDimension: '4.84',
  leftAtrialVolume: '68.82',
  rightAtrialSize: '0.11',
  rightAtrialDimension: '3.86',

  // Pericardial Measurements
  pericardialEffusion: '0.00'
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
      // Left Ventricle Measurements
      ejectionFraction: '61.74',
      globalLongitudinalStrain: '17.69',
      leftVentricularEndDiastolicVolume: '96.98',
      leftVentricularEndSystolicVolume: '36.40',
      leftVentricularStrokeVolume: '59.96',
      leftVentricularSize: ['0.04', '0.00', '0.96'],
      leftVentricularWallThickness: {
        any: '0.16',
        moderateSevere: '0.00'
      },
      leftVentricularSystolicFunction: ['0.04', '0.00', '0.96'],
      leftVentricularWallMotionAbnormalities: '0.05',
      interventricularSeptumThickness: '0.92',
      leftVentricularPosteriorWallThickness: '0.93',
      leftVentricularInternalDimensionSystolic: '3.25',
      leftVentricularInternalDimensionDiastolic: '4.88',
      leftVentricularDiastolicFunction: ['0.30', '0.02', '0.68'],
      eaRatio: '8.89',

      // Right Ventricle Measurements
      rightVentricularSize: ['0.04', '0.01', '0.95'],
      rightVentricularSystolicFunction: '0.00',
      rightVentricularInternalDimensionDiastolic: '3.16',
      tricuspidAnnularPlaneSystolicExcursion: '2.45',
      rightVentricularSystolicVelocity: '13.00',

      // Atrial Measurements
      leftAtrialSize: ['0.39', '0.22', '0.39'],
      leftAtrialInternalDimension: '4.16',
      leftAtrialVolume: '70.80',
      rightAtrialSize: '0.10',
      rightAtrialDimension: '3.82',

      // Pericardial Measurements
      pericardialEffusion: '0.01'
    }
  }
]