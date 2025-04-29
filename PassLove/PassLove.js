import ContentLove2 from "../ContentLove";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PassLove.module.scss";

import classNames from "classnames/bind";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function PassLove() {
    const [PassHeart, setPassHeart] = useState(false);
    const [PassLove, setPassLove] = useState(false);
    const [inputValue, setInputValue] = useState(""); // lưu giá trị input
    const [heartJump, setHeartJump] = useState(false); // Điều khiển animation cho trái tim
    const [percentage, setPercentage] = useState(false);
    const [ContentLove, setContentLove] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // mỗi lần gõ, lấy giá trị input //
        const value = e.target.value;
        if (value.length > 0) {
            setPassHeart(true);
        } else {
            setPassHeart(false);
        }
    };

    const handleSubmit = () => {
        if (inputValue.toLowerCase() === "anhyeuem") {
            // so sánh với mật khẩu
            setPassLove(true);
            alert("Đúng mật khẩu tình yêu ❤️");
            // Khi nhấn trái tim, trigger animation
            setHeartJump(true);
            setTimeout(() => {
                setPercentage(true);
            }, 3000);
            setTimeout(() => {
                setPercentage(false);
            }, 7000);
            setTimeout(() => {
                setContentLove(true);
            }, 8000);
        } else if (!inputValue) {
            alert("bạn cần nhập mk");
        } else {
            alert("Sai rồi 😢");
        }
    };
    return (
        <>
            {!PassLove && (
                <div className={cx("Pass_Love")}>
                    <h1 className={cx("title")}>Love</h1>
                    <input
                        className={cx("input")}
                        type="text"
                        placeholder="Nhập mật khẩu tại đây!"
                        value={inputValue.trim()}
                        onChange={handleInputChange}
                    ></input>

                    <p className={cx("desc")}>
                        Hãy nhập mật khẩu tình yêu để vô khám phá những điều hay
                        ho nào !
                    </p>
                </div>
            )}
            {PassHeart && (
                <FontAwesomeIcon
                    className={cx("btn_Heart", { jump: heartJump })}
                    onClick={handleSubmit}
                    icon={faHeart}
                />
            )}
            {percentage && <div className={cx("percentage")}></div>}
            {ContentLove && <ContentLove2 />}
        </>
    );
}

export default PassLove;
