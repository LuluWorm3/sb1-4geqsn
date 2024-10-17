import CodeBlock from '@/components/CodeBlock';

const nextjsCode = `
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const iframe = document.createElement("iframe");
    
    const iframeStyles = (styleString) => {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    }
    
    iframeStyles(\`
      .chat-frame {
        position: fixed;
        bottom: 50px;
        right: 50px;
        border: none;
      }
    \`);
    
    iframe.src = "http://localhost:3000/chatbot";
    iframe.classList.add('chat-frame');
    document.body.appendChild(iframe);
    
    const handleMessage = (e) => {
      if(e.origin !== "http://localhost:3000") return;
      let dimensions = JSON.parse(e.data);
      iframe.width = dimensions.width;
      iframe.height = dimensions.height;
      iframe.contentWindow.postMessage("779b4be2-dd20-4dc5-bfaf-207000c0a720", "http://localhost:3000/");
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      document.body.removeChild(iframe);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
`;

const corsConfig = `
module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'http://localhost:3000' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ];
  },
};
`;

export default function NextjsIntegration() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Next.js Integration</h1>
      <p className="mb-4">
        For Next.js, create a custom <code>_app.js</code> or <code>_app.tsx</code> file in the <code>pages</code> directory:
      </p>
      <CodeBlock code={nextjsCode} language="jsx" />
      <h2 className="text-2xl font-semibold mt-8 mb-4">CORS Configuration:</h2>
      <p className="mb-4">
        To address CORS issues, update your Next.js config (<code>next.config.js</code>):
      </p>
      <CodeBlock code={corsConfig} language="javascript" />
    </div>
  );
}