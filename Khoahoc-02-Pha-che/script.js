/**
 * Script xử lý tương tác cho trang Chi tiết Khóa học Pha chế (Bartender)
 * Đồ án: EduMaster - Hệ thống đào tạo nghề nghiệp
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- CHỨC NĂNG 1: ĐỒNG BỘ GIAO DIỆN SÁNG/TỐI (THEME SYNC) ---
    // Kiểm tra trạng thái theme đã lưu từ localStorage để áp dụng đồng nhất [3, 4]
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };
    applyTheme();

    // Lắng nghe thay đổi storage để cập nhật theme ngay lập tức nếu người dùng đổi ở tab khác
    window.addEventListener('storage', (e) => {
        if (e.key === 'theme') applyTheme();
    });

    // --- CHỨC NĂNG 2: XỬ LÝ ĐĂNG KÝ KHÓA HỌC (INTERACTION) ---
    // Bắt sự kiện click vào nút Đăng ký học ngay [5, 6]
    const enrollBtn = document.querySelector('#enrollBtn');
    if (enrollBtn) {
        enrollBtn.addEventListener('click', function() {
            // Hiển thị thông báo phản hồi cho người dùng [7]
            alert('Cảm ơn bạn! Yêu cầu đăng ký khóa học Pha chế đã được gửi đi. EduMaster sẽ liên hệ với bạn trong vòng 24h.');
            
            // Thay đổi trạng thái nút sau khi nhấn (DOM Manipulation) [8]
            this.textContent = 'Đang xử lý đăng ký...';
            this.classList.replace('btn-success', 'btn-secondary');
            this.disabled = true;
            
            console.log('Học viên đã nhấn đăng ký khóa học Pha chế.');
        });
    }

    // --- CHỨC NĂNG 3: HIỂN THỊ/ẨN CHI TIẾT CHƯƠNG TRÌNH (TOGGLE CONTENT) ---
    // Thực hiện yêu cầu "Hiển thị/ẩn nội dung chi tiết" trong đề thi [2]
    const detailSection = document.querySelector('hr'); // Tìm vị trí sau đường kẻ ngang để chèn
    
    if (detailSection) {
        // Tạo nút Toggle động bằng JavaScript [9]
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'btn btn-outline-info btn-sm mt-3 mb-2';
        toggleBtn.textContent = 'Xem chi tiết lộ trình 4 tháng ▾';
        
        // Tạo khối nội dung chi tiết (Mặc định ẩn)
        const curriculumBox = document.createElement('div');
        curriculumBox.id = 'curriculumBox';
        curriculumBox.className = 'bg-white p-3 rounded border shadow-sm';
        curriculumBox.style.display = 'none'; // Ẩn mặc định [10]
        curriculumBox.innerHTML = `
            <h6 class="fw-bold text-info">Chương trình đào tạo:</h6>
            <ul class="small mb-0">
                <li><strong>Tháng 1:</strong> Kiến thức về các dòng rượu mạnh và công cụ Bar.</li>
                <li><strong>Tháng 2:</strong> Kỹ thuật pha chế Cocktail cổ điển và hiện đại.</li>
                <li><strong>Tháng 3:</strong> Sáng tạo Mocktail và nước ép trái cây dinh dưỡng.</li>
                <li><strong>Tháng 4:</strong> Biểu diễn Flair Bartending cơ bản và thi tốt nghiệp.</li>
            </ul>
        `;

        // Chèn các phần tử vào giao diện [9]
        detailSection.parentNode.insertBefore(toggleBtn, detailSection.nextSibling);
        toggleBtn.parentNode.insertBefore(curriculumBox, toggleBtn.nextSibling);

        // Xử lý sự kiện click để ẩn/hiện
        toggleBtn.addEventListener('click', function() {
            if (curriculumBox.style.display === 'none') {
                curriculumBox.style.display = 'block';
                this.textContent = 'Thu gọn lộ trình ▴';
            } else {
                curriculumBox.style.display = 'none';
                this.textContent = 'Xem chi tiết lộ trình 4 tháng ▾';
            }
        });
    }

});