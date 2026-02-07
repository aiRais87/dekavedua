// Data siswa placeholder
const siswaData = [
    { nama: "Aditya Pratama P.O", foto: "siswa1.jpg", ig: "https://www.instagram.com/aditya.ptrra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 01." },
    { nama: "Ahanda Rais P", foto: "siswa2.jpg", ig: "https://www.instagram.com/a_ra_is/?utm_source=ig_web_button_share_sheet", quotes: "Absen 02." },
    { nama: "Amanda Ayu Kirana", foto: "siswa3.jpg", ig: "https://www.instagram.com/ayrnaay_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 03." },
    { nama: "Azizah Luna F.M", foto: "siswa4.jpg", ig: "https://www.instagram.com/lagunaluna__/?utm_source=ig_web_button_share_sheet", quotes: "Absen 04." },
    { nama: "Daffa Uria F", foto: "siswa5.jpg", ig: "https://www.instagram.com/dapetodd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 05." },
    { nama: "Dwi Nur Islamiah", foto: "siswa6.jpg", ig: "https://www.instagram.com/dniislmy_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 06." },
    { nama: "Dwiyanti Asmaul Husna", foto: "siswa7.jpg", ig: "https://www.instagram.com/inii.husna07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 07." },
    { nama: "Habibah Fajriana", foto: "siswa8.jpg", ig: "https://www.instagram.com/habibahfj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 08." },
    { nama: "Hany Fadilatun N", foto: "siswa9.jpg", ig: "https://www.instagram.com/nyswaa.a/?utm_source=ig_web_button_share_sheet", quotes: "Absen 09." },
    { nama: "Ilfi Nur Diana", foto: "siswa10.jpg", ig: "https://www.instagram.com/finrdiana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 10." },
    { nama: "Intan Khuma'irah", foto: "siswa11.jpg", ig: "https://www.instagram.com/intan_k_c_l?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 11." },
    { nama: "Jessica Tan", foto: "siswa12.jpg", ig: "https://www.instagram.com/tuttut_jss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 12." },
    { nama: "Lailatul Nurul A", foto: "siswa13.jpg", ig: "https://www.instagram.com/nurulaprilliaa_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 13." },
    { nama: "Lena Agustin W", foto: "siswa14.jpg", ig: "https://www.instagram.com/llenaagustin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 14." },
    { nama: "Mega Aulia P", foto: "siswa15.jpg", ig: "https://www.instagram.com/megaaullp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 15." },
    { nama: "Mevilla Habibah", foto: "siswa16.jpg", ig: "https://www.instagram.com/mevila_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 16." },
    { nama: "M.Faiz Alfarokh", foto: "siswa17.jpg", ig: "https://www.instagram.com/pai1_/?utm_source=ig_web_button_share_sheet", quotes: "Absen 17." },
    { nama: "M.Fu'ad Zulkarnain", foto: "siswa18.jpg", ig: "https://www.instagram.com/fuad.zull/?utm_source=ig_web_button_share_sheet", quotes: "Absen 18." },
    { nama: "M.Fatkhur Rizki", foto: "siswa19.jpg", ig: "https://www.instagram.com/rixxzenn_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 19." },
    { nama: "M.Rosyid", foto: "siswa20.jpg", ig: "https://www.instagram.com/rsyidnys/?utm_source=ig_web_button_share_sheet", quotes: "Absen 20." },
    { nama: "M.Syarif Hidayatullah", foto: "siswa21.jpg", ig: "https://www.instagram.com/musahepp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 21." },
    { nama: "Nabila Adinda P", foto: "siswa22.jpg", ig: "https://www.instagram.com/nbblaa_nda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 22." },
    { nama: "Nadya Dwi A", foto: "siswa23.jpg", ig: "https://www.instagram.com/enadvv_/?utm_source=ig_web_button_share_sheet", quotes: "Absen 23." },
    { nama: "Nayla Aulia A", foto: "siswa24.jpg", ig: "https://www.instagram.com/__nayy.aulia_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 24." },
    { nama: "Nurul Shofa R.M", foto: "siswa25.jpg", ig: "https://www.instagram.com/nurulmariis_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 25." },
    { nama: "Olivia Dwi C.", foto: "siswa26.jpg", ig: "https://www.instagram.com/oliviachyn_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 26." },
    { nama: "Putri Riza A", foto: "siswa27.jpg", ig: "https://www.instagram.com/alyfrd.dvl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 27." },
    { nama: "Rania Maisaroh", foto: "siswa28.jpg", ig: "https://www.instagram.com/rania__maisa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 28." },
    { nama: "Regita Yunia N", foto: "siswa29.jpg", ig: "https://www.instagram.com/regita.yn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 29." },
    { nama: "Septya Ramadhani H", foto: "siswa30.jpg", ig: "https://www.instagram.com/ya_spttyy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 30." },
    { nama: "Siti Nurul K", foto: "siswa31.jpg", ig: "https://www.instagram.com/xyy_blablabla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 31." },
    { nama: "Sri Intan P", foto: "siswa32.jpg", ig: "https://www.instagram.com/sipand_ochii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 32." },
    { nama: "Verda Zerlinda S", foto: "siswa33.jpg", ig: "https://www.instagram.com/zrlind._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 33." },
    { nama: "Veronica Cantika P.P", foto: "siswa34.jpg", ig: "https://www.instagram.com/vrnc_cn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 34." },
    { nama: "Zabrina Salma B.C", foto: "siswa35.jpg", ig: "https://www.instagram.com/tsetsasha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 35." },
    { nama: "Zahratussyita", foto: "siswa36.jpg", ig: "https://www.instagram.com/jahrataci?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", quotes: "Absen 36." }
];

// Bungkus semua interaksi DOM agar aman
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const selector = this.getAttribute('href');
            const target = selector && selector !== '#' ? document.querySelector(selector) : null;
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Fungsi untuk hamburger menu di mobile (perbaikan: target container, bukan NodeList)
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav-links'); // container
    const navLinks = nav ? nav.querySelectorAll('a') : [];

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            document.body.classList.toggle('no-scroll', nav.classList.contains('active'));
            // toggle visual open state on hamburger
            hamburger.classList.toggle('open', nav.classList.contains('active'));
            // Update aria-expanded if exists
            if (hamburger.hasAttribute('aria-expanded')) {
                hamburger.setAttribute('aria-expanded', nav.classList.contains('active'));
            }
        });
    }

    // Close nav on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                document.body.classList.remove('no-scroll');
                if (hamburger && hamburger.hasAttribute('aria-expanded')) hamburger.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // Fungsi untuk animasi fade-in saat scroll
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
            }
        });
    }, observerOptions);

    // Terapkan animasi pada section
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Fungsi untuk modal galeri foto
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');

    if (modal && modalImg) {
        modal.style.display = 'none';
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.3s ease';

        // support opening modal from gallery and from boys/girls group images
        document.querySelectorAll('.galeri-img, .grup-card img, .boys-grid img, .girls-grid img').forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = 'flex';
                setTimeout(() => modal.style.opacity = '1', 10);
                modalImg.src = img.src;
                document.body.classList.add('no-scroll');
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.opacity = '0';
                setTimeout(() => modal.style.display = 'none', 300);
                document.body.classList.remove('no-scroll');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.opacity = '0';
                setTimeout(() => modal.style.display = 'none', 300);
                document.body.classList.remove('no-scroll');
            }
        });
    }

    // Fungsi untuk popup siswa
    const siswaModal = document.getElementById('siswa-modal');
    const modalSiswaImg = document.getElementById('modal-siswa-img');
    const modalSiswaNama = document.getElementById('modal-siswa-nama');
    const modalSiswaQuotes = document.getElementById('modal-siswa-quotes');
    const modalSiswaIg = document.getElementById('modal-siswa-ig');
    const closeSiswa = document.querySelector('.close-siswa');

    const siswaCards = document.querySelectorAll('.siswa-card');
    if (siswaCards.length) {
        siswaCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                const data = siswaData[index]; // Ambil data berdasarkan index
                if (data && siswaModal && modalSiswaImg && modalSiswaNama && modalSiswaQuotes && modalSiswaIg) {
                    modalSiswaImg.src = data.foto;
                    modalSiswaNama.textContent = data.nama;
                    modalSiswaQuotes.textContent = `"${data.quotes}"`;
                    modalSiswaIg.href = data.ig;
                    siswaModal.style.display = 'flex';
                }
            });
        });

        if (closeSiswa && siswaModal) {
            closeSiswa.addEventListener('click', () => { siswaModal.style.display = 'none'; });
            siswaModal.addEventListener('click', (e) => { if (e.target === siswaModal) siswaModal.style.display = 'none'; });
        }
    }

    // Custom cursor (cek ada dulu)
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }

    // Feature 1: lazy-load images by default
    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
        // optional: add decoding=async for better rendering
        if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
    });
});