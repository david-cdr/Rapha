export interface AnalysisResults {
  // Left Ventricle Measurements
  ejectionFraction: string;
  globalLongitudinalStrain: string;
  leftVentricularEndDiastolicVolume: string;
  leftVentricularEndSystolicVolume: string;
  leftVentricularStrokeVolume: string;
  leftVentricularSize: string[];
  leftVentricularWallThickness: {
    any: string;
    moderateSevere: string;
  };
  leftVentricularSystolicFunction: string[];
  leftVentricularWallMotionAbnormalities: string;
  interventricularSeptumThickness: string;
  leftVentricularPosteriorWallThickness: string;
  leftVentricularInternalDimensionSystolic: string;
  leftVentricularInternalDimensionDiastolic: string;
  leftVentricularDiastolicFunction: string[];
  eaRatio: string;

  // Right Ventricle Measurements
  rightVentricularSize: string[];
  rightVentricularSystolicFunction: string;
  rightVentricularInternalDimensionDiastolic: string;
  tricuspidAnnularPlaneSystolicExcursion: string;
  rightVentricularSystolicVelocity: string;

  // Atrial Measurements
  leftAtrialSize: string[];
  leftAtrialInternalDimension: string;
  leftAtrialVolume: string;
  rightAtrialSize: string;
  rightAtrialDimension: string;

  // Pericardial Measurements
  pericardialEffusion: string;
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