export default function HistoryPreview() {
  return (
    <section className="bg-green-50 px-6 py-16 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1 bg-gray-200 h-40 flex items-center justify-center" style={{ marginLeft: 100 }}>
        Chart Placeholder
      </div>
      <div className="flex-1"  style={{ marginLeft: 100 }}>
        <h3 className="text-xl font-semibold mb-4">History & Graphs</h3>
        <p>View past events and detailed analytics to track trends.</p>
      </div>
    </section>
  );
}
