import Link from 'next/link';
import { ArrowRight, Code, Layout, Server } from 'lucide-react';

export default function Home() {
  const frameworks = [
    { name: 'HTML', icon: Code, href: '/html' },
    { name: 'React', icon: Layout, href: '/react' },
    { name: 'Next.js', icon: Server, href: '/nextjs' },
    { name: 'Vue.js', icon: Layout, href: '/vue' },
    { name: 'Angular', icon: Layout, href: '/angular' },
    { name: 'WordPress', icon: Layout, href: '/wordpress' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Chatbot Integration Guide</h1>
        <p className="text-xl text-center mb-12">
          Learn how to integrate our versatile chatbot into various platforms and frameworks
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frameworks.map((framework) => (
            <Link
              key={framework.name}
              href={framework.href}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <framework.icon className="w-8 h-8 text-blue-500 mr-4" />
                  <h2 className="text-2xl font-semibold">{framework.name}</h2>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}