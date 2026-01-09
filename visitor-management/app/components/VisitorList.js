// import QRCode from "qrcode.react";
import { QRCodeCanvas } from "qrcode.react";


export default function VisitorList({ visitors, deleteVisitor }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Visitor List</h2>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Purpose</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">QR Code</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {visitors.map((v) => (
            <tr key={v._id} className="text-center">
              <td className="border p-2">{v.name}</td>
              <td className="border p-2">{v.purpose}</td>
              <td className="border p-2">{v.date}</td>

              <td className="border p-2 flex justify-center">
                <QRCodeCanvas value={v._id} size={80} />
              </td>

              <td className="border p-2">
                <button
                  onClick={() => deleteVisitor(v._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
