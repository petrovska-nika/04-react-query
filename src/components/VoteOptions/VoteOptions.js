import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./VoteOptions.module.css";
const VoteOptions = ({ onVote, onReset, canReset }) => {
    return (_jsxs("div", { className: styles.container, children: [_jsx("button", { className: styles.button, onClick: () => onVote("good"), children: "Good" }), _jsx("button", { className: styles.button, onClick: () => onVote("neutral"), children: "Neutral" }), _jsx("button", { className: styles.button, onClick: () => onVote("bad"), children: "Bad" }), canReset && (_jsx("button", { className: `${styles.button} ${styles.reset}`, onClick: onReset, children: "Reset" }))] }));
};
export default VoteOptions;
