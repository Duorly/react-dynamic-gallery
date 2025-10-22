import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import {initialCars} from "./data/car.ts";

function App() {
    return (
        <div className="bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 min-h-screen text-gray-100 font-sans antialiased selection:bg-cyan-500/30">
            <Header />
            <main className="max-w-7xl mx-auto px-4 relative">
                <Gallery initialData={initialCars} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
