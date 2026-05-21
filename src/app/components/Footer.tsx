import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/e70c42e76d8f373f7319be198453a0d6dc47133e.webp";
import partnerLogo1 from "@/assets/fa520baa441a756a29cd264f5f51fa4873d109aa.webp";
import partnerLogo2 from "@/assets/8bb56ae87febc8e3ae49068dcfc66b68b0c4b35a.webp";

export const Footer = () => {
  return (
    <footer className="bg-[#125755] text-[#f5f5f0] pt-20 pb-10 border-t border-[#1a7d7a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="OLIV Cartagena" className="h-12 w-auto mb-6" />
            <p className="font-sans font-light text-sm opacity-80 leading-relaxed max-w-xs mb-8">
              Un proyecto que redefine el lujo a través de la naturaleza. Espacios que inspiran, conectan y perduran.
            </p>
            <div className="flex items-center space-x-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img src={partnerLogo1} alt="Partner 1" className="h-8 w-auto" />
              <img src={partnerLogo2} alt="Partner 2" className="h-8 w-auto" />
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-serif mb-2 text-[#ef8000]">Contacto</h3>
            <div className="flex items-start justify-center md:justify-start space-x-3 opacity-80 font-sans font-light text-sm w-full">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span>Zona Norte, Km 14 Vía al Mar<br />Cartagena de Indias, Colombia</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3 opacity-80 font-sans font-light text-sm w-full">
              <Phone size={18} />
              <span>+57 300 123 4567</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3 opacity-80 font-sans font-light text-sm w-full">
              <Mail size={18} />
              <span>info@olivcartagena.com</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-serif mb-4 text-[#ef8000]">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-6 w-full">
              <a href="#" className="hover:text-[#ef8000] transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-[#ef8000] transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-[#ef8000] transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-sans font-light opacity-60 text-center md:text-left">
          <p>© {new Date().getFullYear()} OLIV Cartagena. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 justify-center">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
