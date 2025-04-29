import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./ContentLove.module.scss";

// các component
import GraduationPhotos from "./ContentComponents/GraduationPhotos";
import LetterToYou from "./ContentComponents/LetterToYou";
import LoveDays from "./ContentComponents/LoveDays";
import NotebookLove from "./ContentComponents/NotebookLove";
const cx = classNames.bind(styles);

function ContentLove() {
    const [activeIndex, setActiveIndex] = useState(null);

    const items = [
        "Sổ tay tình yêu",
        "Số ngày yêu nhau",
        "Ảnh 2 đứa mình",
        "Thư gửi tới em",
    ];

    // Map index tương ứng Component
    const components = [
        <NotebookLove />,
        <LoveDays />,
        <GraduationPhotos />,
        <LetterToYou />,
    ];
    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={cx("content_Love")}>
            <nav>
                <ul className={cx("list")}>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={cx("item", {
                                active: activeIndex === index,
                            })}
                            onClick={() => handleItemClick(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
            <section className={cx("section")}>
                <h2 className={cx("title")}>
                    {activeIndex !== null ? items[activeIndex] : "chọn 1 mục"}
                </h2>
                <article className={cx("article")}>
                    {activeIndex !== null ? components[activeIndex] : ""}
                </article>
            </section>
        </div>
    );
}

export default ContentLove;
