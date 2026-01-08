export default function VisitorList({ visitors, deleteVisitor }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Visitor List</h2>

      {visitors.length === 0 ? (
        <p className="text-gray-500">No visitors added yet.</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Purpose</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visitor, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{visitor.name}</td>
                <td className="border p-2">{visitor.purpose}</td>
                <td className="border p-2">{visitor.date}</td>
                <td className="border p-2">
                  <button
                    onClick={() => deleteVisitor(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
