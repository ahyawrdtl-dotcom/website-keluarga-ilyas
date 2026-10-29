<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keluarga Ilyas — Satu Akar, Rindang Bersama, Seribu Kenangan</title>
    
    <!-- SEO & Metadata -->
    <meta name="description" content="Arsip digital resmi keluarga besar Ilyas &mdash; merajut cerita cinta, album foto kenangan, silsilah pohon keluarga, dan doa bersama sejak 1996 di Aceh.">
    <meta name="author" content="Keluarga Ilyas">
    <meta name="theme-color" content="#FAF8F5">
    
    <!-- Open Graph / Social Sharing -->
    <meta property="og:title" content="Keluarga Ilyas — Satu Akar, Rindang Bersama, Seribu Kenangan">
    <meta property="og:description" content="Selamat datang di ruang digital keluarga besar Ilyas dari Lhokseumawe, Aceh. Simpan foto, kenang cerita, dan jaga silaturahmi abadi.">
    <meta property="og:image" content="{{ asset('assets/images/lebaran_2026.jpg') }}">
    <meta property="og:type" content="website">

    <!-- Fonts: Playfair Display (Serif) & Plus Jakarta Sans (Sans-serif) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Stylesheet -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
</head>
<body>

    <!-- Scroll Progress Indicator -->
    <div id="scrollProgressBar" class="scroll-progress-bar"></div>

    <!-- Navigation Header -->
    <header>
        <nav id="mainNavbar" class="navbar">
            <div class="container nav-container">
                <a href="#beranda" class="logo">
                    <div class="logo-badge">🌿</div>
                    <div class="logo-text">
                        <span class="logo-brand">Keluarga Ilyas</span>
                        <span class="logo-tagline">Satu Akar, Seribu Kenangan</span>
                    </div>
                </a>

                <div class="nav-menu">
                    <ul class="nav-links">
                        <li><a href="#beranda" class="active">Beranda</a></li>
                        <li><a href="#kilas-balik">Kilas Balik</a></li>
                        <li><a href="#album">Album Foto</a></li>
                        <li><a href="#anggota">Anggota</a></li>
                        <li><a href="#pohon-keluarga">Pohon Keluarga</a></li>
                        <li><a href="#acara">Acara</a></li>
                        <li><a href="#doa-pesan">Dinding Doa</a></li>
                        <li><a href="#trivia">Kuis</a></li>
                    </ul>

                    <div class="nav-actions">
                        <!-- Sound Ambiance Toggle -->
                        <button type="button" id="soundToggleBtn" class="sound-toggle-btn" title="Nyalakan melodi suasana keluarga">
                            <span class="sound-waves">
                                <span class="sound-wave"></span>
                                <span class="sound-wave"></span>
                                <span class="sound-wave"></span>
                            </span>
                            <span class="sound-label">Musik Suasana</span>
                        </button>

                        <a href="#doa-pesan" class="btn btn-primary btn-sm">Beri Doa &hearts;</a>

                        <!-- Mobile Hamburger Button -->
                        <button type="button" id="mobileNavToggle" class="mobile-nav-toggle" aria-label="Menu navigasi">
                            <span class="hamburger-line"></span>
                            <span class="hamburger-line"></span>
                            <span class="hamburger-line"></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <!-- Mobile Drawer & Backdrop -->
    <div id="drawerBackdrop" class="drawer-backdrop"></div>
    <aside id="mobileDrawer" class="mobile-drawer">
        <div>
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem;">
                <div class="logo-badge">🌿</div>
                <div>
                    <h3 style="font-size: 1.2rem; color: var(--secondary);">Keluarga Ilyas</h3>
                    <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0;">Ruang Arsip Digital</p>
                </div>
            </div>
            <ul class="mobile-links">
                <li><a href="#beranda">🏡 Beranda</a></li>
                <li><a href="#kilas-balik">📜 Kilas Balik Perjalanan</a></li>
                <li><a href="#album">📸 Album Foto & Kenangan</a></li>
                <li><a href="#anggota">👥 Anggota Keluarga</a></li>
                <li><a href="#pohon-keluarga">🌳 Pohon Keluarga</a></li>
                <li><a href="#acara">🗓️ Acara Mendatang</a></li>
                <li><a href="#doa-pesan">💌 Dinding Doa & Pesan</a></li>
                <li><a href="#trivia">✨ Kuis Trivia Seru</a></li>
            </ul>
        </div>
        <div class="mobile-drawer-footer">
            <a href="#doa-pesan" class="btn btn-primary" style="width: 100%;">Tulis Ucapan & Doa</a>
            <p style="font-size: 0.75rem; text-align: center; color: var(--text-muted); margin: 0;">
                Est. 1996 &bull; Aceh, Lhokseumawe
            </p>
        </div>
    </aside>

    <main>
        <!-- ==========================================================================
             Hero Section
             ========================================================================== -->
        <section id="beranda" class="hero">
            <div class="container hero-container">
                <div class="hero-content">
                    <div class="hero-pill">
                        <span>✨</span> SEJAK 1996 &bull; ACEH & LHOKSEUMAWE &bull; WARISAN KASIH
                    </div>
                    <h1 class="hero-title">
                        Satu Akar,<br>
                        <span>Rindang Bersama,</span><br>
                        Seribu Kenangan.
                    </h1>
                    <p class="hero-desc">
                        Selamat datang di ruang digital keluarga besar Ilyas. Di sinilah kami merajut setiap tawa, menyimpan setiap potret kebersamaan, dan memanjatkan doa terbaik bagi kedua orang tua serta seluruh saudara tercinta.
                    </p>
                    <div class="hero-actions">
                        <a href="#album" class="btn btn-primary">
                            <span>Jelajahi Album Foto</span>
                            <span>&rarr;</span>
                        </a>
                        <a href="#pohon-keluarga" class="btn btn-outline">
                            <span>Pohon Keluarga</span>
                        </a>
                        <a href="#doa-pesan" class="btn btn-secondary">
                            <span>Kirim Doa & Pesan</span>
                        </a>
                    </div>
                    <div class="hero-stats">
                        <div class="stat-item">
                            <h3>2</h3>
                            <p>Generasi Berkah</p>
                        </div>
                        <div class="stat-item">
                            <h3>7</h3>
                            <p>Anggota Tercinta</p>
                        </div>
                        <div class="stat-item">
                            <h3>28<span>+</span></h3>
                            <p>Tahun Perjalanan</p>
                        </div>
                        <div class="stat-item">
                            <h3>100<span>%</span></h3>
                            <p>Kasih Abadi</p>
                        </div>
                    </div>
                </div>

                <div class="hero-visual">
                    <!-- Photo 1: Lebaran 2026 -->
                    <div class="hero-card hero-card-1">
                        <img src="{{ asset('assets/images/lebaran_2026.jpg') }}" alt="Lebaran Keluarga Besar 2026">
                    </div>
                    <!-- Photo 2: Ayah & Ibu di Taman -->
                    <div class="hero-card hero-card-2">
                        <img src="{{ asset('assets/images/ayah_ibu_taman.jpg') }}" alt="Ayah Nasruddin & Ibu Elfiyanti">
                    </div>
                    <!-- Floating Stamp -->
                    <div class="hero-stamp">
                        <span>1996</span>
                        ACEH
                    </div>
                    <!-- Floating Badge -->
                    <div class="hero-badge-float">
                        <span class="badge-float-icon">🏡</span>
                        <div class="badge-float-text">
                            <h5>Rumah Tempat Pulang</h5>
                            <p>Doa & pelukan hangat yang selalu menanti</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==========================================================================
             Kilas Balik / Garis Waktu Perjalanan
             ========================================================================== -->
        <section id="kilas-balik" class="kilas-balik section-pad bg-surface">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">JEJAK LANGKAH & SEJARAH</span>
                    <h2 class="section-title">Garis Waktu Keluarga Ilyas</h2>
                    <p class="section-desc">
                        Setiap tonggak sejarah mengukir cerita manis yang membawa kita hingga hari ini. Menjaga akar tetap kokoh dan ranting tetap teduh.
                    </p>
                </div>

                <div class="timeline">
                    <!-- 1996 -->
                    <div class="timeline-item left">
                        <div class="timeline-dot"></div>
                        <div class="timeline-card">
                            <span class="timeline-year">1996</span>
                            <h4>Ikrar Suci di Serambi Mekkah</h4>
                            <p>Pernikahan Ayah Nasruddin Majid dan Ibu Elfiyanti di Lhokseumawe, Aceh &mdash; menjadi awal mula pondasi berdirinya keluarga besar Ilyas yang penuh berkah.</p>
                        </div>
                    </div>

                    <!-- 1997 -->
                    <div class="timeline-item right">
                        <div class="timeline-dot"></div>
                        <div class="timeline-card">
                            <span class="timeline-year">1997</span>
                            <h4>Hadirnya Buah Hati Pertama</h4>
                            <p>Kelahiran putra sulung, Alfinas Yudhistira pada 8 Mei 1997. Tangis dan tawa pertamanya mengisi rumah dengan limpahan kebahagiaan baru.</p>
                        </div>
                    </div>

                    <!-- 1998 -->
                    <div class="timeline-item left">
                        <div class="timeline-dot"></div>
                        <div class="timeline-card">
                            <span class="timeline-year">1998</span>
                            <h4>Keceriaan Putri Kedua</h4>
                            <p>Kelahiran Yudita Octafiyanna pada 12 November 1998. Rumah semakin riang dan semarak dengan kehadiran putri cantik kedua.</p>
                        </div>
                    </div>

                    <!-- 2002 -->
                    <div class="timeline-item right">
                        <div class="timeline-dot"></div>
                        <div class="timeline-card">
                            <span class="timeline-year">2002</span>
                            <h4>Lengkap dengan Bunga Ketiga</h4>
                            <p>Kelahiran Rizka Agustina pada 10 Agustus 2002. Tumbuh menjadi putri yang tekun, ramah, dan sangat peka menjaga keharmonisan keluarga.</p>
                        </div>
                    </div>

                    <!-- 2005 -->
                    <div class="timeline-item left">
                        <div class="timeline-dot"></div>
                        <div class="timeline-card">
                            <span class="timeline-year">2005</span>
                            <h4>Anugerah Istimewa: Putri Kembar</h4>
                            <p>Kelahiran kembar yang membahagiakan: Wirdatul Ahya & Wirdatul Musfirah pada 23 Mei 2005. Menambah warna, keunikan, dan canda tawa di rumah.</p>
                        </div>
                    </div>

                    <!-- 2026 -->
                    <div class="timeline-item right">
                        <div class="timeline-dot"></div>
                        <div class="timeline-card">
                            <span class="timeline-year">2026</span>
                            <h4>Merayakan Harmoni & Rasa Syukur</h4>
                            <p>Momen Lebaran 2026 dan kebersamaan keluarga lengkap. Generasi kedua tumbuh dewasa dengan cita-cita mulia, tetap berbakti kepada orang tua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==========================================================================
             Album Foto & Galeri Kenangan
             ========================================================================== -->
        <section id="album" class="album section-pad">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">DOKUMENTASI ABADI</span>
                    <h2 class="section-title">Album Foto Keluarga</h2>
                    <p class="section-desc">
                        Setiap jepretan kamera menyimpan kehangatan masa yang takkan terulang. Klik foto untuk melihat tampilan penuh, tanggal, dan cerita di baliknya.
                    </p>
                </div>

                <!-- Toolbar: Filter & Search -->
                <div class="album-toolbar">
                    <div class="album-filters">
                        <button type="button" class="filter-btn active" data-filter="all">Semua Foto</button>
                        <button type="button" class="filter-btn" data-filter="lebaran">Lebaran & Hari Raya</button>
                        <button type="button" class="filter-btn" data-filter="orangtua">Ayah & Ibu</button>
                        <button type="button" class="filter-btn" data-filter="anak">Anak & Kembar</button>
                        <button type="button" class="filter-btn" data-filter="keluarga">Kumpul Bersama</button>
                        <button type="button" class="filter-btn" data-filter="nostalgia">Nostalgia Dulu</button>
                    </div>

                    <div class="album-search">
                        <span class="album-search-icon">🔍</span>
                        <input type="text" id="albumSearchInput" placeholder="Cari kenangan atau momen...">
                    </div>
                </div>

                <!-- Gallery Grid -->
                <div class="album-grid" id="albumGrid">
                    <!-- Photo cards are populated dynamically via script.js -->
                    <div class="album-card" data-category="lebaran keluarga">
                        <img src="{{ asset('assets/images/lebaran_2026.jpg') }}" alt="Lebaran 2026">
                        <div class="album-card-overlay">
                            <div class="album-card-tags"><span class="album-tag">Lebaran</span></div>
                            <h3 class="album-card-title">Lebaran Idul Fitri 2026</h3>
                            <p class="album-card-subtitle"><span>📸 Klik untuk melihat detail</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==========================================================================
             Anggota Keluarga (Family Members)
             ========================================================================== */ -->
        <section id="anggota" class="anggota section-pad bg-surface">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">ORANG-ORANG TERSAYANG</span>
                    <h2 class="section-title">Profil Anggota Keluarga</h2>
                    <p class="section-desc">
                        Tujuh jiwa yang disatukan oleh darah dan cinta. Pilih nama di bawah untuk melihat kisah, biodata, hobi, dan galeri pribadi mereka.
                    </p>
                </div>

                <div class="members-wrapper">
                    <!-- Sidebar Selector -->
                    <div class="members-sidebar">
                        <div class="sidebar-header">
                            <h3>Daftar Anggota</h3>
                            <p>7 anggota keluarga terdaftar</p>
                        </div>
                        <ul class="member-list" id="memberList">
                            <!-- Ayah -->
                            <li class="member-item active" data-member="nasruddin">
                                <div class="member-avatar-wrapper">
                                    <img src="{{ asset('assets/images/nasruddin_majid.png') }}" alt="Nasruddin Majid">
                                </div>
                                <div class="member-info-short">
                                    <h4>Nasruddin Majid</h4>
                                    <p><span>👨‍👧‍👦</span> Ayah</p>
                                </div>
                                <span class="member-arrow">&rsaquo;</span>
                            </li>

                            <!-- Ibu -->
                            <li class="member-item" data-member="elfiyanti">
                                <div class="member-avatar-wrapper">
                                    <img src="{{ asset('assets/images/elfiyanti.png') }}" alt="Elfiyanti">
                                </div>
                                <div class="member-info-short">
                                    <h4>Elfiyanti</h4>
                                    <p><span>👩‍👧‍👦</span> Ibu</p>
                                </div>
                                <span class="member-arrow">&rsaquo;</span>
                            </li>

                            <!-- Anak 1 -->
                            <li class="member-item" data-member="alfinas">
                                <div class="member-avatar-wrapper">
                                    <img src="{{ asset('assets/images/alfinas_yudhistira.png') }}" alt="Alfinas Yudhistira">
                                </div>
                                <div class="member-info-short">
                                    <h4>Alfinas Yudhistira</h4>
                                    <p><span>🌟</span> Anak Pertama (Sulung)</p>
                                </div>
                                <span class="member-arrow">&rsaquo;</span>
                            </li>

                            <!-- Anak 2 -->
                            <li class="member-item" data-member="yudita">
                                <div class="member-avatar-wrapper">
                                    <img src="{{ asset('assets/images/yudita_octa.png') }}" alt="Yudita Octafiyanna">
                                </div>
                                <div class="member-info-short">
                                    <h4>Yudita Octafiyanna</h4>
                                    <p><span>🎨</span> Anak Kedua</p>
                                </div>
                                <span class="member-arrow">&rsaquo;</span>
                            </li>

                            <!-- Anak 3 -->
                            <li class="member-item" data-member="rizka">
                                <div class="member-avatar-wrapper">
                                    <img src="{{ asset('assets/images/rizka_agustina.png') }}" alt="Rizka Agustina">
                                </div>
                                <div class="member-info-short">
                                    <h4>Rizka Agustina</h4>
                                    <p><span>📖</span> Anak Ketiga</p>
                                </div>
                                <span class="member-arrow">&rsaquo;</span>
                            </li>

                            <!-- Anak 4 -->
                            <li class="member-item" data-member="ahya">
                                <div class="member-avatar-wrapper">
                                    <img src="{{ asset('assets/images/wirdatul_ahya.png') }}" alt="Wirdatul Ahya">
                                </div>
                                <div class="member-info-short">
                                    <h4>Wirdatul Ahya</h4>
                                    <p><span>👯</span> Anak Keempat (Kembar)</p>
                                </div>
                                <span class="member-arrow">&rsaquo;</span>
                            </li>

                            <!-- Anak 5 -->
                            <li class="member-item" data-member="musfirah">
                                <div class="member-avatar-wrapper">
                                    <img src="{{ asset('assets/images/wirdatul_musfirah.png') }}" alt="Wirdatul Musfirah">
                                </div>
                                <div class="member-info-short">
                                    <h4>Wirdatul Musfirah</h4>
                                    <p><span>👯</span> Anak Kelima / Bungsu (Kembar)</p>
                                </div>
                                <span class="member-arrow">&rsaquo;</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Detail Pane -->
                    <div class="member-detail-pane">
                        <div class="member-banner">
                            <img src="{{ asset('assets/images/nasruddin_majid.png') }}" alt="Cover" id="detailCover">
                            <div class="member-banner-overlay">
                                <h2 id="detailName">Nasruddin Majid</h2>
                                <div class="member-banner-meta">
                                    <span class="badge badge-primary" id="detailRole">Ayah & Kepala Keluarga</span>
                                    <span class="badge badge-gold" id="detailBirthdayCountdown" style="display: none;">🎂 Milad Segera</span>
                                </div>
                            </div>
                        </div>

                        <div class="member-body">
                            <!-- Tabs -->
                            <div class="member-tabs">
                                <button type="button" class="tab-btn active" data-tab="tabProfile">Profil & Kisah</button>
                                <button type="button" class="tab-btn" data-tab="tabFacts">Hobi & Favorit</button>
                            </div>

                            <!-- Tab 1: Profile & Story -->
                            <div class="tab-panel active" id="tabProfile">
                                <div class="member-grid-info">
                                    <div>
                                        <p class="about-text" id="detailAbout">
                                            Sosok ayah yang penuh wibawa, penyayang, dan menjadi tiang kokoh bagi keluarga besar. Pensiunan pegawai negeri yang selalu menanamkan nilai kejujuran, kesederhanaan, dan kerukunan bagi seluruh anak-anaknya.
                                        </p>
                                        <div class="member-quote" id="detailQuote">
                                            “Kasih orang tua tak bertepi. Jadilah insan yang jujur, rendah hati, dan senantiasa menjaga tali persaudaraan ke mana pun kalian melangkah.”
                                        </div>
                                        <div class="action-row">
                                            <button type="button" class="btn btn-primary btn-sm" id="btnOpenPersonalGallery" data-member="nasruddin">
                                                📸 Lihat Galeri Foto
                                            </button>
                                            <button type="button" class="btn btn-outline btn-sm" id="btnWishMember" data-name="Nasruddin Majid">
                                                💌 Kirim Doa untuk Beliau
                                            </button>
                                        </div>
                                    </div>

                                    <div class="info-cards-column">
                                        <div class="detail-card">
                                            <div class="detail-card-icon">🎂</div>
                                            <div class="detail-card-text">
                                                <p class="label">TANGGAL LAHIR</p>
                                                <p class="value" id="detailBirth">2 Mei</p>
                                            </div>
                                        </div>
                                        <div class="detail-card">
                                            <div class="detail-card-icon">📍</div>
                                            <div class="detail-card-text">
                                                <p class="label">KOTA ASAL</p>
                                                <p class="value" id="detailCity">Jantho & Aceh</p>
                                            </div>
                                        </div>
                                        <div class="detail-card">
                                            <div class="detail-card-icon">👥</div>
                                            <div class="detail-card-text">
                                                <p class="label">PERAN KELUARGA</p>
                                                <p class="value" id="detailRoleCard">Ayah & Kepala Keluarga</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Tab 2: Hobbies & Favorites -->
                            <div class="tab-panel" id="tabFacts">
                                <div class="member-grid-info">
                                    <div>
                                        <div class="detail-card" style="margin-bottom: 1rem;">
                                            <div class="detail-card-icon">🌱</div>
                                            <div class="detail-card-text">
                                                <p class="label">HOBI & KEGIATAN FAVORIT</p>
                                                <p class="value" id="detailHobbies">Berkebun buah & bunga, bermain catur, membaca buku sejarah</p>
                                            </div>
                                        </div>
                                        <div class="detail-card">
                                            <div class="detail-card-icon">☕</div>
                                            <div class="detail-card-text">
                                                <p class="label">KULINER & MINUMAN FAVORIT</p>
                                                <p class="value" id="detailFavorite">Kopi Gayo khas Aceh & Kuah Pliek U</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="info-cards-column">
                                        <div class="detail-card">
                                            <div class="detail-card-icon">💎</div>
                                            <div class="detail-card-text">
                                                <p class="label">NILAI HIDUP UTAMA</p>
                                                <p class="value" id="detailValues">Keteladanan, Integritas, Ketulusan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==========================================================================
             Pohon Keluarga Interaktif (Modern Family Tree)
             ========================================================================== -->
        <section id="pohon-keluarga" class="pohon-keluarga section-pad">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">SILSILAH & HUBUNGAN</span>
                    <h2 class="section-title">Pohon Keluarga Ilyas</h2>
                    <p class="section-desc">
                        Dua generasi yang saling bertaut dalam kasih sayang tak terputus. Klik pada kartu anggota keluarga untuk membuka profil lengkapnya.
                    </p>
                </div>

                <div class="tree-board">
                    <!-- Generasi 1 -->
                    <div class="tree-tier">
                        <span class="tier-label">GENERASI I &mdash; AYAH & IBU</span>
                        <div class="parents-group">
                            <!-- Ayah -->
                            <div class="tree-card" data-member="nasruddin">
                                <div class="tree-card-avatar">
                                    <img src="{{ asset('assets/images/nasruddin_majid.png') }}" alt="Nasruddin Majid">
                                </div>
                                <h4>Nasruddin Majid</h4>
                                <span class="tree-role">Ayah</span>
                                <span class="tree-meta">Lahir: 2 Mei</span>
                            </div>

                            <!-- Marriage Icon -->
                            <div class="marriage-connector">
                                <div class="marriage-heart">&hearts;</div>
                                <span class="marriage-year">EST. 1996</span>
                            </div>

                            <!-- Ibu -->
                            <div class="tree-card" data-member="elfiyanti">
                                <div class="tree-card-avatar">
                                    <img src="{{ asset('assets/images/elfiyanti.png') }}" alt="Elfiyanti">
                                </div>
                                <h4>Elfiyanti</h4>
                                <span class="tree-role" style="color: var(--accent-emerald);">Ibu</span>
                                <span class="tree-meta">Lahir: 22 Sep 1962</span>
                            </div>
                        </div>
                    </div>

                    <!-- Connectors -->
                    <div class="tree-connector-v"></div>
                    <div class="tree-connector-h"></div>

                    <!-- Generasi 2: Anak-anak -->
                    <div class="tree-tier">
                        <span class="tier-label">GENERASI II &mdash; LIMA BERSAUDARA</span>
                        <div class="children-group">
                            <!-- Anak 1 -->
                            <div class="tree-card child" data-member="alfinas">
                                <div class="tree-card-avatar">
                                    <img src="{{ asset('assets/images/alfinas_yudhistira.png') }}" alt="Alfinas Yudhistira">
                                </div>
                                <h4>Alfinas Yudhistira</h4>
                                <span class="tree-role">Anak ke-1 (Sulung)</span>
                                <span class="tree-meta">8 Mei 1997</span>
                            </div>

                            <!-- Anak 2 -->
                            <div class="tree-card child" data-member="yudita">
                                <div class="tree-card-avatar">
                                    <img src="{{ asset('assets/images/yudita_octa.png') }}" alt="Yudita Octafiyanna">
                                </div>
                                <h4>Yudita Octafiyanna</h4>
                                <span class="tree-role">Anak ke-2</span>
                                <span class="tree-meta">12 Nov 1998</span>
                            </div>

                            <!-- Anak 3 -->
                            <div class="tree-card child" data-member="rizka">
                                <div class="tree-card-avatar">
                                    <img src="{{ asset('assets/images/rizka_agustina.png') }}" alt="Rizka Agustina">
                                </div>
                                <h4>Rizka Agustina</h4>
                                <span class="tree-role">Anak ke-3</span>
                                <span class="tree-meta">10 Agu 2002</span>
                            </div>

                            <!-- Si Kembar (Anak 4 & 5) -->
                            <div class="twin-badge-container">
                                <div class="twin-pill">👯 SAUDARA KEMBAR (TWINS)</div>
                                <div class="twin-pair">
                                    <!-- Ahya -->
                                    <div class="tree-card child" data-member="ahya">
                                        <div class="tree-card-avatar">
                                            <img src="{{ asset('assets/images/wirdatul_ahya.png') }}" alt="Wirdatul Ahya">
                                        </div>
                                        <h4>Wirdatul Ahya</h4>
                                        <span class="tree-role">Anak ke-4</span>
                                        <span class="tree-meta">23 Mei 2005</span>
                                    </div>
                                    <!-- Musfirah -->
                                    <div class="tree-card child" data-member="musfirah">
                                        <div class="tree-card-avatar">
                                            <img src="{{ asset('assets/images/wirdatul_musfirah.png') }}" alt="Wirdatul Musfirah">
                                        </div>
                                        <h4>Wirdatul Musfirah</h4>
                                        <span class="tree-role">Anak ke-5 (Bungsu)</span>
                                        <span class="tree-meta">23 Mei 2005</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==========================================================================
             Acara Mendatang & Live Countdown Timer
             ========================================================================== -->
        <section id="acara" class="acara section-pad bg-surface">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">AGENDA & PERAYAAN</span>
                    <h2 class="section-title">Acara & Hari Istimewa</h2>
                    <p class="section-desc">
                        Tandai kalender bersama &mdash; momen kebersamaan yang senantiasa dirindukan seluruh keluarga besar.
                    </p>
                </div>

                <!-- Live Countdown Banner -->
                <div class="countdown-banner">
                    <div class="countdown-content">
                        <div class="countdown-info">
                            <span class="badge badge-gold" style="margin-bottom: 0.75rem;">⏰ HARI SPESIAL TERDEKAT</span>
                            <h3>Milad & Perayaan Kebersamaan Keluarga</h3>
                            <p>
                                Menghitung mundur detik demi detik menuju perayaan hari bahagia berikutnya. Mari persiapkan kado doa, senyuman, dan pelukan terhangat.
                            </p>
                            <a href="#doa-pesan" class="btn btn-primary btn-sm">Tulis Ucapan Selamat Lebih Awal &rarr;</a>
                        </div>
                        <div class="countdown-timer">
                            <div class="timer-box">
                                <div class="timer-num" id="countDays">00</div>
                                <div class="timer-label">Hari</div>
                            </div>
                            <div class="timer-box">
                                <div class="timer-num" id="countHours">00</div>
                                <div class="timer-label">Jam</div>
                            </div>
                            <div class="timer-box">
                                <div class="timer-num" id="countMins">00</div>
                                <div class="timer-label">Menit</div>
                            </div>
                            <div class="timer-box">
                                <div class="timer-num" id="countSecs">00</div>
                                <div class="timer-label">Detik</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Event Cards Grid -->
                <div class="events-grid">
                    <!-- Event 1 -->
                    <div class="event-card-item">
                        <div>
                            <div class="event-header">
                                <div class="event-date-pill">
                                    <div class="day">22</div>
                                    <div class="month">Sep</div>
                                </div>
                                <span class="badge badge-emerald">Ulang Tahun</span>
                            </div>
                            <h4>Milad Ibu Elfiyanti Tercinta</h4>
                            <p>Makan malam syukuran dan doa bersama untuk kesehatan, umur panjang, dan kebahagiaan Ibu yang senantiasa menyejukkan hati.</p>
                            <div class="event-meta-info">
                                <div class="meta-row"><span>📍</span> Lokasi: <strong>Rumah Keluarga, Aceh</strong></div>
                                <div class="meta-row"><span>⏰</span> Waktu: <strong>19:30 WIB</strong></div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-outline btn-sm btn-event-notify" data-event-title="Milad Ibu Elfiyanti">
                            <span>🔔 Ingatkan Saya</span>
                        </button>
                    </div>

                    <!-- Event 2 -->
                    <div class="event-card-item">
                        <div>
                            <div class="event-header">
                                <div class="event-date-pill">
                                    <div class="day">23</div>
                                    <div class="month">Mei</div>
                                </div>
                                <span class="badge badge-primary">Milad Kembar</span>
                            </div>
                            <h4>Ulang Tahun Si Kembar Ahya & Musfirah</h4>
                            <p>Hari bahagia perayaan kelahiran sepasang putri kembar kebanggaan keluarga. Kumpul santai, potong kue, dan sesi foto ceria.</p>
                            <div class="event-meta-info">
                                <div class="meta-row"><span>📍</span> Lokasi: <strong>Restoran Favorit / Rumah</strong></div>
                                <div class="meta-row"><span>⏰</span> Waktu: <strong>16:00 WIB</strong></div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-outline btn-sm btn-event-notify" data-event-title="Milad Si Kembar Ahya & Musfirah">
                            <span>🔔 Ingatkan Saya</span>
                        </button>
                    </div>

                    <!-- Event 3 -->
                    <div class="event-card-item">
                        <div>
                            <div class="event-header">
                                <div class="event-date-pill">
                                    <div class="day">02</div>
                                    <div class="month">Mei</div>
                                </div>
                                <span class="badge badge-gold">Hari Spesial</span>
                            </div>
                            <h4>Milad Ayah Nasruddin Majid</h4>
                            <p>Perayaan penuh khidmat menghormati kepala keluarga. Syukuran makan bersama dan turnamen catur santai bersama anak-anak.</p>
                            <div class="event-meta-info">
                                <div class="meta-row"><span>📍</span> Lokasi: <strong>Halaman Rumah & Kebun</strong></div>
                                <div class="meta-row"><span>⏰</span> Waktu: <strong>10:00 WIB</strong></div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-outline btn-sm btn-event-notify" data-event-title="Milad Ayah Nasruddin">
                            <span>🔔 Ingatkan Saya</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==========================================================================
             Dinding Doa & Pesan Keluarga (Interactive Guestbook)
             ========================================================================== -->
        <section id="doa-pesan" class="doa-pesan section-pad">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">TITIP DOA & KATA HATI</span>
                    <h2 class="section-title">Dinding Doa & Pesan Keluarga</h2>
                    <p class="section-desc">
                        Tinggalkan untaian kata kasih, doa tulus, atau cerita kenangan manis untuk keluarga tercinta. Pesan Anda akan tersemat abadi di sini.
                    </p>
                </div>

                <div class="wishes-layout">
                    <!-- Form -->
                    <div class="wish-form-card">
                        <h3>Kirim Ucapan & Doa</h3>
                        <p>Tuliskan sepatah kata manis untuk orang tua, saudara, atau seluruh keluarga besar.</p>
                        
                        <form id="wishForm">
                            <div class="form-group">
                                <label for="wishAuthor">Nama Anda *</label>
                                <input type="text" id="wishAuthor" class="form-control" placeholder="Contoh: Ahya / Teman / Kerabat" required>
                            </div>

                            <div class="form-group">
                                <label for="wishRelation">Hubungan / Peran</label>
                                <select id="wishRelation" class="form-control">
                                    <option value="Anggota Keluarga">Anggota Keluarga</option>
                                    <option value="Anak">Anak</option>
                                    <option value="Orang Tua">Orang Tua</option>
                                    <option value="Saudara / Kerabat">Saudara / Kerabat</option>
                                    <option value="Sahabat Keluarga">Sahabat Keluarga</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="wishRecipient">Ditujukan Kepada</label>
                                <select id="wishRecipient" class="form-control">
                                    <option value="Semua Keluarga">Semua Keluarga Besar</option>
                                    <option value="Ayah Nasruddin Majid">Ayah Nasruddin Majid</option>
                                    <option value="Ibu Elfiyanti">Ibu Elfiyanti</option>
                                    <option value="Alfinas Yudhistira">Alfinas Yudhistira</option>
                                    <option value="Yudita Octafiyanna">Yudita Octafiyanna</option>
                                    <option value="Rizka Agustina">Rizka Agustina</option>
                                    <option value="Wirdatul Ahya">Wirdatul Ahya</option>
                                    <option value="Wirdatul Musfirah">Wirdatul Musfirah</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="wishMessage">Pesan / Doa Tulus *</label>
                                <textarea id="wishMessage" class="form-control" placeholder="Tuliskan doa terbaik, harapan, atau kenangan indah Anda di sini..." required></textarea>
                            </div>

                            <div class="form-group">
                                <label>Pilih Simbol / Reaksi</label>
                                <div class="emoji-options">
                                    <span class="emoji-radio selected" data-emoji="❤️">❤️</span>
                                    <span class="emoji-radio" data-emoji="🤲">🤲</span>
                                    <span class="emoji-radio" data-emoji="🌸">🌸</span>
                                    <span class="emoji-radio" data-emoji="✨">✨</span>
                                    <span class="emoji-radio" data-emoji="🥳">🥳</span>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
                                <span>Kirimkan Doa Sekarang</span>
                                <span>&hearts;</span>
                            </button>
                        </form>
                    </div>

                    <!-- Wishes Feed -->
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
                            <h3 style="font-size: 1.35rem; color: var(--secondary);">Doa & Harapan Terkini</h3>
                            <span class="badge badge-primary">Diperbarui Real-time</span>
                        </div>
                        <div class="wishes-feed" id="wishesFeed">
                            <!-- Populated dynamically via script.js -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==========================================================================
             Kuis & Trivia Interaktif ("Seberapa Kenal Kamu?")
             ========================================================================== -->
        <section id="trivia" class="trivia section-pad bg-surface">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">SERU & INTERAKTIF</span>
                    <h2 class="section-title">Kuis Trivia Keluarga Ilyas</h2>
                    <p class="section-desc">
                        Uji seberapa dalam pengetahuanmu tentang sejarah, fakta seru, dan momen manis keluarga besar Ilyas!
                    </p>
                </div>

                <div class="quiz-container" id="quizCard">
                    <!-- Populated dynamically via script.js -->
                </div>
            </div>
        </section>
    </main>

    <!-- ==========================================================================
         Lightbox Modal (Full Photo Viewer)
         ========================================================================== -->
    <div id="lightboxModal" class="modal-overlay">
        <div class="lightbox-content">
            <button type="button" class="modal-close-btn" id="lightboxCloseBtn" aria-label="Tutup foto">&times;</button>
            <button type="button" class="lightbox-nav-btn prev" id="lightboxPrevBtn" aria-label="Foto sebelumnya">&#8249;</button>
            <button type="button" class="lightbox-nav-btn next" id="lightboxNextBtn" aria-label="Foto berikutnya">&#8250;</button>

            <div class="lightbox-img-wrapper">
                <img id="lightboxImg" src="" alt="Foto Kenangan">
            </div>

            <div class="lightbox-caption-bar">
                <span class="badge badge-gold" id="lightboxCounter" style="margin-bottom: 0.5rem;">1 / 1</span>
                <h4 id="lightboxTitle">Judul Kenangan</h4>
                <p id="lightboxDesc">Deskripsi momen foto</p>
            </div>
        </div>
    </div>

    <!-- ==========================================================================
         Personal Member Gallery Modal
         ========================================================================== -->
    <div id="personalGalleryModal" class="modal-overlay">
        <div class="gallery-modal-dialog">
            <div class="gallery-modal-head">
                <h3 id="personalGalleryTitle">Galeri Foto Anggota</h3>
                <button type="button" class="modal-close-btn" id="personalGalleryModalClose" style="position: static; color: var(--text-muted);">&times;</button>
            </div>
            <div class="gallery-modal-scroll">
                <div class="gallery-modal-grid" id="personalGalleryGrid">
                    <!-- Populated dynamically via JS -->
                </div>
            </div>
        </div>
    </div>

    <!-- ==========================================================================
         Footer
         ========================================================================== -->
    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-brand">
                    <h3>🌿 Keluarga Ilyas</h3>
                    <p>
                        Ruang arsip digital keluarga besar &mdash; menjaga ikatan kasih, mengabadikan setiap senyuman, dan mewariskan nilai kebaikan bagi generasi yang akan datang.
                    </p>
                    <div class="footer-quote">
                        “Keluarga bukan hanya tentang mereka yang sedarah, melainkan tentang mereka yang saling menggenggam tangan dalam suka dan duka.”
                    </div>
                </div>

                <div class="footer-col">
                    <h4>Navigasi Cepat</h4>
                    <ul class="footer-links">
                        <li><a href="#beranda">Beranda</a></li>
                        <li><a href="#kilas-balik">Kilas Balik Sejarah</a></li>
                        <li><a href="#album">Album Foto</a></li>
                        <li><a href="#anggota">Profil Anggota</a></li>
                        <li><a href="#pohon-keluarga">Pohon Keluarga</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Interaksi & Doa</h4>
                    <ul class="footer-links">
                        <li><a href="#acara">Acara Mendatang</a></li>
                        <li><a href="#doa-pesan">Dinding Doa & Pesan</a></li>
                        <li><a href="#trivia">Kuis Trivia Seru</a></li>
                        <li><a href="#beranda">Kembali ke Atas</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 1996 &ndash; 2026 Keluarga Besar Ilyas. Dibuat dengan penuh cinta dari Aceh, Lhokseumawe.</p>
                <button type="button" class="back-to-top" id="backToTopBtn" title="Kembali ke atas" aria-label="Kembali ke atas">
                    &uarr;
                </button>
            </div>
        </div>
    </footer>

    <!-- Core Script -->
    <script src="{{ asset('assets/js/script.js') }}"></script>
</body>
</html>
