import { useState } from 'react'

export function EmailSignup() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In the future, this would send the email to a backend
    setEmail('')
  }

  return (
    <div className="text-center max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Stay Updated on Our Launch
      </h2>
      <p className="text-gray-500 mb-8">
        Be the first to know when our AI-powered echocardiogram analysis platform becomes available.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Notify Me
        </button>
      </form>
    </div>
  )
} 