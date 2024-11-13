import { FC } from 'react';
import { Bot } from 'lucide-react';

export const Header: FC = () => {
  return (
    <header className="flex items-center gap-2 mb-8">
      <Bot className="w-8 h-8 text-white" />
      <h1 className="text-2xl font-bold">OptizChat</h1>
    </header>
  );
};