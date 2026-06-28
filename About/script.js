/**
 * Script xử lý tương tác cho trang Giới thiệu (About)
 * Đồ án: EduMaster - Hệ thống đào tạo nghề nghiệp
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- CHỨC NĂNG 1: TƯƠNG TÁC NÚT "TÌM HIỂU THÊM" ---
    // Hiển thị thông báo hoặc mở rộng nội dung chi tiết [2]
    const aboutBtn = document.querySelector('#aboutActionBtn');
    if (aboutBtn) {
        aboutBtn.addEventListener('click', function() {
            alert('EduMaster tự hào là đơn vị tiên phong trong đào tạo kỹ năng thực chiến với hơn 10 năm kinh nghiệm!');
            console.log('Người dùng đã xem thêm thông tin giới thiệu.');
        });
    }

    // --- CHỨC NĂNG 2: ĐỔI GIAO DIỆN SÁNG/TỐI (DARK MODE) ---
    // Chức năng này giúp thay đổi màu nền và màu chữ toàn trang [2]
    const body = document.body;
    
    // Tạo nút đổi theme động và gắn vào Navbar
    const themeBtn = document.createElement('button');
    themeBtn.id = 'themeToggle';
    themeBtn.className = 'btn btn-sm btn-outline-warning ms-lg-3';
    themeBtn.textContent = 'Chế độ tối';
    
    const navRight = document.querySelector('.navbar-nav');
    if (navRight) {
        const li = document.createElement('li');
        li.className = 'nav-item d-flex align-items-center';
        li.appendChild(themeBtn);
        navRight.appendChild(li);
    }

    themeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode'); // Class này cần định nghĩa trong style.css
        const isDark = body.classList.contains('dark-mode');
        
        // Lưu trạng thái vào localStorage để đồng bộ khi chuyển trang [3]
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeBtn.textContent = isDark ? 'Chế độ sáng' : 'Chế độ tối';
        themeBtn.className = isDark ? 'btn btn-sm btn-warning ms-lg-3' : 'btn btn-sm btn-outline-warning ms-lg-3';
    });

    // Kiểm tra và áp dụng theme đã lưu từ trước
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeBtn.textContent = 'Chế độ sáng';
    }

    // --- CHỨC NĂNG 3: NÚT QUAY VỀ ĐẦU TRANG (SCROLL TO TOP) ---
    // Tự động xuất hiện khi cuộn trang xuống dưới [2]
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTopBtn';
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'btn btn-primary rounded-circle shadow-lg';
    scrollBtn.style.cssText = 'position:fixed; bottom:20px; right:20px; display:none; z-index:1000; width:45px; height:45px;';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Cuộn mượt mà
        });
    });

});