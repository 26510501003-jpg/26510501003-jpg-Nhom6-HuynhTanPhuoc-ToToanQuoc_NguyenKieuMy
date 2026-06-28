/**
 * Script xử lý tương tác cho trang Chi tiết Khóa học Đầu bếp
 * Đồ án: EduMaster - Hệ thống đào tạo nghề nghiệp
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- CHỨC NĂNG 1: ĐỒNG BỘ GIAO DIỆN SÁNG/TỐI (THEME SYNC) ---
    // Kiểm tra trạng thái theme từ localStorage để đảm bảo giao diện thống nhất toàn hệ thống [3, 4]
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };
    applyTheme();

    // Cập nhật giao diện ngay lập tức nếu người dùng đổi theme ở các trang khác [3]
    window.addEventListener('storage', (e) => {
        if (e.key === 'theme') applyTheme();
    });

    // --- CHỨC NĂNG 2: HIỂN THỊ/ẨN NỘI DUNG LỘ TRÌNH (TOGGLE CONTENT) ---
    // Thực hiện yêu cầu "Hiển thị/ẩn nội dung chi tiết" trong đề thi [2]
    const toggleBtn = document.querySelector('#detailToggle');
    const curriculumSection = document.querySelector('#curriculumSection');

    if (toggleBtn && curriculumSection) {
        toggleBtn.addEventListener('click', function() {
            // Kiểm tra trạng thái ẩn/hiện thông qua class 'd-none' của Bootstrap [5]
            const isHidden = curriculumSection.classList.contains('d-none');
            
            if (isHidden) {
                curriculumSection.classList.remove('d-none');
                this.textContent = 'Thu gọn lộ trình học';
                this.classList.replace('btn-outline-secondary', 'btn-info');
                
                // Cuộn mượt mà đến phần nội dung vừa hiện để tăng trải nghiệm UX [6]
                curriculumSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                curriculumSection.classList.add('d-none');
                this.textContent = 'Xem lộ trình học';
                this.classList.replace('btn-info', 'btn-outline-secondary');
            }
        });
    }

    // --- CHỨC NĂNG 3: PHẢN HỒI ĐĂNG KÝ (INTERACTION FEEDBACK) ---
    // Tạo tính năng tương tác sinh động cho nút "Đăng ký ngay" [7]
    const enrollBtn = document.querySelector('#enrollBtn');
    if (enrollBtn) {
        enrollBtn.addEventListener('click', function() {
            // Hiển thị thông báo chào mừng cho người dùng [8]
            alert('Cảm ơn bạn đã quan tâm! Chuyên viên EduMaster sẽ gọi điện tư vấn lộ trình Đầu bếp cho bạn ngay.');
            
            // Thay đổi trạng thái nút sau khi nhấn (DOM Manipulation) [9]
            this.textContent = 'Đang xử lý đăng ký...';
            this.className = 'btn btn-secondary btn-lg px-5 disabled';
            
            console.log('Học viên đã yêu cầu tư vấn khóa học Đầu bếp.');
        });
    }

});