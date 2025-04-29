import { useState } from "react";
import styles from "./GraduationPhotos.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function GraduationPhotos() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <div className={cx("graduationPhotos")}>
                <h2>🎓Ảnh 2 đứa mình</h2>
                <p>Những khoảnh khắc đẹp đẽ, lưu giữ mãi trong tim! 💖</p>
                <div className={cx("photos")}>
                    {[
                        "/assets/imgs/cặp-đôi.jpg",
                        "/assets/imgs/cặp-đôi-2.jpg",
                        "/assets/imgs/cặp-đôi-3.jpg",
                        "/assets/imgs/cặp-đôi.jpg",
                        "/assets/imgs/cặp-đôi-2.jpg",
                        "/assets/imgs/cặp-đôi-3.jpg",
                        "/assets/imgs/cặp-đôi.jpg",
                        "/assets/imgs/cặp-đôi-2.jpg",
                        "/assets/imgs/cặp-đôi-3.jpg",
                    ].map((src, index) => (
                        <div className={cx("div_img")}>
                            <img
                                key={index}
                                src={src}
                                alt={`Graduation Photo ${index + 1}`}
                                onClick={() => handleImageClick(src)}
                                className={cx("photo")}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {selectedImage && (
                <div className={cx("overlay")} onClick={handleClose}>
                    <div className={cx("modal")}>
                        <img src={selectedImage} alt="Enlarged" />
                    </div>
                </div>
            )}
        </>
    );
}

export default GraduationPhotos;
