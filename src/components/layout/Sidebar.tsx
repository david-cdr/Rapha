import type { Recording } from '../../types/recording'
import { RecordingCard } from '../recording/RecordingCard'
import raphaLogo from '../../assets/brand/rapha-logo-white.png'

interface SidebarProps {
  recordings: Recording[]
  selectedId: string | null
  onSelect: (id: string) => void
  onLogoClick: () => void
}

export function Sidebar({ recordings, selectedId, onSelect, onLogoClick }: SidebarProps) {
  return (
    <div className="w-72 bg-slate-900 shadow-lg overflow-y-auto border-r border-slate-700">
      <div 
        className="py-8 px-8 border-b border-slate-700 cursor-pointer"
        onClick={onLogoClick}
      >
        <img src={raphaLogo} alt="Rapha" className="h-12" />
      </div>
      <div className="space-y-4 p-4">
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
  )
} 