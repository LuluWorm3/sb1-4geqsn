import CodeBlock from '@/components/CodeBlock';

const wordpressCode = `
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

export default function WordPressIntegration() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">WordPress Integration</h1>
      <p className="mb-4">
        To add the chatbot to a WordPress site, follow these steps:
      </p>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>Go to the WordPress admin panel.</li>
        <li>Navigate to Appearance &gt; Theme Editor.</li>
        <li>Select your active theme and open the <code>header.php</code> file.</li>
        <li>Just before the closing <code>&lt;/head&gt;</code> tag, add the following code:</li>
      </ol>
      <CodeBlock code={wordpressCode} language="html" />
      <p className="mt-6">
        Alternatively, you can use a custom HTML block in your pages or posts to add the chatbot to specific areas of your WordPress site.
      </p>
    </div>
  );
}