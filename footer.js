const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = `
    <div class="form">
            <div class="logo-container">
                <img src="./images/logo-big.png" alt="logo" class="logo">
                <div class="social mobile">
                    <a href=""><img src="./images/footer/facebook.png" alt=""></a>
                    <a href=""><img src="./images/footer/youtube.png" alt=""></a>
                    <a href=""><img src="./images/footer/mail.png" alt=""></a>
                </div>
            </div>
            <div class="followus">
                <span class="highlight">theo dõi circle k</span>
                <span class="nomal">Cập nhật ưu đã sớm nhất</span>
            </div>
            <div class="email-container">
                <input type="email" id="email" placeholder="Nhập email của bạn">
                <a class="btn subbmit">xác nhận</a>
            </div>
            <span class="line bigline"></span>
            <div class="social desktop">
                <a href=""><img src="./images/footer/facebook.png" alt=""></a>
                <a href=""><img src="./images/footer/youtube.png" alt=""></a>
                <a href=""><img src="./images/footer/mail.png" alt=""></a>
            </div>
        </div>
        <h2 class="red-text"><span class="bold">circle k vietnam -</span> chuỗi của hàng tiện lợi - mở cửa 24/7</h2>
        <div class="infomation">
            <div class="info-left">
                <p class="name-company">
                    <span class="uppercase">công ty tnhh vòng tròn đỏ </span>
                    - Giấy CNĐKDN: 0306182043
                </p>
                <p class="address">
                    Địa chỉ: 160 Bùi Thị Xuân, Phường Phạm Ngũ Lão, Quận 1, Tp.Hồ Chí Minh, Việt Nam
                </p>
                <p class="hotline">
                    Hotline: 1900 3110 (7:00-22:00)
                </p>
                <p class="email">
                    Email: info@circlek.com.vn
                </p>
            </div>

            <div class="info-right">
                <img src="./images/footer/dathongbao.png" alt="đã thông báo bộ công thương" class="first-img desktop">
                <img src="./images/footer/qr-code.png" alt="QR code" class="seccond-img">
                <div class="download-app">
                    <a href="#"><img src="./images/footer/app-store.png" alt=""></a>
                    <a href="#"><img src="./images/footer/google-play.png" alt=""></a>
                </div>
                <img src="./images/footer/dathongbao.png" alt="đã thông báo bộ công thương" class="first-img mobile">
            </div>
        </div>

        <div class="last-footer">
            <div class="last-left">
                <ul>
                    <li><a href="">Giới thiệu</a><span class="line space"></span></li>
                    <li><a href="">Cơ hội nghề nghiệp</a><span class="line space"></span></li>
                    <li><a href="">Tin tức & sự kiện</a><span class="line space"></span></li>
                    <li><a href="">Liên hệ</a><span class="line space"></span></li>
                    <li><a href="">Điều khoản sử dụng</a><span class="line space"></span></li>
                    <li><a href="">Chính sách bảo mật</a></li>
                </ul>
            </div>
            <div class="last-right">
                Copyright © 2021 Circle K Vietnam
            </div>
        </div>
    `
}

createFooter();