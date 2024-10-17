import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <MessageCircle className="w-8 h-8 text-blue-500 mr-2" />
            <span className="text-xl font-semibold">Chatbot Guide</span>
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
            <Link href="/customization" className="text-gray-600 hover:text-blue-500">Customization</Link>
            <Link href="/advanced" className="text-gray-600 hover:text-blue-500">Advanced</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;