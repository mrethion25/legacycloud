
import { Gamepad, Mail, MapPin, Phone, Github, Twitter, Twitch, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Gamepad className="h-6 w-6 text-game" />
              <span className="text-xl font-bold text-white">Legacy cloud</span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium game server hosting with high performance hardware, global network, and 24/7 support for gamers worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-game transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-game transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-game transition-colors">
                <Twitch className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-game transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Discord links</h3>
            <ul className="space-y-4">
              <li><a href="https://discord.gg/RZr8nKEReq" className="text-gray-400 hover:text-white transition-colors">discord 1</a></li>
              <li><a href="https://discord.gg/RZr8nKEReq" className="text-gray-400 hover:text-white transition-colors">discord 2</a></li>
              <li><a href="https://discord.gg/RZr8nKEReq" className="text-gray-400 hover:text-white transition-colors">discord 3</a></li>
              <li><a href="https://discord.gg/RZr8nKEReq" className="text-gray-400 hover:text-white transition-colors">discord 4</a></li>
              <li><a href="https://discord.gg/RZr8nKEReq" className="text-gray-400 hover:text-white transition-colors">discord 5</a></li>
              <li><a href="https://discord.gg/jH7HpVQbH3" className="text-gray-400 hover:text-white transition-colors">click me</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="https://blinime.vercel.app/home" className="text-gray-400 hover:text-white transition-colors">Anime website</a></li>
              <li><a href="https://blisstune.netlify.app/" className="text-gray-400 hover:text-white transition-colors">radio website</a></li>
              <li><a href="https://arimadev.vercel.app/" className="text-gray-400 hover:text-white transition-colors">portfolio of dev</a></li>
              <li><a href="https://bliglob.vercel.app/" className="text-gray-400 hover:text-white transition-colors">global chatapp</a></li>
              <li><a href="https://discord.gg/jH7HpVQbH3" className="text-gray-400 hover:text-white transition-colors">bliss cafe</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-game mr-3 mt-0.5" />
                <span className="text-gray-400">N/A</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-game mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-game mr-3" />
                <span className="text-gray-400">mailto:gfxethion@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} GameHostHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
