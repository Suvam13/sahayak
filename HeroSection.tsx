import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-green-50 px-6 py-16 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1" style={{ marginLeft: 100 }}>
        <h2 className="text-3xl font-bold mb-4">Stay Safe. Stay Connected.</h2>
        <p className="mb-4">Real-time monitoring and alerts for your loved ones.</p>
        <Link href="/live_stats">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Live stats
          </button>
        </Link>
      </div>
      <div className="flex-1" style={{ marginRight: 100, marginLeft: 10}}>
        <div className="w-full h-90 w-300 rounded-md flex items-center justify-center">
          <Image 
            src="/hero1.png"
            alt="Sahayak Hero"
            width={600}
            height={800}
            className="object-contain w-full h-full"
          />
          <Image 
            src="/hero5.png"
            alt="Sahayak Hero"
            width={600}
            height={800}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}