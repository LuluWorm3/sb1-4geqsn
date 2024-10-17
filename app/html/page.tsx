import CodeBlock from '@/components/CodeBlock';

const htmlCode = `
<script>
  document.addEventListener('DOMContentLoaded', function() {
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
    
    window.addEventListener("message", (e) => {
      if(e.origin !== "http://localhost:3000") return;
      let dimensions = JSON.parse(e.data);
      iframe.width = dimensions.width;
      iframe.height = dimensions.height;
      iframe.contentWindow.postMessage("779b4be2-dd20-4dc5-bfaf-207000c0a720", "http://localhost:3000/");
    });
  });
</script>
`;

export default function HTMLIntegration() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">HTML Integration</h1>
      <p className="mb-4">
        To integrate the chatbot into a basic HTML website, add the following script to your HTML file, just before the closing <code>&lt;/head&gt;</code> tag:
      </p>
      <CodeBlock code={htmlCode} language="html" />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Key Points:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>The script creates an iframe to load the chatbot.</li>
        <li>It sets up styles for positioning the chatbot on the page.</li>
        <li>The script handles messaging between the parent window and the chatbot iframe.</li>
      </ul>
    </div>
  );
}