import type { Recording } from '../../types/recording'
import { RecordingCard } from '../recording/RecordingCard'
import raphaLogo from '../../assets/brand/rapha-logo-white.png'

interface SidebarProps {
  recordings: Recording[]
  selectedId: string | null
  onSelect: (id: string) => void
  onLogoClick: () => void
  onAddRecording: () => void
}

export function Sidebar({ recordings, selectedId, onSelect, onLogoClick, onAddRecording }: SidebarProps) {
  return (
    <div className="w-72 bg-slate-900 shadow-lg overflow-y-auto border-r border-slate-700">
      <div 
        className="py-8 px-8 border-b border-slate-700 cursor-pointer"
        onClick={onLogoClick}
      >
        <img src={raphaLogo} alt="Rapha" className="h-12" />
      </div>
      <div className="p-4">
        <button
          onClick={onAddRecording}
          className="w-full mb-4 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Recording
        </button>
        <div className="space-y-4">
          {recordings.map((recording) => (
            <RecordingCard
              key={recording.id}
              recording={recording}
              isSelected={selectedId === recording.id}
              onClick={() => onSelect(recording.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 