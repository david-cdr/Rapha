import type { Recording } from '../types/recording'

export const mockRecordings: Recording[] = [
  {
    id: '001',
    patientId: '001',
    date: '2024-03-12',
    name: '0X1002E8FBACD08477',
    thumbnail: '/src/assets/thumbnails/patient-001-2024-03-12.jpg',
    originalVideo: '/src/assets/videos/original/dynamic_1.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/dynamic_1_overlayed.mp4',
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
    originalVideo: '/src/assets/videos/original/dynamic_2.mp4',
    analyzedVideo: '/src/assets/videos/analyzed/dynamic_2_overlayed.mp4',
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