import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const faqData = [
  {
    keywords: ['hello', 'hi', 'hey', 'hallo', 'guten tag'],
    response: 'Hello! Welcome to xixasoft. How can I help you today? You can ask me about our services like JTL Shop, Shopware, Laravel development, or Google Ads.'
  },
  {
    keywords: ['jtl', 'shop', 'shopware', 'theme', 'template'],
    response: 'We specialize in JTL Shop and Shopware theme development! We create custom, responsive themes that match your brand identity. Our themes are optimized for performance and SEO. Would you like to discuss your project?'
  },
  {
    keywords: ['wawi', 'warenwirtschaft', 'inventory', 'erp'],
    response: 'JTL WAWI is our expertise! We help with setup, configuration, customization, and optimization of your JTL WAWI system. We can also integrate it with your online shop and other business systems.'
  },
  {
    keywords: ['google ads', 'advertising', 'ppc', 'adwords', 'campaign'],
    response: 'We offer professional Google Ads management services. This includes campaign setup, keyword research, ad copywriting, bid optimization, and performance tracking to maximize your ROI.'
  },
  {
    keywords: ['laravel', 'php', 'web app', 'application', 'custom', 'development'],
    response: 'We build custom web applications using Laravel PHP framework. From CRM systems to e-commerce platforms, we can develop tailored solutions for your business needs.'
  },
  {
    keywords: ['price', 'cost', 'quote', 'budget', 'preis', 'kosten'],
    response: 'Pricing depends on your specific requirements. Please contact us through our contact page or email us for a free consultation and personalized quote for your project.'
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'kontakt'],
    response: 'You can reach us through our contact page at /contact. We\'ll get back to you within 24 hours. We\'re always happy to discuss your project requirements!'
  },
  {
    keywords: ['portfolio', 'work', 'projects', 'examples', 'referenzen'],
    response: 'Check out our portfolio page to see our previous work! We\'ve completed projects including e-commerce stores, hotel management systems, clinic management software, and more.'
  },
  {
    keywords: ['team', 'who', 'company', 'about'],
    response: 'xixasoft is a professional IT services company specializing in e-commerce solutions, custom web development, and digital marketing. Visit our About or Team page to learn more about us!'
  },
  {
    keywords: ['service', 'offer', 'what', 'help', 'dienst'],
    response: 'Our main services include: 1) JTL Shop & Shopware Development, 2) JTL WAWI Management, 3) Google Ads Management, 4) Laravel Custom Web Applications. How can we assist you?'
  },
  {
    keywords: ['time', 'long', 'duration', 'deadline', 'zeit'],
    response: 'Project timelines vary based on complexity. A simple theme might take 2-4 weeks, while custom applications can take 2-3 months. Contact us for an accurate timeline for your specific project.'
  },
  {
    keywords: ['support', 'maintenance', 'help', 'issue', 'problem'],
    response: 'We offer ongoing support and maintenance for all our projects. Whether you need bug fixes, updates, or new features, we\'re here to help keep your systems running smoothly.'
  }
];

const defaultResponse = "I'm not sure I understand. You can ask me about our services like JTL Shop, Shopware, Laravel development, Google Ads, pricing, or how to contact us. Or visit our contact page to speak with our team directly!";

const findResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  for (const faq of faqData) {
    if (faq.keywords.some(keyword => lowerInput.includes(keyword))) {
      return faq.response;
    }
  }
  
  return defaultResponse;
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! I\'m the xixasoft assistant. How can I help you today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110',
          isOpen && 'hidden'
        )}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          'fixed bottom-6 right-6 z-50 w-[350px] max-w-[calc(100vw-48px)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col transition-all duration-300',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        )}
        style={{ height: '500px', maxHeight: 'calc(100vh - 100px)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-primary rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-primary-foreground">xixasoft Assistant</h3>
              <p className="text-xs text-primary-foreground/70">Online • Ready to help</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex gap-2',
                message.isBot ? 'justify-start' : 'justify-end'
              )}
            >
              {message.isBot && (
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
              )}
              <div
                className={cn(
                  'max-w-[80%] px-4 py-2 rounded-2xl text-sm',
                  message.isBot
                    ? 'bg-muted text-foreground rounded-tl-none'
                    : 'bg-primary text-primary-foreground rounded-tr-none'
                )}
              >
                {message.text}
              </div>
              {!message.isBot && (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-2 justify-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-muted px-4 py-2 rounded-2xl rounded-tl-none">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              size="icon"
              disabled={!inputValue.trim() || isTyping}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
