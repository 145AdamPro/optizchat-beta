import React, { useState } from 'react';
import { Header } from './components/Header';
import { ModelSelect } from './components/ModelSelect';
import { PromptForm } from './components/PromptForm';
import { Response } from './components/Response';
import { generateResponse } from './services/ai';

function App() {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('gemini-1.5-pro');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || loading) return;

    setLoading(true);
    try {
      const result = await generateResponse(prompt, model);
      setResponse(result);
    } catch (error) {
      setResponse('Error: Failed to generate response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
      {/* Outer container with thicker gray border, resizable */}
      <div className="max-w-lg w-full bg-black text-white p-8 rounded-3xl border-8 border-gray-700 resize overflow-auto">
        <Header />

        {/* Inner container with gray border */}
        <div className="bg-zinc-900 rounded-xl p-6 shadow-lg border border-gray-700 container">
          <ModelSelect value={model} onChange={setModel} />
          <PromptForm
            prompt={prompt}
            loading={loading}
            onPromptChange={setPrompt}
            onSubmit={handleSubmit}
          />
          <Response response={response} />
        </div>

        <footer className="mt-6 text-center text-sm text-zinc-500">
          Powered by OptizChat - Making AI Easy
        </footer>
      </div>
    </div>
  );
}

export default App;
