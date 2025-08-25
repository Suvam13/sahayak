import Link from "next/link";

export default function StatsSection() {
  return (
    <section className="bg-green-200 py-10 text-center">
      <h3 className="text-xl font-semibold mb-4">Live location</h3>
      <Link href="/location">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          View Location
        </button>
      </Link>
    </section>
  );
}