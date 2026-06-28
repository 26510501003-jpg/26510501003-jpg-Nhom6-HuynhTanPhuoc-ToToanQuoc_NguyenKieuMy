// ======================================
// EduMaster - script.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // CONTACT FORM VALIDATION
    // ==========================

    const form = document.getElementById("contactForm");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const message =
                document.getElementById("message").value.trim();

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            const phoneRegex =
                /^[0-9]{9,11}$/;

            if(name.length < 3){

                alert("Họ tên phải có ít nhất 3 ký tự.");

                return;

            }

            if(!emailRegex.test(email)){

                alert("Email không hợp lệ.");

                return;

            }

            if(!phoneRegex.test(phone)){

                alert("Số điện thoại không hợp lệ.");

                return;

            }

            if(message.length < 10){

                alert("Vui lòng nhập nội dung liên hệ.");

                return;

            }

            alert("🎉 Gửi thông tin thành công!");

            form.reset();

        });

    }

    // ==========================
    // DARK MODE
    // ==========================

    const darkBtn =
        document.getElementById("darkModeBtn");

    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark");

    }

    if(darkBtn){

        darkBtn.addEventListener("click",()=>{

            document.body.classList.toggle("dark");

            if(document.body.classList.contains("dark")){

                localStorage.setItem("theme","dark");

            }else{

                localStorage.setItem("theme","light");

            }

        });

    }

    // ==========================
    // BACK TO TOP
    // ==========================

    const topBtn =
        document.getElementById("backToTop");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>300){

            topBtn.classList.add("show");

        }else{

            topBtn.classList.remove("show");

        }

    });

    if(topBtn){

        topBtn.addEventListener("click",()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    // ==========================
    // SMOOTH SCROLL
    // ==========================

    document.querySelectorAll('a[href^="#"]')
    .forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=
            document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    // ==========================
    // COURSE MODAL
    // ==========================

    const modalElement =
        document.getElementById("courseModal");

    if(modalElement){

        document
        .querySelectorAll(".course-card .btn")
        .forEach(button=>{

            button.addEventListener("mouseenter",()=>{

                button.classList.add("shadow");

            });

            button.addEventListener("mouseleave",()=>{

                button.classList.remove("shadow");

            });

        });

    }

    // ==========================
    // SCROLL ANIMATION
    // ==========================

    const observer =
    new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("fade-up");

            }

        });

    });

    document.querySelectorAll(
        ".feature-card,.course-card,.teacher-card"
    ).forEach(item=>{

        observer.observe(item);

    });

    // ==========================
    // SEARCH COURSE
    // ==========================

    const searchInput =
        document.getElementById("searchCourse");

    if(searchInput){

        searchInput.addEventListener("keyup",()=>{

            let keyword =
            searchInput.value.toLowerCase();

            let cards =
            document.querySelectorAll(".course-card");

            cards.forEach(card=>{

                let title =
                card.querySelector("h5")
                .textContent
                .toLowerCase();

                if(title.includes(keyword)){

                    card.style.display="block";

                }else{

                    card.style.display="none";

                }

            });

        });

    }

    // ==========================
    // FAQ
    // ==========================

    document.querySelectorAll(".faq-title")
    .forEach(item=>{

        item.addEventListener("click",()=>{

            item.nextElementSibling
            .classList.toggle("d-none");

        });

    });

    // ==========================
    // LOADING
    // ==========================

    window.addEventListener("load",()=>{

        document.body.classList.add("loaded");

    });

});
