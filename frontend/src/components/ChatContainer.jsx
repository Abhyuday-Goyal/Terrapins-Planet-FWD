import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Bot, 
  User, 
  Loader, 
  Image as ImageIcon,
  Paperclip,
  Clock,
  CheckCircle2,
  XCircle,
  Sparkles,
  MessageSquare 
} from 'lucide-react';

const MessageBubble = React.memo(({ message }) => {
  const isBot = message.type === 'bot';
  const statusIcon = {
    sent: <CheckCircle2 size={14} className="text-green-400" />,
    delivered: <CheckCircle2 size={14} className="text-blue-400" />,
    error: <XCircle size={14} className="text-red-400" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      className={`flex w-full mb-4 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`flex items-start max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center 
                     ${isBot 
                       ? 'bg-gradient-to-br from-green-500 to-green-700 mr-2'
                       : 'bg-gradient-to-br from-green-600 to-green-800 ml-2'
                     } shadow-lg`}
        >
          {isBot ? (
            <Bot size={24} className="text-white" />
          ) : (
            <User size={24} className="text-white" />
          )}
        </motion.div>

        <div className={`relative group`}>
          <div className={`p-4 rounded-xl ${
            isBot
              ? 'bg-green-800/40 text-white border border-green-700/30'
              : 'bg-gradient-to-br from-green-700/40 to-green-600/40 text-white border border-green-600/30'
            } shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow duration-200`}
          >
            {message.image ? (
              <div className="space-y-2">
                <img
                  src={message.image}
                  alt="Uploaded"
                  className="w-60 h-auto rounded-lg object-cover"
                />
                <p className="text-sm text-green-300">{message.content}</p>
              </div>
            ) : (
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {message.content}
              </p>
            )}

            <div className={`absolute bottom-0 ${isBot ? 'left-0' : 'right-0'} 
                          transform translate-y-full pt-1 flex items-center gap-1 
                          text-xs text-green-300`}>
              <Clock size={12} />
              <span>{message.timestamp}</span>
              {!isBot && statusIcon[message.status]}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

MessageBubble.displayName = 'MessageBubble';

const TypingIndicator = React.memo(() => (
  <div className="flex items-center space-x-2 text-green-300 mb-4">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center space-x-2"
    >
      <div className="flex space-x-1">
        {[1, 2, 3].map((dot) => (
          <motion.div
            key={dot}
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: dot * 0.1,
            }}
          />
        ))}
      </div>
      <span className="text-sm">Assistant is typing...</span>
    </motion.div>
  </div>
));

TypingIndicator.displayName = 'TypingIndicator';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm your corporate assistant. How can I help you today?",
      timestamp: new Date().toLocaleTimeString(),
      status: 'delivered'
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef(null);
  const shouldScrollRef = useRef(true);
  const fileInputRef = useRef(null);

  const handleInputChange = useMemo(() => (
    (e) => {
      e.preventDefault();
      setInputMessage(e.target.value);
    }
  ), []);

  const MessagesList = useMemo(() => {
    return messages.map(message => (
      <MessageBubble key={message.id} message={message} />
    ));
  }, [messages]);

  const scrollToBottom = () => {
    if (shouldScrollRef.current && messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      requestAnimationFrame(() => {
        container.scrollTop = container.scrollHeight;
      });
    }
  };

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const isScrolledToBottom = 
        container.scrollHeight - container.scrollTop <= container.clientHeight + 100;
      shouldScrollRef.current = isScrolledToBottom;
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000 + Math.random() * 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage.trim(),
      timestamp: new Date().toLocaleTimeString(),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    simulateTyping();

    try {
      const response = await fetch('http://localhost:8000/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMessage.content }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();

      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          type: 'bot',
          content: data.message || 'Unexpected response',
          timestamp: new Date().toLocaleTimeString(),
          status: 'delivered'
        },
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          type: 'bot',
          content: "I apologize, but I'm having trouble connecting. Please try again.",
          timestamp: new Date().toLocaleTimeString(),
          status: 'error'
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: 'Image uploaded',
      image: URL.createObjectURL(file),
      timestamp: new Date().toLocaleTimeString(),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    simulateTyping();

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:8000/upload-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to upload image');
      const data = await response.json();

      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          type: 'bot',
          content: data.message || 'Image processed successfully.',
          timestamp: new Date().toLocaleTimeString(),
          status: 'delivered'
        },
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          type: 'bot',
          content: 'Failed to process the image. Please try again.',
          timestamp: new Date().toLocaleTimeString(),
          status: 'error'
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-green-900 to-green-950">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="p-6 backdrop-blur-md bg-green-800/20 border-b border-green-700/30"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-green-500 to-green-700 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">
              Corporate Assistant
            </h2>
            <p className="text-green-300 text-sm">AI-Powered Support</p>
          </div>
        </div>
      </motion.div>

      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-green-600/30 scrollbar-track-transparent"
        style={{ overscrollBehavior: 'contain' }}
      >
        <div className="min-h-0 flex flex-col justify-end">
          {MessagesList}
          
          <AnimatePresence>
            {isTyping && <TypingIndicator />}
          </AnimatePresence>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2 text-green-300"
            >
              <Loader className="w-4 h-4 animate-spin" />
              <span className="text-sm">Processing your request...</span>
            </motion.div>
          )}
        </div>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="p-6 backdrop-blur-md bg-green-800/20 border-t border-green-700/30"
      >
        <div className="flex items-center space-x-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            ref={fileInputRef}
          />
          
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => fileInputRef.current?.click()}
            className="p-3 rounded-xl bg-gradient-to-r from-green-600 to-green-700 
                     text-white hover:from-green-500 hover:to-green-600 
                     shadow-lg hover:shadow-green-900/30 transition-all duration-200"
          >
            <Paperclip size={20} />
          </motion.button>

          <div className="flex-1 relative">
            <input
              type="text"
              value={inputMessage}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="w-full p-4 rounded-xl bg-green-800/30 text-white 
                       placeholder-green-400 border border-green-700/30
                       focus:outline-none focus:ring-2 focus:ring-green-500/50 
                       shadow-inner transition-all duration-200"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <MessageSquare size={20} className="text-green-500/50" />
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading || !inputMessage.trim()}
            className="p-3 rounded-xl bg-gradient-to-r from-green-600 to-green-700 
                     text-white hover:from-green-500 hover:to-green-600 
                     shadow-lg hover:shadow-green-900/30 transition-all duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;