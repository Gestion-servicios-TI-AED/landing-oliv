import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ManualContent } from "./components/ManualContent";

function App() {
  return (
    <div className="bg-[#fcfcfb] min-h-screen font-sans selection:bg-[#1a7d7a] selection:text-white">
      <Navbar />

      <main>
        <ManualContent />
      </main>

      <Footer />
    </div>
  );
}

export default App;
