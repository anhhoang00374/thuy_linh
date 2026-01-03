import React, { useState, useEffect } from 'react';
import { Star, Trophy, Clock, CheckCircle, XCircle, Play, Eye, RotateCcw, ChevronRight, ChevronLeft } from 'lucide-react';
import {ALL_TESTS} from "./data.tsx";

export default function JapaneseTestApp() {
    const [selectedTest, setSelectedTest] = useState('test1');
    const DATA = ALL_TESTS[selectedTest];
    const sections = [
        { name: 'Chọn đáp án', data: DATA.multipleChoice, type: 'multiple' },
        { name: 'Ghép từ', data: DATA.matching, type: 'matching' },
        // { name: 'Nhập từ', data: DATA.typing, type: 'typing' },
        { name: 'Chọn cách đọc đúng', data: DATA.wordConnect, type: 'connect' },
        { name: 'Điền từ', data: DATA.fillBlank, type: 'fill' },
        { name: 'Sắp xếp câu', data: DATA.sentenceOrder, type: 'order' },

    ];

    const not_test_lesson = ['test1','test2'];
    //const not_test = ["Điền từ", "Sắp xếp câu"];
    const not_test = ['Nhập từ'];
    const [studentName, setStudentName] = useState('');
    const [hasStarted, setHasStarted] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const [sectionStates, setSectionStates] = useState(sections.map(() => ({
        currentQuestion: 0,
        answers: {},
        selectedOption: null,
        matchedPairs: [],
        selectedLeft: null,
        fillBlankAnswers: [],
        sentenceOrder: [],
        typingAnswer: ''
    })));

    useEffect(() => {
        if (hasStarted && !isFinished) {
            const timer = setInterval(() => setElapsedTime(Date.now() - startTime), 1000);
            return () => clearInterval(timer);
        }
    }, [hasStarted, isFinished, startTime]);

    const updateSectionState = (sIdx, updates) => {
        setSectionStates(prev => {
            const n = [...prev];
            n[sIdx] = { ...n[sIdx], ...updates };
            return n;
        });
    };

    const saveAnswerImmediately = (sIdx, answer) => {
        setSectionStates(prev => {
            const n = [...prev];
            const currentQ = n[sIdx].currentQuestion;
            n[sIdx] = {
                ...n[sIdx],
                answers: { ...n[sIdx].answers, [currentQ]: answer }
            };
            return n;
        });
    };

    const saveCurrentAnswer = (sIdx) => {
        const section = sections[sIdx];
        const state = sectionStates[sIdx];
        const currentQ = state.currentQuestion;
        const answers = { ...state.answers };

        if (section.type === 'multiple' || section.type === 'connect') {
            if (state.selectedOption !== null) answers[currentQ] = state.selectedOption;
        } else if (section.type === 'matching') {
            if (state.matchedPairs.length > 0) answers[currentQ] = state.matchedPairs;
        } else if (section.type === 'fill') {
            if (state.fillBlankAnswers.length > 0) answers[currentQ] = state.fillBlankAnswers;
        } else if (section.type === 'order') {
            if (state.sentenceOrder.length > 0) answers[currentQ] = state.sentenceOrder;
        } else if (section.type === 'typing') {
            if (state.typingAnswer.trim()) answers[currentQ] = state.typingAnswer.trim();
        }

        updateSectionState(sIdx, { answers });
    };

    const goToQuestion = (sIdx, qIdx) => {
        saveCurrentAnswer(sIdx);

        const state = sectionStates[sIdx];
        const section = sections[sIdx];
        const existingAnswer = state.answers[qIdx];

        const newState = { currentQuestion: qIdx };

        if (existingAnswer !== undefined) {
            if (section.type === 'multiple' || section.type === 'connect') {
                newState.selectedOption = existingAnswer;
            } else if (section.type === 'matching') {
                newState.matchedPairs = existingAnswer;
            } else if (section.type === 'fill') {
                newState.fillBlankAnswers = existingAnswer;
            } else if (section.type === 'order') {
                newState.sentenceOrder = existingAnswer;
            } else if (section.type === 'typing') {
                newState.typingAnswer = existingAnswer;
            }
        } else {
            newState.selectedOption = null;
            newState.matchedPairs = [];
            newState.selectedLeft = null;
            newState.fillBlankAnswers = [];
            newState.sentenceOrder = [];
            newState.typingAnswer = '';
        }

        updateSectionState(sIdx, newState);
    };

    const isAllCompleted = () => {
        return sections
            .filter(item => !(not_test_lesson.includes(selectedTest) && not_test.includes(item.name)))
            .every((sec, sIdx) => {
                const state = sectionStates[sIdx];
                return sec.data.every((q, qIdx) => state.answers[qIdx] !== undefined);
            });
    };

    const getSectionProgress = (sIdx) => {
        const state = sectionStates[sIdx];
        const completed = sections[sIdx].data.filter((q, qIdx) => state.answers[qIdx] !== undefined).length;
        return { completed, total: sections[sIdx].data.length };
    };

    const calculateScore = () => {
        let correct = 0, total = 0;
        sections
            .filter(item => !(not_test_lesson.includes(selectedTest) && not_test.includes(item.name)))
            .forEach((section, sIdx) => {
                const state = sectionStates[sIdx];
                section.data.forEach((question, qIdx) => {
                    total++;
                    const answer = state.answers[qIdx];
                    if (section.type === 'multiple' || section.type === 'connect') {
                        if (answer === question.correct) correct++;
                    } else if (section.type === 'matching') {
                        const cp = question.correctPairs;
                        if (answer && answer.length === cp.length && cp.every(pair => answer.some(a => a[0] === pair[0] && a[1] === pair[1]))) correct++;
                    } else if (section.type === 'fill') {
                        if (answer && JSON.stringify(answer) === JSON.stringify(question.blanks)) correct++;
                    } else if (section.type === 'order') {
                        if (answer && JSON.stringify(answer) === JSON.stringify(question.correct)) correct++;
                    } else if (section.type === 'typing') {
                        if (answer && answer.toLowerCase() === question.correct.toLowerCase()) correct++;
                    }
                });
            });
        return { correct, total, percentage: total > 0 ? (correct / total) * 100 : 0 };
    };

    const getFeedback = (p) => {
        if (p === 100) return { icon: <Trophy className="w-16 h-16 text-yellow-400" />, title: "HOÀN HẢO!", message: "Xuất sắc! Bạn đã làm đúng 100%! Hãy tiếp tục nỗ lực duy trì nhé!", color: "from-yellow-400 to-orange-400" };
        if (p >= 90) return { icon: <Star className="w-16 h-16 text-blue-400" />, title: "TUYỆT VỜI!", message: "Bạn làm rất tốt! Cố gắng thêm một chút nữa là hoàn hảo!", color: "from-blue-400 to-purple-400" };
        if (p >= 80) return { icon: <CheckCircle className="w-16 h-16 text-green-400" />, title: "CỐ GẮNG LÊN!", message: "Bạn đã cố gắng! Hãy ôn tập thêm để tiến bộ hơn nhé!", color: "from-green-400 to-teal-400" };
        return { icon: <RotateCcw className="w-16 h-16 text-red-400" />, title: "HỌC LẠI NHÉ!", message: "Đừng nản chí! Hãy ôn lại bài và thử lại một lần nữa!", color: "from-red-400 to-pink-400" };
    };

    const formatTime = (ms) => {
        const s = Math.floor(ms / 1000);
        const m = Math.floor(s / 60);
        return m + ':' + (s % 60).toString().padStart(2, '0');
    };

    const renderAnswerReview = () => {
        return (
            <div className="space-y-6 max-h-[600px] overflow-y-auto">
                {sections
                    .filter(item => !(not_test_lesson.includes(selectedTest) && not_test.includes(item.name)))
                    .map((sec, sIdx) => (
                        <div key={sIdx} className="bg-gray-50 p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg">
                Bài {sIdx + 1}: {sec.name}
              </span>
                            </h3>
                            {sec.data.map((q, qIdx) => {
                                const ans = sectionStates[sIdx].answers[qIdx];
                                let isC = false;
                                let uAns = '';
                                let cAns = '';

                                if (sec.type === 'multiple' || sec.type === 'connect') {
                                    isC = ans === q.correct;
                                    uAns = ans != null ? q.options[ans] : 'Chưa trả lời';
                                    cAns = q.options[q.correct];
                                } else if (sec.type === 'matching') {
                                    const cp = q.correctPairs;
                                    isC = ans && ans.length === cp.length && cp.every(pair => ans.some(a => a[0] === pair[0] && a[1] === pair[1]));
                                    uAns = isC ? 'Ghép đúng' : 'Ghép sai';
                                    cAns = q.explanation;
                                } else if (sec.type === 'fill') {
                                    isC = ans && JSON.stringify(ans) === JSON.stringify(q.blanks);
                                    uAns = ans ? ans.join(', ') : 'Chưa trả lời';
                                    cAns = q.blanks.join(', ');
                                } else if (sec.type === 'order') {
                                    isC = ans && JSON.stringify(ans) === JSON.stringify(q.correct);
                                    uAns = ans ? ans.map(idx => q.words[idx]).join(' ') : 'Chưa trả lời';
                                    cAns = q.correctSentence;
                                } else if (sec.type === 'typing') {
                                    isC = ans && ans.toLowerCase() === q.correct.toLowerCase();
                                    uAns = ans || 'Chưa trả lời';
                                    cAns = q.correct;
                                }

                                return (
                                    <div key={qIdx} className="mb-4 p-4 bg-white rounded-lg border-l-4" style={{borderLeftColor: isC ? '#10b981' : '#ef4444'}}>
                                        <div className="flex items-start gap-3">
                                            {isC ? (
                                                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                            ) : (
                                                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                            )}
                                            <div className="flex-1">
                                                <p className="font-bold text-gray-800 mb-2">Câu {qIdx + 1}</p>
                                                {uAns && (
                                                    <div className="mb-2">
                                                        <span className="text-sm font-semibold text-gray-600">Câu trả lời của bạn: </span>
                                                        <span className={'text-sm font-medium ' + (isC ? 'text-green-600' : 'text-red-600')}>
                            {uAns}
                          </span>
                                                    </div>
                                                )}
                                                {!isC && cAns && (
                                                    <div className="mb-2">
                                                        <span className="text-sm font-semibold text-gray-600">Đáp án đúng: </span>
                                                        <span className="text-sm font-medium text-green-600">{cAns}</span>
                                                    </div>
                                                )}
                                                <p className="text-sm text-gray-600 italic bg-blue-50 p-2 rounded mt-2">💡 {q.explanation}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
            </div>
        );
    };

    const renderQuestionContent = (sIdx) => {
        const section = sections[sIdx];
        const state = sectionStates[sIdx];
        const q = section.data[state.currentQuestion];
        console.log(q);
        if (section.type === 'multiple') {
            return (
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">{q.question}</h3>
                    <div className="grid gap-3">
                        {q.options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    updateSectionState(sIdx, { selectedOption: idx });
                                    saveAnswerImmediately(sIdx, idx);
                                }}
                                className={'p-4 rounded-xl text-lg font-medium transition-all ' + (state.selectedOption === idx ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200')}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            );
        }

        if (section.type === 'matching') {
            return (
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">Ghép các cặp từ đúng:</h3>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <p className="text-sm font-semibold text-gray-600">Cột A</p>
                            {q.left.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => updateSectionState(sIdx, { selectedLeft: idx })}
                                    className={'w-full p-4 rounded-xl text-xl font-bold transition-all ' + (state.selectedLeft === idx ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : state.matchedPairs.some(p => p[0] === idx) ? 'bg-green-100 text-green-700 border-2 border-green-400' : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200')}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        <div className="space-y-3">
                            <p className="text-sm font-semibold text-gray-600">Cột B</p>
                            {q.right.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        if (state.selectedLeft !== null) {
                                            const newPairs = state.matchedPairs.filter(p => p[0] !== state.selectedLeft && p[1] !== idx);
                                            const updatedPairs = [...newPairs, [state.selectedLeft, idx]];
                                            updateSectionState(sIdx, { matchedPairs: updatedPairs, selectedLeft: null });
                                            if (updatedPairs.length === q.left.length) {
                                                saveAnswerImmediately(sIdx, updatedPairs);
                                            }
                                        }
                                    }}
                                    className={'w-full p-4 rounded-xl text-xl font-medium transition-all ' + (state.matchedPairs.some(p => p[1] === idx) ? 'bg-green-100 text-green-700 border-2 border-green-400' : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200')}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        if (section.type === 'fill' ) {
            return (
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">Điền từ vào chỗ trống để tạo thành từ,câu có nghĩa:</h3>
                    <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                        <p className="text-3xl font-bold text-center">
                            {q.sentence.split('___').map((part, idx) => (
                                <React.Fragment key={idx}>
                                    {part}
                                    {idx < q.blanks.length && (
                                        <span className="inline-block mx-2 px-4 py-2 bg-yellow-100 border-2 border-yellow-400 rounded-lg min-w-[100px] text-center">
                      {state.fillBlankAnswers[idx] || '___'}
                    </span>
                                    )}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                    {q.options.map((opts, blankIdx) => (
                        <div key={blankIdx} className="space-y-2">
                            <p className="text-sm font-semibold text-gray-600">Chỗ trống {blankIdx + 1}:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {opts.map((opt, optIdx) => (
                                    <button
                                        key={optIdx}
                                        onClick={() => {
                                            const newAnswers = [...state.fillBlankAnswers];
                                            newAnswers[blankIdx] = opt;
                                            updateSectionState(sIdx, { fillBlankAnswers: newAnswers });
                                            if (newAnswers.length === q.blanks.length && newAnswers.every(a => a !== undefined)) {
                                                saveAnswerImmediately(sIdx, newAnswers);
                                            }
                                        }}
                                        className={'p-3 rounded-lg text-lg font-medium transition-all ' + (state.fillBlankAnswers[blankIdx] === opt ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200')}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        if (section.type === 'connect') {
            return (
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">Chọn nghĩa đúng với từ:</h3>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl text-center">
                        <p className="text-5xl font-bold">{q.word}</p>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {q.options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    updateSectionState(sIdx, { selectedOption: idx });
                                    saveAnswerImmediately(sIdx, idx);
                                }}
                                className={'p-4 rounded-xl text-2xl transition-all ' + (state.selectedOption === idx ? 'bg-gradient-to-r from-green-400 to-blue-400 shadow-lg' : 'bg-white hover:bg-gray-50 border-2 border-gray-200')}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            );
        }

        if (section.type === 'order' ) {
            const availableWords = q.words.filter((w, idx) => !state.sentenceOrder.includes(idx));
            return (
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">Sắp xếp thành câu đúng:</h3>
                    <div className="bg-white p-6 rounded-xl border-2 border-gray-200 min-h-[100px]">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {state.sentenceOrder.map((idx, pos) => (
                                <button
                                    key={pos}
                                    onClick={() => {
                                        const newOrder = state.sentenceOrder.filter((x, i) => i !== pos);
                                        updateSectionState(sIdx, { sentenceOrder: newOrder });
                                    }}
                                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-xl font-bold hover:opacity-80"
                                >
                                    {q.words[idx]}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                        {availableWords.map((word, i) => {
                            const originalIdx = q.words.findIndex((w, j) => w === word && !state.sentenceOrder.includes(j));
                            return (
                                <button
                                    key={i}
                                    onClick={() => {
                                        const newOrder = [...state.sentenceOrder, originalIdx];
                                        updateSectionState(sIdx, { sentenceOrder: newOrder });
                                        if (newOrder.length === q.words.length) {
                                            saveAnswerImmediately(sIdx, newOrder);
                                        }
                                    }}
                                    className="p-4 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-lg text-xl font-medium"
                                >
                                    {word}
                                </button>
                            );
                        })}
                    </div>
                </div>
            );
        }

        if (section.type === 'typing') {
            return (
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">Nhập từ bên dưới sang tiếng Nhật:</h3>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl text-center">
                        <p className="text-3xl font-bold mb-2">{q.question}</p>
                        {/*<p className="text-sm text-gray-600 italic">Gợi ý: {q.hint}</p>*/}
                    </div>
                    <input
                        type="text"
                        value={state.typingAnswer}
                        onChange={(e) => {
                            const value = e.target.value;
                            updateSectionState(sIdx, { typingAnswer: value });
                            if (value.trim()) {
                                saveAnswerImmediately(sIdx, value.trim());
                            }
                        }}
                        placeholder={q.placeholder}
                        className="w-full px-6 py-4 text-2xl text-center border-4 border-purple-300 rounded-xl focus:border-purple-500 focus:outline-none font-bold"
                    />
                </div>
            );
        }
    };

    if (!hasStarted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
                    <div className="text-center mb-8">
                        <div className="text-6xl mb-4">🎌</div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Bài Test Tiếng Nhật</h1>
                    </div>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Nhập tên của bạn..."
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && studentName.trim() && setHasStarted(true) && setStartTime(Date.now())}
                            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none"
                        />
                        <select
                            value={selectedTest}
                            onChange={(e) => setSelectedTest(e.target.value)}
                            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none bg-white"
                        >
                            {Object.keys(ALL_TESTS).map(testKey => (
                                <option key={testKey} value={testKey}>{ALL_TESTS[testKey].name}</option>
                            ))}
                        </select>
                        <button
                            onClick={() => { if (studentName.trim()) { setHasStarted(true); setStartTime(Date.now()); } }}
                            disabled={!studentName.trim()}
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            <Play className="w-6 h-6" />Bắt đầu làm bài!
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (isFinished) {
        const score = calculateScore();
        const feedback = getFeedback(score.percentage);

        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
                        <div className="text-center mb-8">
                            <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-4">
                                <p className="text-sm text-gray-600">Học sinh</p>
                                <p className="text-2xl font-bold text-purple-700">{studentName}</p>
                            </div>
                            <div className="mb-4">{feedback.icon}</div>
                            <h2 className={'text-4xl font-bold bg-gradient-to-r ' + feedback.color + ' bg-clip-text text-transparent mb-4'}>
                                {feedback.title}
                            </h2>
                            <p className="text-xl text-gray-700 mb-6">{feedback.message}</p>

                            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
                                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-xl">
                                    <p className="text-3xl font-bold text-blue-700">{score.correct}/{score.total}</p>
                                    <p className="text-sm text-blue-600">Câu đúng</p>
                                </div>
                                <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-xl">
                                    <p className="text-3xl font-bold text-green-700">{score.percentage.toFixed(1)}%</p>
                                    <p className="text-sm text-green-600">Điểm số</p>
                                </div>
                                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-xl">
                                    <p className="text-3xl font-bold text-purple-700">{formatTime(elapsedTime)}</p>
                                    <p className="text-sm text-purple-600">Thời gian</p>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowAnswers(!showAnswers)}
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 mx-auto"
                            >
                                <Eye className="w-5 h-5" />
                                {showAnswers ? 'Ẩn đáp án' : 'Xem đáp án'}
                            </button>
                        </div>

                        {showAnswers && (
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">📝 Đáp án chi tiết:</h3>
                                {renderAnswerReview()}
                            </div>
                        )}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => {
                                setHasStarted(false);
                                setIsFinished(false);
                                setSectionStates(sections.map(() => ({ currentQuestion: 0, answers: {}, selectedOption: null, matchedPairs: [], selectedLeft: null, fillBlankAnswers: [], sentenceOrder: [], typingAnswer: '' })));
                                setStartTime(null);
                                setElapsedTime(0);
                                setShowAnswers(false);
                                setStudentName('');
                            }}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 mx-auto"
                        >
                            <RotateCcw className="w-5 h-5" />
                            Làm bài mới
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const allCompleted = isAllCompleted();

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4">
            <div className="max-w-4xl mx-auto sticky top-4 z-10 mb-6">
                <div className="bg-white rounded-xl shadow-lg p-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="text-2xl">👤</div>
                            <div>
                                <p className="text-sm text-gray-600">Học sinh</p>
                                <p className="font-bold text-lg text-gray-800">{studentName}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-xl">
                            <Clock className="w-5 h-5 text-purple-600" />
                            <span className="font-bold text-lg text-purple-700">{formatTime(elapsedTime)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {sections.filter(item => !(not_test_lesson.includes(selectedTest) && not_test.includes(item.name)))
                    .map((sec, sIdx) => {
                        const state = sectionStates[sIdx];
                        const progress = getSectionProgress(sIdx);
                        const isCompleted = progress.completed === progress.total;

                        return (
                            <div key={sIdx} className="bg-white rounded-xl shadow-xl p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        Bài {sIdx + 1}: {sec.name}
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        {isCompleted && (
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />Hoàn thành
                    </span>
                                        )}
                                        <span className="text-sm font-medium text-gray-600">{progress.completed} / {progress.total}</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {sec.data.map((item, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => goToQuestion(sIdx, idx)}
                                            className={'px-3 py-1 rounded-lg text-sm font-medium transition-all ' + (state.currentQuestion === idx ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : state.answers[idx] !== undefined ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-gray-100 text-gray-600 border border-gray-300')}
                                        >
                                            {idx + 1}
                                        </button>
                                    ))}
                                </div>

                                {renderQuestionContent(sIdx)}

                                <div className="flex justify-between mt-6">
                                    <button
                                        onClick={() => goToQuestion(sIdx, Math.max(0, state.currentQuestion - 1))}
                                        disabled={state.currentQuestion === 0}
                                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-bold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                    >
                                        <ChevronLeft className="w-5 h-5" />Câu trước
                                    </button>
                                    <button
                                        onClick={() => {
                                            saveCurrentAnswer(sIdx);
                                            if (state.currentQuestion < sec.data.length - 1) {
                                                goToQuestion(sIdx, state.currentQuestion + 1);
                                            }
                                        }}
                                        disabled={state.currentQuestion === sec.data.length - 1}
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl font-bold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                    >
                                        Câu tiếp theo<ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}

                <div className="bg-white rounded-xl shadow-xl p-6 text-center">
                    {!allCompleted && (
                        <p className="text-red-600 font-semibold mb-4">⚠️ Vui lòng hoàn thành tất cả câu hỏi trước khi nộp bài!</p>
                    )}
                    <button
                        onClick={() => {
                            sections
                                .filter(item => !(not_test_lesson.includes(selectedTest) && not_test.includes(item.name)))
                                .forEach((sec, sIdx) => saveCurrentAnswer(sIdx));
                            setIsFinished(true);
                        }}
                        disabled={!allCompleted}
                        className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                    >
                        <Trophy className="w-6 h-6" />Nộp bài
                    </button>
                </div>
            </div>
        </div>
    );
}