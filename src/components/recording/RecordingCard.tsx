import type { Recording } from '../../types/recording'
import { RecordingThumbnail } from './RecordingThumbnail'

interface RecordingCardProps {
  recording: Recording
  isSelected: boolean
  onClick: () => void
}

export function RecordingCard({ recording, isSelected, onClick }: RecordingCardProps) {
  return (
    <div
      className={`cursor-pointer transition-all rounded-lg ${
        isSelected
          ? 'ring-2 ring-white shadow-inner shadow-slate-950'
          : 'hover:bg-slate-800/50'
      }`}
      onClick={onClick}
    >
      <div className="w-full rounded-lg shadow-sm overflow-hidden">
        <RecordingThumbnail />
      </div>
      <div className="mt-2 space-y-1 p-2">
        <p className="text-xs font-medium text-white">Patient #{recording.patientId}</p>
        <p className="text-xs text-slate-400">
          Age: {65 + Number(recording.id)} • {recording.date}
        </p>
      </div>
    </div>
  )
} 