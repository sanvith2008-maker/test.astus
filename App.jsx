import { useState } from "react";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchItem = async () => {
    if (!query) return;
    const res = await fetch(`http://localhost:5000/search?item=${encodeURIComponent(query)}`);
    const data = await res.json();
    setResults(data);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🛒 Price Comparison</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="Search product..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={searchItem}
        >
          Search
        </button>
      </div>
      <ResultsTable results={results} />
    </div>
  );
}

export default App;
