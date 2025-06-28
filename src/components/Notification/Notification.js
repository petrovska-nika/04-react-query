import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Notification.module.css";
const Notification = () => {
    return _jsx("p", { className: styles.message, children: "No feedback yet" });
};
export default Notification;
