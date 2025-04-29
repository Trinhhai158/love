import styles from "./LoveDays.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function calculateLoveDays(startDate) {
    const start = new Date(startDate);
    const today = new Date();
    const diffTime = today - start;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

function LoveDays() {
    const [loveDays, setLoveDays] = useState(0);

    useEffect(() => {
        const startDate = "2021-12-20";
        setLoveDays(calculateLoveDays(startDate));
    }, []);

    const handleIncreaseDay = () => {
        setLoveDays((prev) => prev + 1);
    };

    return (
        <div className={cx("loveDays")}>
            <h2>❤️ Đã yêu nhau</h2>
            <span className={cx("days")}>{loveDays} ngày</span>
            <button
                className={cx("increaseButton")}
                onClick={handleIncreaseDay}
            >
                Tăng thêm ngày 🎉
            </button>
            <p>Những ngày tháng bên nhau thật ngọt ngào 🍀</p>
        </div>
    );
}

export default LoveDays;
