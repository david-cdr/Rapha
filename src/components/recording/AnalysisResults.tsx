import type { AnalysisResults as AnalysisResultsType } from '../../types/recording'

interface AnalysisResultsProps {
  results: AnalysisResultsType
}

export function AnalysisResults({ results }: AnalysisResultsProps) {
  const metrics = [
    { label: 'Ejection Fraction', value: results.ejectionFraction },
    { label: 'End Systolic Volume', value: results.endSystolicVolume },
    { label: 'End Diastolic Volume', value: results.endDiastolicVolume },
    { label: 'Heart Rate', value: results.heartRate },
  ]

  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 gap-6">
        {metrics.map(({ label, value }) => (
          <div key={label} className="bg-white p-6 rounded-xl shadow-lg">
            <p className="text-base text-gray-500">{label}</p>
            <p className="text-4xl font-semibold text-indigo-600 mt-2">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 