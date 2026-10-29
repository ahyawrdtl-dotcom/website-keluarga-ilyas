/**
 * WEBSITE KELUARGA ILYAS - INTERACTIVE CORE ENGINE
 * Features:
 * - Ambient Sound Synthesizer (Web Audio API)
 * - Dynamic Lightbox with Next/Previous & Keyboard navigation
 * - Complete Member Profile Switcher with Tabbed Details & Birthday Countdown
 * - Dynamic Album Filtering & Real-time Search
 * - Live Event Countdown Clock
 * - Interactive Wishes Wall with LocalStorage Persistence & Likes
 * - Family Trivia Quiz with Interactive Scoring & Confetti
 * - Mobile Drawer & Scroll Progress Indicator
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Data Stores
       ========================================================================== */

    const membersData = {
        'nasruddin': {
            id: 'nasruddin',
            name: 'Nasruddin Majid',
            role: 'Ayah & Kepala Keluarga',
            birth: '2 Mei',
            birthMonth: 5,
            birthDay: 2,
            city: 'Jantho & Aceh',
            cover: 'assets/images/nasruddin_majid.png',
            about: 'Sosok ayah yang penuh wibawa, penyayang, dan menjadi tiang kokoh bagi keluarga besar. Pensiunan pegawai negeri yang selalu menanamkan nilai kejujuran, kesederhanaan, dan kerukunan bagi seluruh anak-anaknya.',
            quote: '“Kasih orang tua tak bertepi. Jadilah insan yang jujur, rendah hati, dan senantiasa menjaga tali persaudaraan ke mana pun kalian melangkah.”',
            hobbies: 'Berkebun buah & bunga, bermain catur, membaca buku sejarah',
            favorite: 'Kopi Gayo khas Aceh & Kuah Pliek U',
            values: 'Keteladanan, Integritas, Ketulusan',
            gallery: [
                'assets/images/nasruddin_majid.png',
                'assets/images/ayah_ibu_taman.jpg',
                'assets/images/lebaran_2026.jpg',
                'assets/images/hero_family.png'
            ]
        },
        'elfiyanti': {
            id: 'elfiyanti',
            name: 'Elfiyanti',
            role: 'Ibu & Jantung Rumah',
            birth: '22 September 1962',
            birthMonth: 9,
            birthDay: 22,
            city: 'Aceh, Lhokseumawe',
            cover: 'assets/images/elfiyanti.png',
            about: 'Jantung kehangatan keluarga besar Ilyas. Sosok ibu yang penuh kasih, kesabaran tanpa batas, dan senantiasa memastikan setiap sudut rumah dipenuhi kebahagiaan serta masakan lezat yang selalu dirindukan.',
            quote: '“Rumah terindah di dunia bukanlah istana megah, melainkan tempat di mana keluarga saling mendoakan dan saling memaafkan.”',
            hobbies: 'Memasak resep tradisional Aceh, merawat tanaman hias, menjahit',
            favorite: 'Kue Timphan, Mie Aceh kuah kental & Teh Manis Hangat',
            values: 'Kasih Sayang, Doa Tanpa Putus, Kelembutan',
            gallery: [
                'assets/images/elfiyanti.png',
                'assets/images/ayah_ibu_taman.jpg',
                'assets/images/hero_dinner.png',
                'assets/images/lebaran_2026.jpg'
            ]
        },
        'alfinas': {
            id: 'alfinas',
            name: 'Alfinas Yudhistira',
            role: 'Anak Pertama (Sulung)',
            birth: '8 Mei 1997',
            birthMonth: 5,
            birthDay: 8,
            city: 'Aceh, Lhokseumawe',
            cover: 'assets/images/alfinas_yudhistira.png',
            about: 'Putra sulung keluarga Ilyas yang tangguh, mandiri, dan bertanggung jawab. Selalu sigap melindungi serta menjadi teladan dan tempat bersandar bagi adik-adiknya dalam berbagai situasi.',
            quote: '“Menjadi anak pertama adalah tentang menjaga amanah, melindungi adik-adik, dan membanggakan senyum Ayah dan Ibu.”',
            hobbies: 'Eksplorasi otomotif, teknologi terkini, olahraga basket & gym',
            favorite: 'Nasi Gurih Aceh & Kopi Sanger Dingin',
            values: 'Tanggung Jawab, Loyalitas, Kerja Keras',
            gallery: [
                'assets/images/alfinas_yudhistira.png',
                'assets/images/hero_family.png',
                'assets/images/lebaran_2026.jpg'
            ]
        },
        'yudita': {
            id: 'yudita',
            name: 'Yudita Octafiyanna',
            role: 'Anak Kedua',
            birth: '12 November 1998',
            birthMonth: 11,
            birthDay: 12,
            city: 'Aceh, Lhokseumawe',
            cover: 'assets/images/yudita_octa.png',
            about: 'Putri kedua yang penuh ide kreatif, ceria, dan selalu membawa tawa di rumah. Memiliki kepekaan rasa yang halus dan pandai merangkul semua orang dengan kehangatannya.',
            quote: '“Hidup adalah kanvas indah. Warnai hari-hari dengan tawa, kasih sayang, dan rasa syukur yang tulus.”',
            hobbies: 'Desain visual, fotografi estetika, baking kue modern',
            favorite: 'Ayam Tangkap, Roti Bakar & Matcha Latte',
            values: 'Kreativitas, Keceriaan, Empati',
            gallery: [
                'assets/images/yudita_octa.png',
                'assets/images/hero_family.png',
                'assets/images/lebaran_2026.jpg'
            ]
        },
        'rizka': {
            id: 'rizka',
            name: 'Rizka Agustina',
            role: 'Anak Ketiga',
            birth: '10 Agustus 2002',
            birthMonth: 8,
            birthDay: 10,
            city: 'Aceh, Lhokseumawe',
            cover: 'assets/images/rizka_agustina.png',
            about: 'Putri ketiga yang tekun, ramah, dan berprestasi. Sosok pendengar yang setia, penuh perhatian terhadap kesehatan orang tua, dan menjadi jembatan harmonis antar saudara.',
            quote: '“Setiap usaha yang diiringi doa restu orang tua akan membuka pintu keberkahan yang tak terduga.”',
            hobbies: 'Membaca buku literatur, traveling alam bebas, journaling',
            favorite: 'Roti Canai Aceh, Sate Gurita & Teh Tarik Hangat',
            values: 'Ketekunan, Kelembutan Hati, Pengabdian',
            gallery: [
                'assets/images/rizka_agustina.png',
                'assets/images/hero_family.png',
                'assets/images/lebaran_2026.jpg'
            ]
        },
        'ahya': {
            id: 'ahya',
            name: 'Wirdatul Ahya',
            role: 'Anak Keempat (Kembar)',
            birth: '23 Mei 2005',
            birthMonth: 5,
            birthDay: 23,
            city: 'Aceh, Lhokseumawe',
            cover: 'assets/images/wirdatul_ahya.png',
            about: 'Anak keempat keluarga Ilyas, saudara kembar dari Wirdatul Musfirah. Memiliki jiwa petualang yang dinamis, penuh energi, berani mengeksplorasi dunia digital dan ide-ide inovatif baru.',
            quote: '“Lahir sebagai kembar adalah anugerah terindah. Melangkah bersama, saling menguatkan mimpi, dan pantang menyerah.”',
            hobbies: 'Web programming, desain antarmuka, hunting foto & kuliner',
            favorite: 'Sate Matang khas Bireuen & Es Jeruk Segar',
            values: 'Inovasi, Keberanian, Solidaritas',
            gallery: [
                'assets/images/ahya_galeri_1.png',
                'assets/images/ahya_galeri_2.jpg',
                'assets/images/ahya_galeri_3.jpg',
                'assets/images/ahya_galeri_4.png',
                'assets/images/ahya_galeri_5.jpg',
                'assets/images/ahya_galeri_6.jpg',
                'assets/images/ahya_galeri_7.png',
                'assets/images/ahya_galeri_8.png'
            ]
        },
        'musfirah': {
            id: 'musfirah',
            name: 'Wirdatul Musfirah',
            role: 'Anak Kelima / Bungsu (Kembar)',
            birth: '23 Mei 2005',
            birthMonth: 5,
            birthDay: 23,
            city: 'Aceh, Lhokseumawe',
            cover: 'assets/images/wirdatul_musfirah.png',
            about: 'Si bungsu kembar yang manis, penyayang, dan menjadi penyejuk hati keluarga. Memiliki ikatan telepati dan batin yang sangat erat dengan saudara kembarnya, Wirdatul Ahya.',
            quote: '“Bahagia itu sederhana: melihat senyum di wajah Ayah, Ibu, dan kakak-adik semua berkumpul bersama.”',
            hobbies: 'Menulis cerita pendek, mendengarkan musik akustik, merajut',
            favorite: 'Martabak Telur Kari Aceh & Jus Alpukat Kocok',
            values: 'Ketulusan, Kedamaian, Kesetiaan',
            gallery: [
                'assets/images/wirdatul_musfirah.png',
                'assets/images/hero_family.png',
                'assets/images/lebaran_2026.jpg'
            ]
        }
    };

    const albumCollection = [
        {
            src: 'assets/images/lebaran_2026.jpg',
            title: 'Lebaran Idul Fitri 2026',
            subtitle: 'Momen silaturahmi akbar dan maaf-memaafkan keluarga besar Ilyas',
            category: 'lebaran keluarga'
        },
        {
            src: 'assets/images/ayah_ibu_taman.jpg',
            title: 'Harmoni Kasih Ayah & Ibu',
            subtitle: 'Potret penuh senyum di taman kenangan yang sejuk dan asri',
            category: 'orangtua kenangan'
        },
        {
            src: 'assets/images/hero_dinner.png',
            title: 'Makan Malam Hangat Keluarga',
            subtitle: 'Momen berkumpul bersama di meja makan, bercerita dan tertawa riang',
            category: 'keluarga momen'
        },
        {
            src: 'assets/images/hero_family.png',
            title: 'Kompak Kakak Beradik',
            subtitle: 'Generasi muda keluarga Ilyas yang saling mendukung satu sama lain',
            category: 'anak keluarga'
        },
        {
            src: 'assets/images/hero_old_photo.png',
            title: 'Nostalgia Tempo Dulu',
            subtitle: 'Jejak awal berdirinya keluarga di tanah rencong Aceh tercinta',
            category: 'nostalgia kenangan'
        },
        {
            src: 'assets/images/ahya_galeri_1.png',
            title: 'Senyum Ceria Ahya',
            subtitle: 'Potret ekspresi santai dan penuh semangat hari ini',
            category: 'anak momen'
        },
        {
            src: 'assets/images/ahya_galeri_2.jpg',
            title: 'Jalan Santai Menjelang Senja',
            subtitle: 'Menikmati udara sejuk dan suasana asri sekitar rumah',
            category: 'anak momen'
        },
        {
            src: 'assets/images/ahya_galeri_3.jpg',
            title: 'Eksplorasi Sudut Kota',
            subtitle: 'Momen rehat sejenak dari rutinitas dan belajar hal baru',
            category: 'anak momen'
        },
        {
            src: 'assets/images/ahya_galeri_4.png',
            title: 'Warna-Warni Kebersamaan',
            subtitle: 'Senyuman hangat yang selalu menceriakan suasana keluarga',
            category: 'anak momen'
        },
        {
            src: 'assets/images/ahya_galeri_5.jpg',
            title: 'Suasana Ceria di Luar',
            subtitle: 'Menikmati waktu luang dengan penuh rasa syukur',
            category: 'anak momen'
        },
        {
            src: 'assets/images/ahya_galeri_6.jpg',
            title: 'Momen Santai Berdua',
            subtitle: 'Kebersamaan hangat yang terjalin manis setiap hari',
            category: 'anak momen'
        },
        {
            src: 'assets/images/ahya_galeri_7.png',
            title: 'Potret Penuh Karakter',
            subtitle: 'Menatap masa depan dengan tekad yang kokoh dan optimis',
            category: 'anak momen'
        },
        {
            src: 'assets/images/ahya_galeri_8.png',
            title: 'Kenangan Abadi Bersama',
            subtitle: 'Tiap detik kebersamaan terpatri indah dalam album digital',
            category: 'anak momen'
        },
        {
            src: 'assets/images/media_.png',
            title: 'Koleksi Arsip Bersejarah',
            subtitle: 'Dokumentasi perjalanan panjang Keluarga Ilyas dari masa ke masa',
            category: 'kenangan nostalgia'
        }
    ];

    const quizQuestions = [
        {
            question: 'Di kota manakah akar dan kediaman utama keluarga besar Ilyas bermula?',
            options: ['Banda Aceh & Jantho', 'Aceh, Lhokseumawe', 'Medan, Sumatera Utara', 'Yogyakarta'],
            answer: 1,
            fact: 'Keluarga besar Ilyas berakar kuat di Lhokseumawe dan Jantho, Aceh sejak tahun 1996.'
        },
        {
            question: 'Siapakah dua putri kembar yang istimewa di dalam keluarga Ilyas?',
            options: [
                'Yudita Octafiyanna & Rizka Agustina',
                'Wirdatul Ahya & Wirdatul Musfirah',
                'Elfiyanti & Wirdatul Ahya',
                'Rizka Agustina & Wirdatul Musfirah'
            ],
            answer: 1,
            fact: 'Wirdatul Ahya dan Wirdatul Musfirah lahir pada tanggal yang sama, 23 Mei 2005!'
        },
        {
            question: 'Siapakah putra sulung (anak pertama) yang menjadi panutan adik-adiknya?',
            options: ['Alfinas Yudhistira', 'Nasruddin Majid', 'Rizka Agustina', 'Wirdatul Ahya'],
            answer: 0,
            fact: 'Alfinas Yudhistira lahir pada 8 Mei 1997 sebagai anak pertama keluarga Ilyas.'
        },
        {
            question: 'Kapan tanggal milad / hari lahir Ibu Elfiyanti tercinta?',
            options: ['2 Mei', '8 Mei', '22 September 1962', '12 November'],
            answer: 2,
            fact: 'Ibu Elfiyanti lahir pada tanggal 22 September 1962 dan menjadi penyejuk rumah tangga.'
        },
        {
            question: 'Apa hobi yang sangat digemari Ayah Nasruddin Majid di waktu senggang?',
            options: [
                'Bermain catur dan berkebun',
                'Bermain futsal dan tenis',
                'Memancing di laut lepas',
                'Mendaki gunung'
            ],
            answer: 0,
            fact: 'Ayah Nasruddin Majid sangat gemar merawat tanaman buah di kebun dan bermain catur strategi.'
        }
    ];

    /* ==========================================================================
       2. Scroll Progress & Sticky Navbar
       ========================================================================== */
    const progressBar = document.getElementById('scrollProgressBar');
    const navbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-links a');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;

        if (progressBar) {
            progressBar.style.width = progress + '%';
        }

        if (navbar) {
            if (scrollTop > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Active link highlighting based on scroll position
        const sections = document.querySelectorAll('section[id]');
        let currentId = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            const height = sec.offsetHeight;
            if (scrollTop >= top && scrollTop < top + height) {
                currentId = sec.getAttribute('id');
            }
        });

        if (currentId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Smooth scroll for nav anchor clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    closeMobileDrawer();
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* ==========================================================================
       3. Mobile Navigation Drawer
       ========================================================================== */
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerBackdrop = document.getElementById('drawerBackdrop');

    function openMobileDrawer() {
        mobileNavToggle.classList.add('open');
        mobileDrawer.classList.add('open');
        drawerBackdrop.classList.add('open');
        document.body.classList.add('no-scroll');
    }

    function closeMobileDrawer() {
        if (mobileNavToggle) mobileNavToggle.classList.remove('open');
        if (mobileDrawer) mobileDrawer.classList.remove('open');
        if (drawerBackdrop) drawerBackdrop.classList.remove('open');
        document.body.classList.remove('no-scroll');
    }

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            if (mobileDrawer.classList.contains('open')) {
                closeMobileDrawer();
            } else {
                openMobileDrawer();
            }
        });
    }

    if (drawerBackdrop) {
        drawerBackdrop.addEventListener('click', closeMobileDrawer);
    }

    /* ==========================================================================
       4. Web Audio Ambient Synthesizer (Zero Dependencies)
       ========================================================================== */
    const soundToggleBtn = document.getElementById('soundToggleBtn');
    let audioCtx = null;
    let isPlayingAudio = false;
    let audioLoopTimer = null;

    // Sweet pentatonic warm chord progression
    const notesFreq = [
        261.63, // C4
        293.66, // D4
        329.63, // E4
        392.00, // G4
        440.00, // A4
        523.25, // C5
        587.33, // D5
        659.25  // E5
    ];

    function playSoftChime(freq, timeOffset, duration = 1.2) {
        if (!audioCtx) return;
        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime + timeOffset);

            // Soft envelope: attack, decay, gentle release
            gain.gain.setValueAtTime(0, audioCtx.currentTime + timeOffset);
            gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + timeOffset + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + timeOffset + duration);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start(audioCtx.currentTime + timeOffset);
            osc.stop(audioCtx.currentTime + timeOffset + duration);
        } catch (e) {
            console.error('Audio playback error', e);
        }
    }

    function startMelodyLoop() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const pattern = [0, 2, 4, 3, 5, 4, 2, 1];
        let step = 0;

        function tick() {
            if (!isPlayingAudio) return;
            const noteIndex = pattern[step % pattern.length];
            playSoftChime(notesFreq[noteIndex], 0, 1.4);
            // Occasional harmony note
            if (step % 2 === 0) {
                playSoftChime(notesFreq[(noteIndex + 2) % notesFreq.length], 0.15, 1.2);
            }
            step++;
            audioLoopTimer = setTimeout(tick, 900);
        }

        tick();
    }

    function stopMelodyLoop() {
        isPlayingAudio = false;
        if (audioLoopTimer) {
            clearTimeout(audioLoopTimer);
            audioLoopTimer = null;
        }
    }

    if (soundToggleBtn) {
        soundToggleBtn.addEventListener('click', () => {
            if (!isPlayingAudio) {
                isPlayingAudio = true;
                soundToggleBtn.classList.add('playing');
                soundToggleBtn.querySelector('.sound-label').textContent = 'Suasana Hangat';
                startMelodyLoop();
                showToast('🎵 Suasana melodi keluarga dinyalakan.');
            } else {
                stopMelodyLoop();
                soundToggleBtn.classList.remove('playing');
                soundToggleBtn.querySelector('.sound-label').textContent = 'Musik Suasana';
                showToast('Suasana musik dinonaktifkan.');
            }
        });
    }

    /* ==========================================================================
       5. Album & Gallery Filtering & Lightbox
       ========================================================================== */
    const albumGrid = document.getElementById('albumGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const albumSearchInput = document.getElementById('albumSearchInput');

    let currentLightboxIndex = 0;
    let filteredPhotos = [...albumCollection];

    function renderAlbum(items) {
        if (!albumGrid) return;
        albumGrid.innerHTML = '';

        if (items.length === 0) {
            albumGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
                    <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">Tidak ada foto kenangan yang cocok.</p>
                    <p style="font-size: 0.9rem;">Coba gunakan kata kunci pencarian lain atau pilih kategori Semua.</p>
                </div>
            `;
            return;
        }

        items.forEach((photo, index) => {
            const card = document.createElement('div');
            card.className = 'album-card';
            card.setAttribute('data-category', photo.category);
            card.setAttribute('data-index', index);

            // Primary category badge text
            const firstCat = photo.category.split(' ')[0];
            const badgeLabel = firstCat.charAt(0).toUpperCase() + firstCat.slice(1);

            card.innerHTML = `
                <img src="${photo.src}" alt="${photo.title}" loading="lazy">
                <div class="album-card-overlay">
                    <div class="album-card-tags">
                        <span class="album-tag">${badgeLabel}</span>
                    </div>
                    <h3 class="album-card-title">${photo.title}</h3>
                    <p class="album-card-subtitle">
                        <span>📸 Klik untuk melihat detail</span>
                    </p>
                </div>
            `;

            card.addEventListener('click', () => {
                openLightbox(index);
            });

            albumGrid.appendChild(card);
        });
    }

    // Initial Render
    renderAlbum(filteredPhotos);

    // Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterVal = btn.getAttribute('data-filter');
            applyFilters(filterVal, albumSearchInput ? albumSearchInput.value : '');
        });
    });

    // Search Input
    if (albumSearchInput) {
        albumSearchInput.addEventListener('input', (e) => {
            const activeBtn = document.querySelector('.filter-btn.active');
            const activeFilter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
            applyFilters(activeFilter, e.target.value);
        });
    }

    function applyFilters(category, query) {
        const q = query.toLowerCase().trim();
        filteredPhotos = albumCollection.filter(photo => {
            const matchCategory = (category === 'all' || photo.category.includes(category));
            const matchQuery = !q || (photo.title.toLowerCase().includes(q) || photo.subtitle.toLowerCase().includes(q));
            return matchCategory && matchQuery;
        });
        renderAlbum(filteredPhotos);
    }

    // Lightbox Functionality
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
    const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
    const lightboxNextBtn = document.getElementById('lightboxNextBtn');

    function openLightbox(index) {
        if (!filteredPhotos[index]) return;
        currentLightboxIndex = index;
        updateLightboxView();
        lightboxModal.classList.add('show');
        document.body.classList.add('no-scroll');
    }

    function closeLightbox() {
        if (lightboxModal) {
            lightboxModal.classList.remove('show');
            document.body.classList.remove('no-scroll');
        }
    }

    function updateLightboxView() {
        const item = filteredPhotos[currentLightboxIndex];
        if (!item) return;

        lightboxImg.src = item.src;
        lightboxImg.alt = item.title;
        lightboxTitle.textContent = item.title;
        lightboxDesc.textContent = item.subtitle;
        if (lightboxCounter) {
            lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${filteredPhotos.length}`;
        }
    }

    function nextLightboxPhoto() {
        currentLightboxIndex = (currentLightboxIndex + 1) % filteredPhotos.length;
        updateLightboxView();
    }

    function prevLightboxPhoto() {
        currentLightboxIndex = (currentLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
        updateLightboxView();
    }

    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextLightboxPhoto);
    if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevLightboxPhoto);

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) closeLightbox();
        });
    }

    // Keyboard Navigation for Lightbox
    window.addEventListener('keydown', (e) => {
        if (lightboxModal && lightboxModal.classList.contains('show')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextLightboxPhoto();
            if (e.key === 'ArrowLeft') prevLightboxPhoto();
        }
    });

    /* ==========================================================================
       6. Member Profiles Switcher & Details
       ========================================================================== */
    const memberItems = document.querySelectorAll('.member-item');
    const detailCover = document.getElementById('detailCover');
    const detailName = document.getElementById('detailName');
    const detailRole = document.getElementById('detailRole');
    const detailCity = document.getElementById('detailCity');
    const detailBirth = document.getElementById('detailBirth');
    const detailRoleCard = document.getElementById('detailRoleCard');
    const detailAbout = document.getElementById('detailAbout');
    const detailQuote = document.getElementById('detailQuote');
    const detailHobbies = document.getElementById('detailHobbies');
    const detailFavorite = document.getElementById('detailFavorite');
    const detailValues = document.getElementById('detailValues');
    const btnOpenPersonalGallery = document.getElementById('btnOpenPersonalGallery');
    const btnWishMember = document.getElementById('btnWishMember');

    function calculateDaysUntilBirthday(month, day) {
        if (!month || !day) return null;
        const now = new Date();
        const thisYear = now.getFullYear();
        let nextBday = new Date(thisYear, month - 1, day);
        
        if (now > nextBday && (now.getDate() !== nextBday.getDate() || now.getMonth() !== nextBday.getMonth())) {
            nextBday = new Date(thisYear + 1, month - 1, day);
        }

        const diffTime = nextBday - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    function switchMember(memberKey) {
        const data = membersData[memberKey];
        if (!data) return;

        memberItems.forEach(item => {
            if (item.getAttribute('data-member') === memberKey) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        const detailPane = document.querySelector('.member-detail-pane');
        if (detailPane) {
            detailPane.style.opacity = '0.4';
            detailPane.style.transform = 'translateY(4px)';
            detailPane.style.transition = 'all 0.25s ease';
        }

        setTimeout(() => {
            detailCover.src = data.cover;
            detailCover.alt = data.name;
            detailName.textContent = data.name;
            detailRole.textContent = data.role;
            detailCity.textContent = data.city;
            detailBirth.textContent = data.birth;
            detailRoleCard.textContent = data.role;
            detailAbout.textContent = data.about;
            detailQuote.textContent = data.quote;
            if (detailHobbies) detailHobbies.textContent = data.hobbies;
            if (detailFavorite) detailFavorite.textContent = data.favorite;
            if (detailValues) detailValues.textContent = data.values;

            // Birthday indicator
            const daysLeft = calculateDaysUntilBirthday(data.birthMonth, data.birthDay);
            const bdayBadge = document.getElementById('detailBirthdayCountdown');
            if (bdayBadge) {
                if (daysLeft === 0) {
                    bdayBadge.textContent = '🎂 Hari Ini Ulang Tahun!';
                    bdayBadge.style.display = 'inline-flex';
                } else if (daysLeft !== null && daysLeft <= 60) {
                    bdayBadge.textContent = `🎂 ${daysLeft} hari lagi menuju milad`;
                    bdayBadge.style.display = 'inline-flex';
                } else {
                    bdayBadge.style.display = 'none';
                }
            }

            // Gallery Button state
            if (btnOpenPersonalGallery) {
                btnOpenPersonalGallery.setAttribute('data-member', memberKey);
                btnOpenPersonalGallery.innerHTML = `📸 Lihat Galeri Foto (${data.gallery ? data.gallery.length : 0})`;
            }

            // Wish Member button state
            if (btnWishMember) {
                btnWishMember.setAttribute('data-name', data.name);
            }

            if (detailPane) {
                detailPane.style.opacity = '1';
                detailPane.style.transform = 'translateY(0)';
            }
        }, 150);
    }

    memberItems.forEach(item => {
        item.addEventListener('click', () => {
            const key = item.getAttribute('data-member');
            switchMember(key);
        });
    });

    // Wish Member Quick Action: scrolls to wish form and prefills
    if (btnWishMember) {
        btnWishMember.addEventListener('click', () => {
            const targetName = btnWishMember.getAttribute('data-name');
            const wishesSection = document.getElementById('doa-pesan');
            const wishRecipientSelect = document.getElementById('wishRecipient');
            if (wishRecipientSelect && targetName) {
                wishRecipientSelect.value = targetName;
            }
            if (wishesSection) {
                window.scrollTo({
                    top: wishesSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Tabs inside Member Details
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetTab = btn.getAttribute('data-tab');
            const panel = document.getElementById(targetTab);
            if (panel) panel.classList.add('active');
        });
    });

    /* ==========================================================================
       7. Personal Gallery Modal
       ========================================================================== */
    const personalGalleryModal = document.getElementById('personalGalleryModal');
    const personalGalleryModalClose = document.getElementById('personalGalleryModalClose');
    const personalGalleryTitle = document.getElementById('personalGalleryTitle');
    const personalGalleryGrid = document.getElementById('personalGalleryGrid');

    if (btnOpenPersonalGallery) {
        btnOpenPersonalGallery.addEventListener('click', () => {
            const memberKey = btnOpenPersonalGallery.getAttribute('data-member') || 'ahya';
            const data = membersData[memberKey];
            if (!data) return;

            personalGalleryTitle.textContent = `Galeri Foto ${data.name}`;
            personalGalleryGrid.innerHTML = '';

            if (data.gallery && data.gallery.length > 0) {
                data.gallery.forEach((imgSrc, idx) => {
                    const thumb = document.createElement('div');
                    thumb.className = 'personal-gal-thumb';
                    thumb.innerHTML = `<img src="${imgSrc}" alt="${data.name} Foto ${idx + 1}" loading="lazy">`;
                    thumb.addEventListener('click', () => {
                        // Open main lightbox for this picture
                        filteredPhotos = [{
                            src: imgSrc,
                            title: `Foto ${data.name} (${idx + 1}/${data.gallery.length})`,
                            subtitle: `Koleksi galeri pribadi ${data.name}`
                        }];
                        openLightbox(0);
                    });
                    personalGalleryGrid.appendChild(thumb);
                });
            } else {
                personalGalleryGrid.innerHTML = `
                    <p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 2rem;">
                        Belum ada foto galeri khusus untuk anggota ini.
                    </p>
                `;
            }

            personalGalleryModal.classList.add('show');
            document.body.classList.add('no-scroll');
        });
    }

    if (personalGalleryModalClose) {
        personalGalleryModalClose.addEventListener('click', () => {
            personalGalleryModal.classList.remove('show');
            document.body.classList.remove('no-scroll');
        });
    }

    if (personalGalleryModal) {
        personalGalleryModal.addEventListener('click', (e) => {
            if (e.target === personalGalleryModal) {
                personalGalleryModal.classList.remove('show');
                document.body.classList.remove('no-scroll');
            }
        });
    }

    // Family Tree Node Click Listener (scrolls to and selects member)
    const treeCards = document.querySelectorAll('.tree-card[data-member]');
    treeCards.forEach(card => {
        card.addEventListener('click', () => {
            const memberKey = card.getAttribute('data-member');
            switchMember(memberKey);
            const memberSection = document.getElementById('anggota');
            if (memberSection) {
                window.scrollTo({
                    top: memberSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==========================================================================
       8. Live Event Countdown Clock
       ========================================================================== */
    const daysEl = document.getElementById('countDays');
    const hoursEl = document.getElementById('countHours');
    const minsEl = document.getElementById('countMins');
    const secsEl = document.getElementById('countSecs');

    // Target: Next upcoming milestone (e.g. Si Kembar Milad or Ibu Milad)
    function getNextEventTarget() {
        const now = new Date();
        const currentYear = now.getFullYear();

        // Potential upcoming events in order
        const candidates = [
            new Date(currentYear, 4, 2, 0, 0, 0),   // Milad Ayah: 2 Mei
            new Date(currentYear, 4, 8, 0, 0, 0),   // Milad Alfinas: 8 Mei
            new Date(currentYear, 4, 23, 0, 0, 0),  // Milad Si Kembar Ahya & Musfirah: 23 Mei
            new Date(currentYear, 7, 10, 0, 0, 0),  // Milad Rizka: 10 Agustus
            new Date(currentYear, 8, 22, 0, 0, 0),  // Milad Ibu Elfiyanti: 22 September
            new Date(currentYear, 10, 12, 0, 0, 0)  // Milad Yudita: 12 November
        ];

        for (let target of candidates) {
            if (target > now) return target;
        }

        // If all passed this year, wrap to first next year
        return new Date(currentYear + 1, 4, 2, 0, 0, 0);
    }

    const targetDate = getNextEventTarget();

    function updateCountdown() {
        if (!daysEl || !hoursEl || !minsEl || !secsEl) return;
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance < 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minsEl.textContent = '00';
            secsEl.textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minsEl.textContent = String(minutes).padStart(2, '0');
        secsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Event Reminder Buttons
    const eventNotifyBtns = document.querySelectorAll('.btn-event-notify');
    eventNotifyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const eventTitle = btn.getAttribute('data-event-title') || 'Acara Keluarga';
            showToast(`📅 Jadwal "${eventTitle}" berhasil disimpan ke pengingat!`);
        });
    });

    /* ==========================================================================
       9. Interactive Wishes Wall (Dinding Doa)
       ========================================================================== */
    const wishForm = document.getElementById('wishForm');
    const wishesFeed = document.getElementById('wishesFeed');
    const emojiRadios = document.querySelectorAll('.emoji-radio');
    let selectedEmoji = '❤️';

    // Default seed wishes
    const defaultWishes = [
        {
            id: 1,
            author: 'Nasruddin Majid (Ayah)',
            relationship: 'Ayah',
            recipient: 'Semua Keluarga',
            message: 'Semoga anak-anak Ayah dan Ibu selalu diberi kesehatan, kelapangan rezeki, dan terus saling menggenggam tangan dalam suka dan duka. Aamiin.',
            sticker: '🤲',
            date: 'Baru saja',
            likes: 12,
            liked: false
        },
        {
            id: 2,
            author: 'Elfiyanti (Ibu)',
            relationship: 'Ibu',
            recipient: 'Semua Anak Tercinta',
            message: 'Doa Ibu tak pernah henti menyertai setiap embusan nafas kalian. Pulanglah sesering mungkin, pintu dan masakan hangat rumah selalu terbuka lebar.',
            sticker: '🌸',
            date: 'Hari ini',
            likes: 18,
            liked: false
        },
        {
            id: 3,
            author: 'Alfinas Yudhistira',
            relationship: 'Anak Pertama',
            recipient: 'Ayah & Ibu',
            message: 'Terima kasih atas segala bimbingan dan peluh Ayah dan Ibu membesarkan kami berlima. Sehat-sehat selalu, kami sangat mencintai kalian berdua!',
            sticker: '✨',
            date: 'Kemarin',
            likes: 9,
            liked: false
        },
        {
            id: 4,
            author: 'Wirdatul Ahya & Musfirah',
            relationship: 'Si Kembar',
            recipient: 'Keluarga Besar Ilyas',
            message: 'Bangga dan bersyukur tak terhingga memiliki keluarga terhangat di dunia. Semoga ikatan kasih sayang keluarga kita abadi selamanya!',
            sticker: '🥳',
            date: '2 hari lalu',
            likes: 15,
            liked: false
        }
    ];

    function getSavedWishes() {
        const saved = localStorage.getItem('keluarga_ilyas_wishes');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                return defaultWishes;
            }
        }
        return defaultWishes;
    }

    function saveWishes(wishes) {
        localStorage.setItem('keluarga_ilyas_wishes', JSON.stringify(wishes));
    }

    let allWishes = getSavedWishes();

    function renderWishes() {
        if (!wishesFeed) return;
        wishesFeed.innerHTML = '';

        allWishes.forEach(wish => {
            const card = document.createElement('div');
            card.className = 'wish-card';

            const firstLetter = wish.author.charAt(0).toUpperCase();

            card.innerHTML = `
                <div class="wish-header">
                    <div class="wish-author">
                        <div class="wish-avatar">${firstLetter}</div>
                        <div class="wish-author-info">
                            <h4>${escapeHtml(wish.author)}</h4>
                            <span>Untuk: <strong>${escapeHtml(wish.recipient || 'Semua')}</strong> &bull; ${wish.date}</span>
                        </div>
                    </div>
                    <div class="wish-sticker">${wish.sticker}</div>
                </div>
                <p>${escapeHtml(wish.message)}</p>
                <div class="wish-footer">
                    <span>${escapeHtml(wish.relationship || 'Keluarga')}</span>
                    <button class="wish-like-btn ${wish.liked ? 'liked' : ''}" data-id="${wish.id}">
                        <span>${wish.liked ? '❤️' : '🤍'}</span>
                        <span class="like-count">${wish.likes}</span> Suka
                    </button>
                </div>
            `;

            // Like action
            const likeBtn = card.querySelector('.wish-like-btn');
            likeBtn.addEventListener('click', () => {
                wish.liked = !wish.liked;
                wish.likes += wish.liked ? 1 : -1;
                saveWishes(allWishes);
                renderWishes();
            });

            wishesFeed.appendChild(card);
        });
    }

    renderWishes();

    // Emoji Radio Selector
    emojiRadios.forEach(radio => {
        radio.addEventListener('click', () => {
            emojiRadios.forEach(r => r.classList.remove('selected'));
            radio.classList.add('selected');
            selectedEmoji = radio.getAttribute('data-emoji') || '❤️';
        });
    });

    // Form Submission
    if (wishForm) {
        wishForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('wishAuthor');
            const relationInput = document.getElementById('wishRelation');
            const recipientInput = document.getElementById('wishRecipient');
            const messageInput = document.getElementById('wishMessage');

            const author = nameInput.value.trim();
            const message = messageInput.value.trim();

            if (!author || !message) {
                showToast('Harap isi nama dan pesan doa Anda.');
                return;
            }

            const newWish = {
                id: Date.now(),
                author: author,
                relationship: relationInput.value || 'Keluarga',
                recipient: recipientInput.value || 'Semua Keluarga',
                message: message,
                sticker: selectedEmoji,
                date: 'Baru saja',
                likes: 1,
                liked: true
            };

            allWishes.unshift(newWish);
            saveWishes(allWishes);
            renderWishes();

            messageInput.value = '';
            showToast('✨ Pesan dan doa Anda telah berhasil disampaikan!');
        });
    }

    /* ==========================================================================
       10. Family Trivia Quiz Engine
       ========================================================================== */
    const quizCard = document.getElementById('quizCard');
    let currentQuizIndex = 0;
    let quizScore = 0;
    let quizAnswered = false;

    function renderQuizQuestion() {
        if (!quizCard) return;

        if (currentQuizIndex >= quizQuestions.length) {
            renderQuizResult();
            return;
        }

        const q = quizQuestions[currentQuizIndex];
        quizAnswered = false;

        const progressPercent = ((currentQuizIndex + 1) / quizQuestions.length) * 100;

        quizCard.innerHTML = `
            <div class="quiz-progress-bar">
                <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
            </div>
            <div class="quiz-header">
                <span class="quiz-step-count">Pertanyaan ${currentQuizIndex + 1} dari ${quizQuestions.length}</span>
                <span class="badge badge-primary">Skor: ${quizScore * 20} Poin</span>
            </div>
            <h3 class="quiz-question-title">${q.question}</h3>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `
                    <button class="quiz-option-btn" data-index="${i}">
                        <span>${opt}</span>
                        <span class="option-check">&rsaquo;</span>
                    </button>
                `).join('')}
            </div>
            <div id="quizFactBox" style="display:none; margin-top:1rem; padding:1rem; background:var(--primary-light); border-radius:var(--radius-md); font-size:0.9rem; color:var(--secondary);"></div>
        `;

        const optionBtns = quizCard.querySelectorAll('.quiz-option-btn');
        optionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (quizAnswered) return;
                quizAnswered = true;

                const chosenIndex = parseInt(btn.getAttribute('data-index'), 10);
                const isCorrect = chosenIndex === q.answer;

                if (isCorrect) {
                    btn.classList.add('correct');
                    btn.querySelector('.option-check').textContent = '✓';
                    quizScore++;
                    showToast('🎉 Jawaban kamu Tepat!');
                } else {
                    btn.classList.add('wrong');
                    btn.querySelector('.option-check').textContent = '✕';
                    // Highlight correct answer
                    optionBtns[q.answer].classList.add('correct');
                    optionBtns[q.answer].querySelector('.option-check').textContent = '✓';
                }

                // Show interesting fact
                const factBox = document.getElementById('quizFactBox');
                if (factBox) {
                    factBox.style.display = 'block';
                    factBox.innerHTML = `<strong>💡 Fakta Menarik:</strong> ${q.fact}`;
                }

                setTimeout(() => {
                    currentQuizIndex++;
                    renderQuizQuestion();
                }, 1600);
            });
        });
    }

    function renderQuizResult() {
        const finalScore = quizScore * 20;
        let title = 'Hebat Sekali!';
        let desc = 'Kamu sangat mengenal seluk-beluk dan cerita hangat Keluarga Ilyas!';

        if (finalScore === 100) {
            title = 'Sempurna! 100 Poin!';
            desc = 'Luar biasa! Kamu adalah bagian sejati dari Keluarga Ilyas!';
        } else if (finalScore < 60) {
            title = 'Bagus!';
            desc = 'Yuk baca profil anggota dan album untuk mengenal lebih dalam kehangatan keluarga!';
        }

        quizCard.innerHTML = `
            <div class="quiz-result-view">
                <div class="quiz-trophy">🏆</div>
                <h3>${title}</h3>
                <div class="quiz-score-badge">Skor Akhir: ${finalScore} / 100</div>
                <p style="max-width: 480px; margin: 0 auto 2rem; color: var(--text-secondary);">${desc}</p>
                <button class="btn btn-primary" id="btnRestartQuiz">🔄 Main Lagi</button>
            </div>
        `;

        const restartBtn = document.getElementById('btnRestartQuiz');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                currentQuizIndex = 0;
                quizScore = 0;
                renderQuizQuestion();
            });
        }
    }

    renderQuizQuestion();

    /* ==========================================================================
       11. Back to Top Button
       ========================================================================== */
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ==========================================================================
       12. Toast Notification Helper
       ========================================================================== */
    function showToast(message) {
        let container = document.getElementById('toastContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toastContainer';
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                if (toast.parentNode) toast.parentNode.removeChild(toast);
            }, 300);
        }, 3200);
    }

    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

});
