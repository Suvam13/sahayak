export default function HistoryPage() {
  const dummyData = [
    { date: "2025-08-10", event: "Fall detected", status: "Resolved" },
    { date: "2025-08-12", event: "Low battery alert", status: "Pending" },
    { date: "2025-08-14", event: "Manual SOS", status: "Resolved" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">History</h1>
      <table className="w-full border border-gray-300">
        <thead className="bg-green-200">
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Event</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{item.date}</td>
              <td className="border p-2">{item.event}</td>
              <td className="border p-2">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
