import './App.css';

function App() {
  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen flex items-center justify-center p-6 text-center">
      <div className="bg-white dark:bg-gray-900 p-8 sm:p-12 rounded-2xl shadow-2xl max-w-lg w-full transform hover:scale-105 transition-transform duration-500 ease-in-out border border-gray-200 dark:border-gray-800">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter text-gray-800 dark:text-white">
            This my stuff
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400">
            A new collection is being curated. <br /> Something wonderful is coming soon.
          </p>
          <div className="pt-4">
            <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 animate-loading-bar"
                   style={{ backgroundSize: '200% 100%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
