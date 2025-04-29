import { useEffect, useState } from "react";
import styles from "./LetterToYou.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const texts = [
    "- Em yêu à, mỗi ngày bên em là một món quà tuyệt vời đối với anh.",
    "- Cảm ơn em đã luôn ở bên, yêu thương và chở che cho anh.",
    "- Ánh mắt em là bầu trời, nụ cười em là ánh nắng của đời anh.",
    "- Dù cuộc sống có ra sao, anh vẫn muốn nắm tay em đi đến cuối con đường.",
    "- Mong rằng chúng ta sẽ mãi mãi bên nhau, không chỉ hôm nay mà cả ngàn ngày sau.",
    "- Có em, mọi giông bão đều hóa dịu dàng, mọi thử thách đều trở nên nhỏ bé.",
    "- Em là lý do để anh cố gắng mỗi ngày, là động lực để anh trở thành phiên bản tốt hơn.",
    "- Chỉ cần được thấy em cười, anh nguyện đánh đổi cả thế giới này.",
    "- Thế giới rộng lớn, nhưng anh chỉ cần có em trong thế giới nhỏ bé của riêng mình.",
    "- Anh yêu em không chỉ vì em là ai, mà còn vì anh là ai khi ở cạnh em.",
    "Yêu em rất nhiều! 💖",
];

function LetterToYou() {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (textIndex >= texts.length) return;

        const currentText = texts[textIndex];

        if (charIndex < currentText.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + currentText.charAt(charIndex));
                setCharIndex((prev) => prev + 1);
            }, 40); // Tốc độ gõ
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + "\n"); // Xuống dòng
                setTextIndex((prev) => prev + 1);
                setCharIndex(0);
            }, 2000); // Đợi 2 giây rồi gõ dòng tiếp theo
            return () => clearTimeout(timeout);
        }
    }, [charIndex, textIndex]);

    return (
        <div className={cx("letter")}>
            <h2>💌 Thư gửi tới em</h2>
            <p style={{ whiteSpace: "pre-line" }}>{displayText}</p>
        </div>
    );
}

export default LetterToYou;
