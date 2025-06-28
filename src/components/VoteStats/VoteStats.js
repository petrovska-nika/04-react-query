import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./VoteStats.module.css";
const VoteStats = ({ votes, totalVotes, positiveRate }) => {
    return (_jsxs("div", { className: styles.container, children: [_jsxs("p", { className: styles.stat, children: ["Good: ", _jsx("strong", { children: votes.good })] }), _jsxs("p", { className: styles.stat, children: ["Neutral: ", _jsx("strong", { children: votes.neutral })] }), _jsxs("p", { className: styles.stat, children: ["Bad: ", _jsx("strong", { children: votes.bad })] }), _jsxs("p", { className: styles.stat, children: ["Total: ", _jsx("strong", { children: totalVotes })] }), _jsxs("p", { className: styles.stat, children: ["Positive: ", _jsxs("strong", { children: [positiveRate, "%"] })] })] }));
};
export default VoteStats;
