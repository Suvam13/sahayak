export default function Footer() {
  return (
    <footer className="text-center flex items-center justify-center h-24" style={{ backgroundColor: "#8BF3AF" }}>
      <div style={{ marginLeft: 100, marginRight: 100, width: "100%" }}>
        © {new Date().getFullYear()} Sahayak - All rights reserved.
      </div>
    </footer>
  );
}