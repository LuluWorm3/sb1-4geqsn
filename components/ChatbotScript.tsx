'use client';

import { useEffect } from 'react';

const ChatbotScript = () => {
  useEffect(() => {
    const iframe = document.createElement("iframe");
    
    const iframeStyles = (styleString: string) => {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    }
    
    iframeStyles(`
      .chat-frame {
        position: fixed;
        bottom: 50px;
        right: 50px;
        border: none;
        width: 350px;
        height: 500px;
        transition: all 0.3s ease-in-out;
        opacity: 0;
        transform: translateY(20px);
      }
      .chat-frame.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `);
    
    iframe.src = "https://example-chatbot-url.com/chatbot";
    iframe.classList.add('chat-frame');
    document.body.appendChild(iframe);

    // Make iframe visible after a short delay
    setTimeout(() => {
      iframe.classList.add('visible');
    }, 100);
    
    const handleMessage = (e: MessageEvent) => {
      if(e.origin !== "https://example-chatbot-url.com") return;
      try {
        const dimensions = JSON.parse(e.data);
        if (dimensions.width && dimensions.height) {
          iframe.style.width = `${dimensions.width}px`;
          iframe.style.height = `${dimensions.height}px`;
        }
        iframe.contentWindow?.postMessage("779b4be2-dd20-4dc5-bfaf-207000c0a720", "https://example-chatbot-url.com");
      } catch (error) {
        console.error("Error processing message:", error);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      document.body.removeChild(iframe);
    };
  }, []);

  return null;
};

export default ChatbotScript;