/**
 * Script xử lý tương tác cho trang Chi tiết Khóa học Marketing Thực Chiến
 * Đồ án: EduMaster - Hệ thống đào tạo nghề nghiệp
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- CHỨC NĂNG 1: ĐỒNG BỘ GIAO DIỆN SÁNG/TỐI (THEME SYNC) ---
    // Kiểm tra trạng thái theme từ localStorage để đảm bảo giao diện thống nhất toàn web [3, 4]
    const checkTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };
    checkTheme();

    // Cập nhật giao diện ngay lập tức nếu người dùng đổi theme ở các tab khác [5]
    window.addEventListener('storage', (e) => {
        if (e.key === 'theme') checkTheme();
    });

    // --- CHỨC NĂNG 2: XỬ LÝ ĐĂNG KÝ TƯ VẤN (INTERACTION) ---
    // Phản hồi khi người dùng nhấn nút "Đăng ký tư vấn" [6, 7]
    const enrollBtn = document.querySelector('#enrollBtn');
    if (enrollBtn) {
        enrollBtn.addEventListener('click', function() {
            // Hiển thị thông báo chào mừng (Requirement section 3) [8, 9]
            alert('Cảm ơn bạn! Chuyên viên tư vấn Marketing sẽ gọi lại cho bạn trong vòng 15 phút.');
            
            // Cập nhật trạng thái nút (DOM Manipulation) [10]
            this.textContent = 'Đang chờ tư vấn...';
            this.classList.replace('btn-primary', 'btn-secondary');
            this.disabled = true;
        });
    }

    // --- CHỨC NĂNG 3: HIỂN THỊ/ẨN LỘ TRÌNH ĐÀO TẠO (TOGGLE DETAILS) ---
    // Thực hiện chức năng "Hiển thị/ẩn nội dung chi tiết" theo đề bài [2]
    const toggleBtn = document.querySelector('#toggleCurriculum');
    const curriculumSection = document.querySelector('#curriculum');

    if (toggleBtn && curriculumSection) {
        toggleBtn.addEventListener('click', function() {
            // Kiểm tra trạng thái ẩn/hiện thông qua class 'd-none' của Bootstrap [11, 12]
            const isHidden = curriculumSection.classList.contains('d-none');
            
            if (isHidden) {
                curriculumSection.classList.remove('d-none');
                this.textContent = 'Thu gọn Module học';
                this.classList.replace('btn-outline-secondary', 'btn-info');
                
                // Cuộn xuống phần nội dung vừa hiện để tối ưu trải nghiệm (UX) [13]
                curriculumSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                curriculumSection.classList.add('d-none');
                this.textContent = 'Xem 6 Module học';
                this.classList.replace('btn-info', 'btn-outline-secondary');
            }
        });
    }
});