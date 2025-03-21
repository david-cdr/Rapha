function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="py-8 px-4 bg-white shadow-sm text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Welcome to My App</h1>
      </header>
      <main className="flex-1 px-4 py-8">
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started</h2>
          <p className="text-gray-600">This is a clean TypeScript React application ready for development.</p>
        </section>
      </main>
      <footer className="py-6 px-4 bg-white border-t border-gray-200 text-center">
        <p className="text-gray-600">Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App
