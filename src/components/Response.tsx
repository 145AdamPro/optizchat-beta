import { FC } from 'react';

interface ResponseProps {
  response: string;
}

export const Response: FC<ResponseProps> = ({ response }) => {
  if (!response) return null;

  const formatResponse = (text: string) => {
    const codeBlockRegex = /```([\s\S]*?)```/g;
    const inlineCodeRegex = /`([^`]+)`/g;

    const parts = text.split(codeBlockRegex);

    return parts.map((part, index) => {
      if (index % 2 === 1) {
        // Code block
        return (
          <div key={index} className="relative bg-gray-900 p-3 rounded-lg mb-4 overflow-auto max-h-[500px] border border-gray-700">
            <button
              onClick={() => navigator.clipboard.writeText(part)}
              className="absolute top-2 right-2 text-xs px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
            >
              Copy Code
            </button>
            <pre className="text-sm text-white font-mono mt-2">
              <code>{part}</code>
            </pre>
          </div>
        );
      } else {
        // Handle regular text, removing ** and making text bold
        const lines = part.split('\n');
        const formattedLines = lines.map(line => {
          const doubleAsteriskMatch = line.match(/\*\*(.*?)\*\*/);
          if (doubleAsteriskMatch) {
            const boldText = doubleAsteriskMatch[1];
            const [beforeParens, parenthesesText] = boldText.split(/(\(.+?\))/)
            return (
              <div key={line} className="font-bold text-white">
                {beforeParens}
                {parenthesesText && (
                  <span className="text-gray-400 font-normal">{parenthesesText}</span>
                )}
              </div>
            );
          }
          if (line.startsWith('* ')) {
            // Handle single asterisk lines
            const textAfterAsterisk = line.slice(2);
            return (
              <div key={line} className="font-bold">
                {textAfterAsterisk}
              </div>
            );
          }
          return <div key={line}>{line}</div>;
        });

        return (
          <div key={index} className="text-white whitespace-pre-wrap space-y-1">
            {formattedLines}
          </div>
        );
      }
    });
  };

  return (
    <div className="mt-6">
      <h2 className="text-sm font-medium text-zinc-400 mb-2">Response</h2>
      <div className="bg-black rounded-lg p-4 text-sm border border-zinc-800">
        {formatResponse(response)}
      </div>
    </div>
  );
};
