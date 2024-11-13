import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ModelSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function ModelSelect({ value, onChange }: ModelSelectProps) {
  return (
    <div className="relative mb-4">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-black border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-white focus:border-transparent"
      >
        <option value="gemini-1.5-flash">Gemini 1.5 Flash</option>
        <option value="gemini-1.0-pro">Gemini 1.0 Pro</option>
        <option value="gemini-1.5-pro">Gemini 1.5 Pro</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
    </div>
  );
}