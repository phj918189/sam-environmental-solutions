import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import styles from '@/styles/common/ChatWidget.module.css';

const API_BASE = import.meta.env.VITE_AI_API_URL || '';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatWidget = () => {
  const { language, t } = useLanguage();
  const prefix = language === 'en' ? '/en' : '';
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [open, messages]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setInput('');
    const userMsg: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          language,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || `HTTP ${res.status}`);
      }

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply || '' },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: t('chat.error'),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={styles.fab}
        aria-label={open ? t('chat.close') : t('chat.open')}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {open && (
        <div className={styles.panel}>
          <div className={styles.header}>
            <h3 className={styles.title}>{t('chat.open')}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              aria-label={t('chat.close')}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div ref={scrollRef} className={styles.messages}>
            {messages.length === 0 ? (
              <p className={styles.intro}>{t('chat.intro')}</p>
            ) : (
              messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    styles.bubble,
                    m.role === 'user' ? styles.user : styles.assistant
                  )}
                >
                  {m.content}
                </div>
              ))
            )}
            {loading && (
              <div className={cn(styles.bubble, styles.assistant, styles.typing)}>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>{t('chat.thinking')}</span>
              </div>
            )}
          </div>

          <div className={styles.inputRow}>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t('chat.placeholder')}
              disabled={loading}
              className={styles.input}
            />
            <Button
              size="icon"
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className={styles.sendBtn}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>

          <div className={styles.footer}>
            <Link to={`${prefix}/contact`} className={styles.contactLink}>
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
