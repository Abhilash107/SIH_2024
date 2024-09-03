import { useEffect } from 'react';

export function Chatbot() {

    useEffect(() => {
        const script = document.createElement('script');
        script.id = 'messenger-widget-b';
        script.src = 'https://cdn.botpenguin.com/website-bot.js';
        script.defer = true;
        script.text = '66cd8b596f3d13030b924fe2,6610ae11eef8b629a228ae36';
        document.head.appendChild(script);
    
        return () => {
          document.head.removeChild(script);
        };
      }, []);

}
