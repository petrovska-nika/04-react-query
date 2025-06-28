import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
const App = () => {
    const [votes, setVotes] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });
    const handleVote = (type) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [type]: prevVotes[type] + 1,
        }));
    };
    const resetVotes = () => {
        setVotes({ good: 0, neutral: 0, bad: 0 });
    };
    const totalVotes = votes.good + votes.neutral + votes.bad;
    const positiveRate = totalVotes
        ? Math.round((votes.good / totalVotes) * 100)
        : 0;
    return (_jsxs("div", { className: styles.app, children: [_jsx(CafeInfo, {}), _jsx(VoteOptions, { onVote: handleVote, onReset: resetVotes, canReset: totalVotes > 0 }), totalVotes > 0 ? (_jsx(VoteStats, { votes: votes, totalVotes: totalVotes, positiveRate: positiveRate })) : (_jsx(Notification, {}))] }));
};
export default App;
