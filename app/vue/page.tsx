import CodeBlock from '@/components/CodeBlock';

const vueCode = `
<template>
  <!-- The chatbot will be injected into the DOM, so no template is needed -->
</template>

<script>
export default {
  name: 'ChatbotComponent',
  mounted() {
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

    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener("message", handleMessage);
      document.body.removeChild(iframe);
    });
  }
}
</script>
`;

const vueUsageCode = `
<template>
  <div id="app">
    <!-- Your app content -->
    <ChatbotComponent />
  </div>
</template>

<script>
import ChatbotComponent from './components/ChatbotComponent.vue'

export default {
  name: 'App',
  components: {
    ChatbotComponent
  }
}
</script>
`;

export default function VueIntegration() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Vue.js Integration</h1>
      <p className="mb-4">
        Create a new Vue component for the chatbot:
      </p>
      <CodeBlock code={vueCode} language="vue" />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage:</h2>
      <p className="mb-4">
        Add this component to your main App.vue file:
      </p>
      <CodeBlock code={vueUsageCode} language="vue" />
    </div>
  );
}