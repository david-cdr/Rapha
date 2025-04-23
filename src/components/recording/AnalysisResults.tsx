import { AnalysisResults as AnalysisResultsType } from '../../types/recording'

interface Props {
  results: AnalysisResultsType
}

export function AnalysisResults({ results }: Props) {
  // Calculate risk scores based on measurements
  const calculateRisks = () => {
    const risks = {
      cardiovascularRisk: 0,
      heartFailureRisk: 0,
      valveDiseaseRisk: 0
    }

    // Cardiovascular risk based on EF, GLS, and wall motion
    const ef = parseFloat(results.ejectionFraction)
    const gls = Math.abs(parseFloat(results.globalLongitudinalStrain))
    const wallMotion = parseFloat(results.leftVentricularWallMotionAbnormalities)
    
    risks.cardiovascularRisk = Math.min(100, Math.max(0,
      (ef < 30 ? 40 : ef < 40 ? 25 : ef < 50 ? 15 : 0) +
      (gls < 12 ? 30 : gls < 16 ? 15 : 0) +
      (wallMotion > 0.7 ? 30 : wallMotion > 0.3 ? 15 : 0)
    ))

    // Heart failure risk based on volumes and function
    const lvedv = parseFloat(results.leftVentricularEndDiastolicVolume)
    const lvef = parseFloat(results.ejectionFraction)
    
    risks.heartFailureRisk = Math.min(100, Math.max(0,
      (lvedv > 200 ? 30 : lvedv > 150 ? 15 : 0) +
      (lvef < 30 ? 40 : lvef < 40 ? 25 : lvef < 50 ? 15 : 0) +
      (gls < 12 ? 20 : gls < 16 ? 10 : 0)
    ))

    // Valve disease risk based on various measurements
    const eaRatio = parseFloat(results.eaRatio)
    risks.valveDiseaseRisk = Math.min(100, Math.max(0,
      (eaRatio > 15 ? 35 : eaRatio > 10 ? 20 : 0) +
      (lvedv > 200 ? 25 : lvedv > 150 ? 15 : 0) +
      (lvef < 40 ? 25 : lvef < 50 ? 15 : 0)
    ))

    return risks
  }

  const risks = calculateRisks()

  // Clinical Assessment Component
  const ClinicalAssessment = ({ 
    measurements, 
    label, 
    type 
  }: { 
    measurements: any,
    label: string, 
    type: 'lvSize' | 'systolicFunction' | 'rvSize' | 'laSize' 
  }) => {
    const getMeasurementDetails = () => {
      switch(type) {
        case 'lvSize':
          return {
            primary: {
              name: 'LVIDd',
              value: results.leftVentricularInternalDimensionDiastolic,
              unit: 'cm',
              ranges: [
                { max: 5.2, status: 'normal' },
                { max: 5.9, status: 'mild' },
                { max: 999, status: 'severe' }
              ]
            },
            secondary: {
              name: 'LVEDV',
              value: results.leftVentricularEndDiastolicVolume,
              unit: 'mL',
              ranges: [
                { max: 150, status: 'normal' },
                { max: 200, status: 'mild' },
                { max: 999, status: 'severe' }
              ]
            }
          };
        
        case 'systolicFunction':
          return {
            primary: {
              name: 'EF',
              value: results.ejectionFraction,
              unit: '%',
              ranges: [
                { min: 50, max: 70, status: 'normal' },
                { min: 40, max: 49, status: 'mild' },
                { max: 39, status: 'severe' }
              ]
            },
            secondary: {
              name: 'GLS',
              value: results.globalLongitudinalStrain,
              unit: '%',
              ranges: [
                { min: -20, max: -16, status: 'normal' },
                { min: -15, max: -12, status: 'mild' },
                { max: -11, status: 'severe' }
              ]
            }
          };
        
        case 'rvSize':
          return {
            primary: {
              name: 'RVIDd',
              value: results.rightVentricularInternalDimensionDiastolic,
              unit: 'cm',
              ranges: [
                { max: 4.2, status: 'normal' },
                { max: 4.8, status: 'mild' },
                { max: 999, status: 'severe' }
              ]
            },
            secondary: {
              name: 'TAPSE',
              value: results.tricuspidAnnularPlaneSystolicExcursion,
              unit: 'cm',
              ranges: [
                { min: 1.7, status: 'normal' },
                { min: 1.5, max: 1.69, status: 'mild' },
                { max: 1.49, status: 'severe' }
              ]
            }
          };
        
        case 'laSize':
          return {
            primary: {
              name: 'LAVi',
              value: results.leftAtrialVolume,
              unit: 'mL',
              ranges: [
                { max: 34, status: 'normal' },
                { max: 41, status: 'mild' },
                { max: 999, status: 'severe' }
              ]
            },
            secondary: {
              name: 'LAD',
              value: results.leftAtrialInternalDimension,
              unit: 'cm',
              ranges: [
                { max: 4.0, status: 'normal' },
                { max: 4.5, status: 'mild' },
                { max: 999, status: 'severe' }
              ]
            }
          };
      }
    };

    const details = getMeasurementDetails();
    
    const getStatusColor = (value: number, ranges: any[]) => {
      for (const range of ranges) {
        if (range.min !== undefined && range.max !== undefined) {
          if (value >= range.min && value <= range.max) return range.status;
        } else if (range.min !== undefined) {
          if (value >= range.min) return range.status;
        } else if (range.max !== undefined) {
          if (value <= range.max) return range.status;
        }
      }
      return 'severe';
    };

    const getStatusStyles = (status: string) => {
      switch(status) {
        case 'normal':
          return 'bg-green-100 text-green-800 border-green-200';
        case 'mild':
          return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'severe':
          return 'bg-red-100 text-red-800 border-red-200';
      }
    };

    const renderMeasurement = (measurement: any) => {
      const value = parseFloat(measurement.value);
      const status = getStatusColor(value, measurement.ranges);
      const statusStyles = getStatusStyles(status);

      return (
        <div className="flex flex-col">
          <div className="text-sm font-medium text-gray-600 mb-1">
            {measurement.name}
          </div>
          <div className={`flex items-center justify-between p-3 rounded-lg border ${statusStyles}`}>
            <div className="text-lg font-bold">
              {value.toFixed(1)}{measurement.unit}
            </div>
            <div className="text-sm font-medium capitalize ml-3">
              {status}
            </div>
          </div>
          <div className="mt-1 text-xs text-gray-500">
            {measurement.ranges.map((range: any, index: number) => (
              <span key={index} className="mr-2">
                {range.min !== undefined && range.max !== undefined
                  ? `${range.min}-${range.max}`
                  : range.min !== undefined
                  ? `≥${range.min}`
                  : `≤${range.max}`}
                {measurement.unit} = {range.status}
              </span>
            ))}
          </div>
        </div>
      );
    };

    return (
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-gray-700 mb-4">
          {label}
          <span className="block text-xs text-gray-500 mt-1">
            Key measurements and their clinical significance
          </span>
        </h4>
        <div className="space-y-4">
          {renderMeasurement(details.primary)}
          {renderMeasurement(details.secondary)}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8 space-y-6">
      {/* Risk Assessment */}
      <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-lg p-8 border border-indigo-100">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center">
          <svg 
            className="w-8 h-8 mr-3 text-indigo-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          Risk Assessment
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RiskCard
            label="Cardiovascular Event Risk"
            value={risks.cardiovascularRisk}
          />
          <RiskCard
            label="Heart Failure Risk"
            value={risks.heartFailureRisk}
          />
          <RiskCard
            label="Valve Disease Risk"
            value={risks.valveDiseaseRisk}
          />
        </div>
      </div>

      {/* Left Ventricle Analysis */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Left Ventricle Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Ejection Fraction"
            value={results.ejectionFraction}
            unit="%"
          />
          <MetricCard
            label="Global Longitudinal Strain"
            value={results.globalLongitudinalStrain}
            unit="%"
          />
          <MetricCard
            label="End Diastolic Volume"
            value={results.leftVentricularEndDiastolicVolume}
            unit="mL"
          />
          <MetricCard
            label="End Systolic Volume"
            value={results.leftVentricularEndSystolicVolume}
            unit="mL"
          />
          <MetricCard
            label="Stroke Volume"
            value={results.leftVentricularStrokeVolume}
            unit="mL"
          />
          <MetricCard
            label="Interventricular Septum Thickness"
            value={results.interventricularSeptumThickness}
            unit="cm"
          />
          <MetricCard
            label="Posterior Wall Thickness"
            value={results.leftVentricularPosteriorWallThickness}
            unit="cm"
          />
          <MetricCard
            label="E/A Ratio"
            value={results.eaRatio}
            unit=""
          />
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ClinicalAssessment
            measurements={results.leftVentricularSize}
            label="Left Ventricle Size Assessment"
            type="lvSize"
          />
          <ClinicalAssessment
            measurements={results.leftVentricularSystolicFunction}
            label="Systolic Function Assessment"
            type="systolicFunction"
          />
        </div>
      </div>

      {/* Right Ventricle Analysis */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Right Ventricle Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="TAPSE"
            value={results.tricuspidAnnularPlaneSystolicExcursion}
            unit="cm"
          />
          <MetricCard
            label="RV Systolic Velocity"
            value={results.rightVentricularSystolicVelocity}
            unit="cm/s"
          />
          <MetricCard
            label="RV Internal Dimension"
            value={results.rightVentricularInternalDimensionDiastolic}
            unit="cm"
          />
          <MetricCard
            label="RV Systolic Function"
            value={results.rightVentricularSystolicFunction}
            unit=""
          />
        </div>

        <div className="mt-6">
          <ClinicalAssessment
            measurements={results.rightVentricularSize}
            label="Right Ventricle Assessment"
            type="rvSize"
          />
        </div>
      </div>

      {/* Atrial Analysis */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Atrial Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Left Atrial Volume"
            value={results.leftAtrialVolume}
            unit="mL"
          />
          <MetricCard
            label="Left Atrial Internal Dimension"
            value={results.leftAtrialInternalDimension}
            unit="cm"
          />
          <MetricCard
            label="Right Atrial Size"
            value={results.rightAtrialSize}
            unit=""
          />
          <MetricCard
            label="Right Atrial Dimension"
            value={results.rightAtrialDimension}
            unit="cm"
          />
        </div>

        <div className="mt-6">
          <ClinicalAssessment
            measurements={results.leftAtrialSize}
            label="Left Atrial Assessment"
            type="laSize"
          />
        </div>
      </div>

      {/* Pericardial Analysis */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pericardial Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Pericardial Effusion"
            value={(parseFloat(results.pericardialEffusion) * 100).toFixed(2)}
            unit="%"
          />
        </div>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">
            Effusion Assessment: {' '}
            <span className="font-medium">
              {parseFloat(results.pericardialEffusion) > 0.05 
                ? 'Significant effusion present' 
                : parseFloat(results.pericardialEffusion) > 0.01
                ? 'Mild effusion present'
                : 'No significant effusion'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface RiskCardProps {
  label: string
  value: number
}

function RiskCard({ label, value }: RiskCardProps) {
  const getColor = (value: number) => {
    if (value < 30) return 'bg-green-100 text-green-800'
    if (value < 70) return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }

  return (
    <div className="bg-white/80 backdrop-blur rounded-lg p-5 shadow-sm">
      <div className="text-base font-medium text-gray-700 mb-2">{label}</div>
      <div className="mt-2">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="h-3 rounded-full bg-indigo-600 transition-all duration-500"
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <div className={`mt-2 text-sm font-semibold ${getColor(value)} rounded-lg px-3 py-1 inline-block`}>
          {value}%
        </div>
      </div>
    </div>
  )
}

interface MetricCardProps {
  label: string
  value: string
  unit: string
}

function MetricCard({ label, value, unit }: MetricCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="mt-1 flex items-baseline">
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
        {unit && <div className="ml-1 text-sm text-gray-600">{unit}</div>}
      </div>
    </div>
  )
} 