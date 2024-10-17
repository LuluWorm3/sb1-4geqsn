import CodeBlock from '@/components/CodeBlock';

const customizationCode = `
iframeStyles(\`
  .chat-frame {
    position: fixed;
    bottom: 20px;  // Change position
    right: 20px;   // Change position
    border: none;
    border-radius: 10px;  // Add rounded corners
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);  // Add shadow
    width: 350px;
    height: 500px;
    animation: slideIn 0.5s ease-out;
  }

  @keyframes slideIn {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }
\`);
`;

export default function Customization() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Customization</h1>
      <p className="mb-4">
        You can customize the appearance and behavior of the chatbot by modifying the CSS and JavaScript code. Here's an example of how to change the chatbot's position, size, and add animation:
      </p>
      <CodeBlock code={customizationCode} language="javascript" />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Customization Options:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Change position (bottom, right)</li>
        <li>Adjust size (width, height)</li>
        <li>Add rounded corners (border-radius)</li>
        <li>Apply box shadow for depth</li>
        <li>Implement animations (e.g., slide-in effect)</li>
      </ul>
      <p className="mt-6">
        Remember to test your customizations across different devices and screen sizes to ensure a consistent user experience.
      </p>
    </div>
  );
}