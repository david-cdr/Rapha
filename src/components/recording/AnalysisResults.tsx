import { AnalysisResults as AnalysisResultsType } from '../../types/recording'

interface Props {
  results: AnalysisResultsType
}

export function AnalysisResults({ results }: Props) {
  // Dashboard Risk Assessment Component
  const DashboardRiskAssessment = () => {
    const ef = parseFloat(results.ejectionFraction);
    const gls = parseFloat(results.globalLongitudinalStrain);

    const getEFStatus = (value: number) => {
      if (value >= 50) return { status: 'Normal', color: 'bg-green-100 text-green-800 border-green-200', severity: 1 };
      if (value >= 40) return { status: 'Mildly Reduced', color: 'bg-yellow-100 text-yellow-800 border-yellow-200', severity: 2 };
      return { status: 'Reduced', color: 'bg-red-100 text-red-800 border-red-200', severity: 3 };
    };

    const getGLSStatus = (value: number) => {
      if (Math.abs(value) >= 16) return { status: 'Normal', color: 'bg-green-100 text-green-800 border-green-200', severity: 1 };
      if (Math.abs(value) >= 12) return { status: 'Mildly Reduced', color: 'bg-yellow-100 text-yellow-800 border-yellow-200', severity: 2 };
      return { status: 'Reduced', color: 'bg-red-100 text-red-800 border-red-200', severity: 3 };
    };

    const efAssessment = getEFStatus(ef);
    const glsAssessment = getGLSStatus(gls);
    const overallSeverity = Math.max(efAssessment.severity, glsAssessment.severity);

    const getRiskLevel = () => {
      switch(overallSeverity) {
        case 1: return { text: 'Low Risk', icon: '✓', color: 'text-green-500' };
        case 2: return { text: 'Moderate Risk', icon: '!', color: 'text-yellow-500' };
        case 3: return { text: 'High Risk', icon: '⚠', color: 'text-red-500' };
        default: return { text: 'High Risk', icon: '⚠', color: 'text-red-500' }; // Safest default
      }
    };

    const riskLevel = getRiskLevel();

    return (
      <div className="flex items-center space-x-8">
        {/* Large Risk Indicator */}
        <div className={`flex-1 flex items-center ${riskLevel.color}`}>
          <div className="text-5xl font-bold mr-4">{riskLevel.icon}</div>
          <div>
            <div className="text-2xl font-bold">{riskLevel.text}</div>
            <div className="text-sm text-gray-500">Systolic Function Status</div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${efAssessment.color} flex flex-col items-center justify-center`}>
            <div className="text-3xl font-bold">{ef.toFixed(0)}%</div>
            <div className="text-sm font-medium mt-1">EF</div>
          </div>
          <div className={`p-4 rounded-lg ${glsAssessment.color} flex flex-col items-center justify-center`}>
            <div className="text-3xl font-bold">{gls.toFixed(1)}%</div>
            <div className="text-sm font-medium mt-1">GLS</div>
          </div>
        </div>

        {/* Risk Progress */}
        <div className="flex-1">
          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${
                overallSeverity === 1 
                  ? 'bg-green-500 w-1/3' 
                  : overallSeverity === 2 
                  ? 'bg-yellow-500 w-2/3' 
                  : 'bg-red-500 w-full'
              }`}
            />
          </div>
          <div className="mt-2 text-sm text-gray-500 flex justify-between">
            <span>Low</span>
            <span>Moderate</span>
            <span>High</span>
          </div>
        </div>
      </div>
    );
  };

  // Systolic Function Assessment Component
  const SystolicFunctionAssessment = () => {
    const ef = parseFloat(results.ejectionFraction);
    const gls = parseFloat(results.globalLongitudinalStrain);

    const getEFStatus = (value: number) => {
      if (value >= 50) return { status: 'Normal', color: 'bg-green-100 text-green-800 border-green-200', severity: 1 };
      if (value >= 40) return { status: 'Mildly Reduced', color: 'bg-yellow-100 text-yellow-800 border-yellow-200', severity: 2 };
      return { status: 'Reduced', color: 'bg-red-100 text-red-800 border-red-200', severity: 3 };
    };

    const getGLSStatus = (value: number) => {
      if (Math.abs(value) >= 16) return { status: 'Normal', color: 'bg-green-100 text-green-800 border-green-200', severity: 1 };
      if (Math.abs(value) >= 12) return { status: 'Mildly Reduced', color: 'bg-yellow-100 text-yellow-800 border-yellow-200', severity: 2 };
      return { status: 'Reduced', color: 'bg-red-100 text-red-800 border-red-200', severity: 3 };
    };

    const efAssessment = getEFStatus(ef);
    const glsAssessment = getGLSStatus(gls);
    const overallSeverity = Math.max(efAssessment.severity, glsAssessment.severity);

    return (
      <div className="space-y-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-base font-medium text-gray-900 mb-4">Systolic Function Risk Profile</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-600">Overall Status</div>
                <div className={`mt-1 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  overallSeverity === 1
                    ? 'bg-green-100 text-green-800'
                    : overallSeverity === 2
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {overallSeverity === 1
                    ? 'Low Risk'
                    : overallSeverity === 2
                    ? 'Moderate Risk'
                    : 'High Risk'}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        overallSeverity === 1
                          ? 'bg-green-500 w-1/3'
                          : overallSeverity === 2
                          ? 'bg-yellow-500 w-2/3'
                          : 'bg-red-500 w-full'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-sm font-medium text-gray-600">EF Status</div>
                <div className={`mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${efAssessment.color}`}>
                  {efAssessment.status}
                </div>
                <div className="mt-2 text-2xl font-bold text-gray-900">{ef.toFixed(1)}%</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-sm font-medium text-gray-600">GLS Status</div>
                <div className={`mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${glsAssessment.color}`}>
                  {glsAssessment.status}
                </div>
                <div className="mt-2 text-2xl font-bold text-gray-900">{gls.toFixed(1)}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8 space-y-6">
      {/* Risk Assessment */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Assessment</h3>
        <DashboardRiskAssessment />
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

        <div className="mt-6">
          <SystolicFunctionAssessment />
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
      </div>
    </div>
  );
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