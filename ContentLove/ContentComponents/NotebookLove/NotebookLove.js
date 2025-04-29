import styles from "./NotebookLove.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function NotebookLove() {
    return (
        <div className={cx("notebook")}>
            <h2>Sổ tay tình yêu 💖</h2>
            <p>Mỗi trang đều ghi lại những khoảnh khắc tuyệt vời bên nhau.</p>
            <ul>
                <li>🌸 Lần đầu gặp gỡ</li>
                <li>🎉 Kỷ niệm tháng đầu tiên</li>
                <li>🎂 Sinh nhật đầu tiên cùng nhau</li>
                <li>💍 Lời hứa tương lai</li>
            </ul>
            <div className={cx("div_img")}>
                <img src="/assets/imgs/sổ-tình-yêu.jpg" alt="" />
            </div>
        </div>
    );
}

export default NotebookLove;
