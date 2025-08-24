function ResultsTable({ results }) {
  if (!results.length) return <p>No results yet.</p>;

  return (
    <table className="w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border">App</th>
          <th className="p-2 border">Price</th>
          <th className="p-2 border">Delivery</th>
          <th className="p-2 border">Link</th>
        </tr>
      </thead>
      <tbody>
        {results.map((r, i) => (
          <tr key={i} className="text-center">
            <td className="p-2 border">{r.app}</td>
            <td className="p-2 border">₹{r.price}</td>
            <td className="p-2 border">{r.delivery}</td>
            <td className="p-2 border">
              <a
                href={r.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Open
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultsTable;
