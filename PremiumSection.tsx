export default function PremiumSection() {
  return (
    <section className="bg-green-200 px-6 py-16 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1" style={{ marginLeft: 100 }}>
        <h3 className="text-2xl font-bold mb-4">Get Premium Now</h3>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Upgrade
        </button>
      </div>
      <div className="flex-1 bg-gray-200 h-40 flex items-center justify-center" style={{ marginRight: 100 }}>
        Image Placeholder
      </div>
    </section>
  );
}
