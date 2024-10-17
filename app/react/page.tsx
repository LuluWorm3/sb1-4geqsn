import CodeBlock from '@/components/CodeBlock';

const reactCode = `
import React, { useEffect } from 'react';

const ChatbotComponent = () => {
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

  return null;
};

export default ChatbotComponent;
`;

export default function ReactIntegration() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">React Integration</h1>
      <p className="mb-4">
        To integrate the chatbot into a React application, create a new component:
      </p>
      <CodeBlock code={reactCode} language="jsx" />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage:</h2>
      <p className="mb-4">
        Import and use this component in your main App or layout component:
      </p>
      <CodeBlock
        code={`
import ChatbotComponent from './ChatbotComponent';

function App() {
  return (
    <div>
      {/* Your app content */}
      <ChatbotComponent />
    </div>
  );
}
        `}
        language="jsx"
      />
    </div>
  );
}