interface VideoPlayerProps {
  src: string
}

export function VideoPlayer({ src }: VideoPlayerProps) {
  if (!src) return null

  return (
    <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
      <video src={src} controls className="w-full h-full">
        Your browser does not support the video tag.
      </video>
    </div>
  )
} 