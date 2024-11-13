import React from 'react';
import { Send, Loader2 } from 'lucide-react';

interface PromptFormProps {
  prompt: string;
  loading: boolean;
  onPromptChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function PromptForm({ prompt, loading, onPromptChange, onSubmit }: PromptFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          placeholder="Enter your prompt..."
          className="w-full h-32 bg-black border border-zinc-800 rounded-lg p-4 text-sm resize-none focus:ring-2 focus:ring-white focus:border-transparent"
        />
        <button
          type="submit"
          disabled={loading || !prompt.trim()}
          className="absolute bottom-3 right-3 bg-white hover:bg-zinc-100 disabled:bg-zinc-800 disabled:cursor-not-allowed text-black rounded-lg p-2 transition-colors"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </div>
    </form>
  );
}