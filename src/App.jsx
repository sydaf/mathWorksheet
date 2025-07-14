import { useState } from 'react'
import './App.css'

const questions = [
  { questions: "17", options: ["10", "20", "17"], answer: "20" },
  { questions: "75", options: ["70", "80", "17"], answer: "80" },
  { questions: "64", options: ["64", "70", "60"], answer: "60" },
  { questions: "98", options: ["80", "100", "89"], answer: "100" },
  { questions: "94", options: ["100", "194", "90"], answer: "90" },
  { questions: "445", options: ["450", "440", "50"], answer: "450" },
  { questions: "45", options: ["50", "45", "40"], answer: "50" },
  { questions: "19", options: ["20", "10", "19"], answer: "20" },
  { questions: "0", options: ["10", "1", "0"], answer: "0" },
  { questions: "199", options: ["190", "100", "200"], answer: "200" },
  { questions: "165", options: ["160", "170", "150"], answer: "160" },
  { questions: "999", options: ["990", "1000", "909"], answer: "1000" },
]

function App() {
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [error, setError] = useState(null);

  const handleSelect = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      setError("Please enter your name before submitting.");
      return;
    }
    setError(null);
    const calculatedScore = answers.reduce((total, answer, index) => {
      return answer === questions[index].answer ? total + 1 : total;
    }, 0);
    setScore(calculatedScore);
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null));
    setScore(0);
    setError(null);
  };

  return (
    <div className="max-w-3xl m-auto p-6 shadow-md rounded-md mt-5">
      <h1 className="text-2xl font-bold text-center mb-4">Rounding Off to the Nearest 10. Yeah?</h1>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="w-full">
          <label className="block mb-2 font-semibold">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 border-b-2 border-gray-300"
          />
        </div>
        <div className="w-full md:w-1/12">
          <label className="block mb-2 font-semibold">Score:</label>
          <input
            type="text"
            value={`${score}/${questions.length}`}
            disabled
            className="w-full p-2 mb-4 border-b-2 border-gray-300"
          />

        </div>
      </div>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <p className="text-lg mb-2 text-center">Circle the correct answer</p>
      <div className="flex justify-between flex-wrap">
        {questions.map((q, index) => (
          <div key={index} className="mb-4 w-full md:w-1/2">
            <p className="font-semibold">{q.questions} rounded off to the nearest 10 is...</p>
            <div className="flex gap-2 mt-2">
              {q.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(index, option)}
                  className={`px-4 py-2 ${answers[index] === option ? "bg-blue-500 text-white rounded-full border" : "bg-white"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Reset
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    <footer className="mt-8 text-center text-gray-500 text-sm">
      copyright: www.mathinenglish.com
    </footer>
    </div>
  )
}

export default App
