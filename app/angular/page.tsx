import CodeBlock from '@/components/CodeBlock';

const angularCode = `
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  template: '',
})
export class ChatbotComponent implements OnInit, OnDestroy {
  private iframe: HTMLIFrameElement;

  ngOnInit() {
    this.iframe = document.createElement("iframe");
    
    const iframeStyles = (styleString: string) => {
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
    
    this.iframe.src = "http://localhost:3000/chatbot";
    this.iframe.classList.add('chat-frame');
    document.body.appendChild(this.iframe);
    
    window.addEventListener("message", this.handleMessage);
  }

  ngOnDestroy() {
    window.removeEventListener("message", this.handleMessage);
    document.body.removeChild(this.iframe);
  }

  private handleMessage = (e: MessageEvent) => {
    if(e.origin !== "http://localhost:3000") return;
    let dimensions = JSON.parse(e.data);
    this.iframe.width = dimensions.width;
    this.iframe.height = dimensions.height;
    this.iframe.contentWindow?.postMessage("779b4be2-dd20-4dc5-bfaf-207000c0a720", "http://localhost:3000/");
  }
}
`;

const angularUsageCode = `
<!-- Your app content -->
<app-chatbot></app-chatbot>
`;

export default function AngularIntegration() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Angular Integration</h1>
      <p className="mb-4">
        Create a new Angular component for the chatbot:
      </p>
      <CodeBlock code={angularCode} language="typescript" />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage:</h2>
      <p className="mb-4">
        Add this component to your main app.component.html:
      </p>
      <CodeBlock code={angularUsageCode} language="html" />
    </div>
  );
}