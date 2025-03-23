import { AnalysisResults as AnalysisResultsType } from '../../types/recording'

interface Props {
  results: AnalysisResultsType
}

export function AnalysisResults({ results }: Props) {
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
            value={parseInt(results.cardiovascularRisk)}
          />
          <RiskCard
            label="Heart Failure Risk"
            value={parseInt(results.heartFailureRisk)}
          />
          <RiskCard
            label="Valve Disease Risk"
            value={parseInt(results.valveDiseaseRisk)}
          />
        </div>
      </div>

      {/* Basic Measurements */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Measurements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Ejection Fraction"
            value={results.ejectionFraction}
            unit="%"
          />
          <MetricCard
            label="End Systolic Volume"
            value={results.endSystolicVolume}
            unit="mL"
          />
          <MetricCard
            label="End Diastolic Volume"
            value={results.endDiastolicVolume}
            unit="mL"
          />
          <MetricCard
            label="Heart Rate"
            value={results.heartRate}
            unit="bpm"
          />
        </div>
      </div>

      {/* Cardiac Function */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cardiac Function</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Stroke Volume"
            value={results.strokeVolume}
            unit="mL"
          />
          <MetricCard
            label="Cardiac Output"
            value={results.cardiacOutput}
            unit="L/min"
          />
          <MetricCard
            label="Wall Motion Score"
            value={results.wallMotionScore}
            unit=""
          />
          <MetricCard
            label="Myocardial Mass"
            value={results.myocardialMass}
            unit="g"
          />
        </div>
      </div>

      {/* Chamber Measurements */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Chamber Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Left Atrial Volume"
            value={results.leftAtrialVolume}
            unit="mL/m²"
          />
          <MetricCard
            label="RV Function (TAPSE)"
            value={results.rightVentricularFunction}
            unit="mm"
          />
          <MetricCard
            label="E/A Ratio"
            value={results.eaRatio}
            unit=""
          />
          <MetricCard
            label="E/e' Ratio"
            value={results.eeRatio}
            unit=""
          />
        </div>
      </div>

      {/* Dynamic Measurements */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Dynamic Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <MetricCard
            label="Strain Rate"
            value={results.strainRate}
            unit="%"
          />
          <MetricCard
            label="Wall Motion Velocity"
            value={results.wallMotionVelocity}
            unit="cm/s"
          />
          <MetricCard
            label="Ventricular Synchrony"
            value={results.ventricularSynchrony}
            unit="ms"
          />
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