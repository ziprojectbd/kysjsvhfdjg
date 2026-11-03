import Navbar from './components/Navbar';
import Bgd88AppStore from './components/Bgd88AppStore';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-slate-200 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dxilo3mlg/image/upload/v1793733700/396619247_15580c6c-8f69-4221-a536-41804820b956_b9gwwj.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 z-10 bg-black/60 pointer-events-none" />
      <div className="relative z-20">
        <Navbar />
        <Bgd88AppStore />
      </div>
    </div>
  );
}
