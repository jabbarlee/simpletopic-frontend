type Props = {
    explanation: string
  }
  
  export default function ResultDisplay({ explanation }: Props) {
    const handleCopy = () => {
      navigator.clipboard.writeText(explanation)
      alert('Copied!')
    }
  
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Here’s the simplified explanation:</h2>
        <div className="p-4 bg-gray-100 rounded-lg">{explanation}</div>
        <button onClick={handleCopy} className="bg-blue-500 text-white px-4 py-2 rounded">
          Copy
        </button>
        <button onClick={() => window.location.href = '/'} className="text-blue-600 underline">
          Explain Another
        </button>
      </div>
    )
  }
  