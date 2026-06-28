/**
 * Script xử lý tương tác cho trang Chi tiết Khóa học Quản trị nhà hàng
 * Đồ án: EduMaster - Hệ thống đào tạo nghề nghiệp
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- CHỨC NĂNG 1: ĐỒNG BỘ GIAO DIỆN SÁNG/TỐI (THEME SYNC) ---
    // Kiểm tra trạng thái giao diện đã lưu trong localStorage để áp dụng đồng nhất toàn website [5, 6]
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };
    applyTheme();

    // Lắng nghe sự thay đổi từ các trang khác để cập nhật theme ngay lập tức
    window.addEventListener('storage', (e) => {
        if (e.key === 'theme') applyTheme();
    });

    // --- CHỨC NĂNG 2: XỬ LÝ ĐĂNG KÝ KHÓA HỌC (EVENT HANDLING) ---
    // Bắt sự kiện khi người dùng nhấn nút "Đăng ký ngay" [3, 4]
    const enrollBtn = document.querySelector('#enrollBtn');
    if (enrollBtn) {
        enrollBtn.addEventListener('click', function() {
            // Hiển thị thông báo phản hồi (Requirement section 3) [2]
            alert('Yêu cầu tư vấn khóa học Quản trị nhà hàng của bạn đã được gửi thành công!');
            
            // Cập nhật trạng thái giao diện trực tiếp (DOM Manipulation) [7]
            this.textContent = 'Đã gửi yêu cầu';
            this.className = 'btn btn-secondary btn-lg px-5 disabled';
            
            console.log('Học viên đã đăng ký khóa học Quản trị.');
        });
    }

    // --- CHỨC NĂNG 3: HIỂN THỊ/ẨN LỘ TRÌNH HỌC (TOGGLE CONTENT) ---
    // Thực hiện yêu cầu "Hiển thị/ẩn nội dung chi tiết" trong đề thi [2]
    const toggleBtn = document.querySelector('#detailToggle');
    const curriculumContent = document.querySelector('#curriculumContent');

    if (toggleBtn && curriculumContent) {
        toggleBtn.addEventListener('click', function() {
            // Kiểm tra xem nội dung đang ẩn hay hiện bằng class 'd-none' của Bootstrap [8, 9]
            const isHidden = curriculumContent.classList.contains('d-none');
            
            if (isHidden) {
                curriculumContent.classList.remove('d-none');
                this.textContent = 'Thu gọn lộ trình';
                this.classList.replace('btn-outline-secondary', 'btn-info');
            } else {
                curriculumContent.classList.add('d-none');
                this.textContent = 'Xem lộ trình';
                this.classList.replace('btn-info', 'btn-outline-secondary');
            }
        });
    }

});