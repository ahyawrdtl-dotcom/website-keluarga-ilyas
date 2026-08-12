<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keluarga Ilyas - Satu Akar, Seribu Kenangan</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
</head>
<body>
    <nav class="navbar">
        <div class="container nav-container">
            <a href="#" class="logo">
                <span class="logo-icon">🌿</span> Keluarga Ilyas
            </a>
            <ul class="nav-links">
                <li><a href="#beranda" class="active">Beranda</a></li>
                <li><a href="#album">Album Foto</a></li>
                <li><a href="#anggota">Anggota</a></li>
                <li><a href="#acara">Acara</a></li>
                <li><a href="#pohon-keluarga">Pohon Keluarga</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <!-- Hero Section -->
        <section id="beranda" class="hero">
            <div class="container hero-container">
                <div class="hero-content">
                    <p class="hero-subtitle">SEJAK 1996 &middot; ACEH, LHOKSEUMAWE</p>
                    <h1 class="hero-title">Satu Akar,<br><span>Seribu Kenangan</span></h1>
                    <p class="hero-desc">
                        Selamat datang di ruang digital keluarga besar Ilyas &mdash; tempat kami menyimpan foto, mengingat cerita, dan merencanakan pertemuan bersama.
                    </p>
                    <div class="hero-actions">
                        <a href="#album" class="btn btn-primary">Lihat Album &rarr;</a>
                        <a href="#acara" class="btn btn-outline">Acara Mendatang</a>
                    </div>
                    <div class="hero-stats">
                        <div class="stat-item">
                            <h3>2</h3>
                            <p>Generasi</p>
                        </div>
                        <div class="stat-item">
                            <h3>7</h3>
                            <p>Anggota</p>
                        </div>
                        <div class="stat-item">
                            <h3>17</h3>
                            <p>Foto & Kenangan</p>
                        </div>
                    </div>
                </div>
                    <div class="hero-images">
                        <div class="img-card img-1">
                            <img src="{{ asset('assets/images/lebaran_2026.jpg') }}" alt="Keluarga Ilyas">
                            <span class="badge badge-year">2026</span>
                        </div>
                        <div class="img-card img-2">
                            <img src="{{ asset('assets/images/ayah_ibu_taman.jpg') }}" alt="Wisuda Kak Rizka">
                            <span class="badge badge-year">2025</span>
                        </div>
                    </div>
            </div>
        </section>

        <!-- Album Section -->
        <section id="album" class="album section-pad">
            <div class="container">
                <div class="section-header">
                    <p class="section-subtitle">KENANGAN BERSAMA</p>
                    <h2 class="section-title">Album Foto Keluarga</h2>
                    <p class="section-desc">Setiap gambar menyimpan cerita. Klik foto untuk melihat lebih jelas.</p>
                </div>
                
                <div class="album-filters">
                    <button class="filter-btn active" data-filter="all">Semua</button>
                    <button class="filter-btn" data-filter="liburan">Liburan</button>
                    <button class="filter-btn" data-filter="perayaan">Perayaan</button>
                    <button class="filter-btn" data-filter="keluarga">Keluarga</button>
                    <button class="filter-btn" data-filter="reuni">Reuni</button>
                    <button class="filter-btn" data-filter="kenangan">Kenangan</button>
                </div>

                <div class="album-grid">
                    <div class="album-item" data-category="keluarga liburan">
                        <img src="{{ asset('assets/images/lebaran_2026.jpg') }}" alt="Lebaran Keluarga 2026">
                    </div>
                    <div class="album-item" data-category="keluarga kenangan">
                        <img src="{{ asset('assets/images/ayah_ibu_taman.jpg') }}" alt="Wisuda Kak Rizka 2025">
                    </div>
                </div>
            </div>
        </section>

        <!-- Members Section -->
        <section id="anggota" class="anggota section-pad">
            <div class="container">
                <div class="section-header">
                    <p class="section-subtitle">ORANG-ORANG TERSAYANG</p>
                    <h2 class="section-title">Keluarga Kami</h2>
                    <p class="section-desc">Klik nama untuk melihat foto dan cerita mereka.</p>
                </div>

                <div class="members-layout">
                    <div class="members-sidebar">
                        <div class="sidebar-header">
                            <h3>Daftar Anggota</h3>
                            <p>7 anggota terdaftar</p>
                        </div>
                        <ul class="member-list">
                            <li class="member-item active" data-member="bambang">
                                <img src="{{ asset('assets/images/nasruddin_majid.png') }}" alt="Nasruddin Majid" class="member-avatar">
                                <div class="member-info-short">
                                    <h4>Nasruddin Majid</h4>
                                    <p>Ayah</p>
                                </div>
                                <span class="arrow">&rsaquo;</span>
                            </li>
                            <li class="member-item" data-member="sri">
                                <img src="{{ asset('assets/images/elfiyanti.png') }}" alt="Elfiyanti" class="member-avatar">
                                <div class="member-info-short">
                                    <h4>Elfiyanti</h4>
                                    <p>Ibu</p>
                                </div>
                                <span class="arrow">&rsaquo;</span>
                            </li>
                            <li class="member-item" data-member="andi">
                                <img src="{{ asset('assets/images/alfinas_yudhistira.png') }}" alt="Alfinas Yudhistira" class="member-avatar">
                                <div class="member-info-short">
                                    <h4>Alfinas Yudhistira</h4>
                                    <p>Anak Pertama</p>
                                </div>
                                <span class="arrow">&rsaquo;</span>
                            </li>
                            <li class="member-item" data-member="sari">
                                <img src="{{ asset('assets/images/yudita_octa.png') }}" alt="Yudita Octafiyanna" class="member-avatar">
                                <div class="member-info-short">
                                    <h4>Yudita Octafiyanna</h4>
                                    <p>Anak Kedua</p>
                                </div>
                                <span class="arrow">&rsaquo;</span>
                            </li>
                            <li class="member-item" data-member="rizka">
                                <img src="{{ asset('assets/images/rizka_agustina.png') }}" alt="Rizka Agustina" class="member-avatar">
                                <div class="member-info-short">
                                    <h4>Rizka Agustina</h4>
                                    <p>Anak Ketiga</p>
                                </div>
                                <span class="arrow">&rsaquo;</span>
                            </li>
                            <li class="member-item" data-member="dewi">
                                <img src="{{ asset('assets/images/wirdatul_ahya.png') }}" alt="Wirdatul Ahya" class="member-avatar">
                                <div class="member-info-short">
                                    <h4>Wirdatul Ahya</h4>
                                    <p>Anak Keempat</p>
                                </div>
                                <span class="arrow">&rsaquo;</span>
                            </li>
                            <li class="member-item" data-member="wirdatul_musfirah">
                                <img src="{{ asset('assets/images/wirdatul_musfirah.png') }}" alt="Wirdatul Musfirah" class="member-avatar">
                                <div class="member-info-short">
                                    <h4>Wirdatul Musfirah</h4>
                                    <p>Anak Kelima</p>
                                </div>
                                <span class="arrow">&rsaquo;</span>
                            </li>
                        </ul>
                    </div>

                    <div class="member-detail">
                        <div class="member-cover">
                            <img src="{{ asset('assets/images/nasruddin_majid.png') }}" alt="Cover Nasruddin Majid" id="detail-cover">
                            <div class="cover-overlay">
                                <h2 id="detail-name">Nasruddin Majid</h2>
                                <span class="badge badge-role" id="detail-role">Ayah</span>
                            </div>
                        </div>
                        <div class="member-content">
                            <div class="member-about">
                                <h3>TENTANG</h3>
                                <p id="detail-about">Pensiunan pegawai negeri, senang berkebun dan bermain catur. Sosok penyayang bagi seluruh keluarga besar.</p>
                                <div class="member-gallery-action" id="gallery-action-container">
                                    <button class="btn-text-link" id="btn-view-gallery">Galeri</button>
                                </div>
                            </div>
                            <div class="member-info-cards">
                                <h3>INFO</h3>
                                <div class="info-card">
                                    <span class="info-icon">🎂</span>
                                    <div class="info-text">
                                        <p class="label">TANGGAL LAHIR</p>
                                        <p class="value" id="detail-birth">2 Mei</p>
                                    </div>
                                </div>
                                <div class="info-card">
                                    <span class="info-icon">📍</span>
                                    <div class="info-text">
                                        <p class="label">KOTA</p>
                                        <p class="value" id="detail-city">Yogyakarta</p>
                                    </div>
                                </div>
                                <div class="info-card">
                                    <span class="info-icon">👥</span>
                                    <div class="info-text">
                                        <p class="label">PERAN</p>
                                        <p class="value" id="detail-role-card">Ayah</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Events Section -->
        <section id="acara" class="acara section-pad bg-light">
            <div class="container">
                <div class="section-header">
                    <p class="section-subtitle">JANGAN SAMPAI KETINGGALAN</p>
                    <h2 class="section-title">Acara Mendatang</h2>
                    <p class="section-desc">Tandai kalender &mdash; momen kebersamaan keluarga besar yang sudah ditunggu-tunggu.</p>
                </div>

                <div class="events-list">
                    <div class="event-item">
                        <div class="event-date">
                            <span class="date-num">17</span>
                            <span class="date-month">Agu</span>
                            <span class="date-year">2025</span>
                        </div>
                        <div class="event-card">
                            <div class="event-card-header">
                                <h3>Peringatan HUT RI &mdash; Lomba Keluarga</h3>
                                <span class="badge badge-perayaan">Perayaan</span>
                            </div>
                            <p>Lomba seru antar anggota keluarga: balap karung, makan kerupuk, dan banyak lagi!</p>
                            <p class="event-location">📍 Rumah Pak Bambang, Yogyakarta</p>
                        </div>
                    </div>

                    <div class="event-item">
                        <div class="event-date date-green">
                            <span class="date-num">22</span>
                            <span class="date-month">Sep</span>
                            <span class="date-year">2025</span>
                        </div>
                        <div class="event-card">
                            <div class="event-card-header">
                                <h3>Ulang Tahun Elfiyanti ke-63</h3>
                                <span class="badge badge-ulangtahun">Ulang Tahun</span>
                            </div>
                            <p>Makan malam spesial untuk merayakan ulang tahun Ibu. Semua keluarga hadir!</p>
                            <p class="event-location">📍 Resto Prambanan, Yogyakarta</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Family Tree Section -->
        <section id="pohon-keluarga" class="pohon-keluarga section-pad">
            <div class="container">
                <div class="section-header">
                    <p class="section-subtitle">AKAR & CABANG</p>
                    <h2 class="section-title">Pohon Keluarga</h2>
                    <p class="section-desc">Dua generasi keluarga besar Ilyas yang saling terhubung dengan kasih.</p>
                </div>

                <div class="tree-container">
                    <div class="tree-level">
                        <p class="level-title">GENERASI I &mdash; AYAH & IBU</p>
                        <div class="tree-nodes">
                            <div class="tree-node">
                                <div class="node-avatar border-orange">
                                    <img src="{{ asset('assets/images/nasruddin_majid.png') }}" alt="Bambang">
                                </div>
                                <h4>Nasruddin Majid</h4>
                                <p class="node-role text-orange">Ayah</p>
                            </div>
                            <div class="heart-icon">&hearts;</div>
                            <div class="tree-node">
                                <div class="node-avatar border-green">
                                    <img src="{{ asset('assets/images/elfiyanti.png') }}" alt="Sri">
                                </div>
                                <h4>Elfiyanti</h4>
                                <p class="node-role text-green">Ibu</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tree-line-vertical"></div>
                    
                    <div class="tree-level">
                        <p class="level-title">GENERASI II &mdash; ANAK-ANAK</p>
                        <div class="tree-nodes-children">
                            <div class="tree-node">
                                <div class="node-avatar border-orange">
                                    <img src="{{ asset('assets/images/alfinas_yudhistira.png') }}" alt="Alfinas Yudhistira">
                                </div>
                                <h4>Alfinas Yudhistira</h4>
                                <p class="node-role text-orange">Anak Pertama</p>
                            </div>
                            
                            <div class="tree-node">
                                <div class="node-avatar border-orange">
                                    <img src="{{ asset('assets/images/yudita_octa.png') }}" alt="Yudita Octafiyanna">
                                </div>
                                <h4>Yudita Octafiyanna</h4>
                                <p class="node-role text-orange">Anak Kedua</p>
                            </div>

                            <div class="tree-node">
                                <div class="node-avatar border-orange">
                                    <img src="{{ asset('assets/images/rizka_agustina.png') }}" alt="Rizka Agustina">
                                </div>
                                <h4>Rizka Agustina</h4>
                                <p class="node-role text-orange">Anak Ketiga</p>
                            </div>

                            <div class="tree-node">
                                <div class="node-avatar border-orange">
                                    <img src="{{ asset('assets/images/wirdatul_ahya.png') }}" alt="Wirdatul Ahya">
                                </div>
                                <h4>Wirdatul Ahya</h4>
                                <p class="node-role text-orange">Anak Keempat</p>
                            </div>

                            <div class="tree-node">
                                <div class="node-avatar border-orange">
                                    <img src="{{ asset('assets/images/wirdatul_musfirah.png') }}" alt="Wirdatul Musfirah">
                                </div>
                                <h4>Wirdatul Musfirah</h4>
                                <p class="node-role text-orange">Anak Kelima</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <div id="imageModal" class="image-modal">
        <span class="image-modal-close" id="modalClose">&times;</span>
        <img class="image-modal-content" id="modalImg">
    </div>

    <!-- Gallery Modal -->
    <div id="galleryModal" class="gallery-modal">
        <div class="gallery-modal-container">
            <div class="gallery-modal-header">
                <h3 id="gallery-modal-title">Galeri Pribadi</h3>
                <span class="gallery-modal-close" id="galleryModalClose">&times;</span>
            </div>
            <div class="gallery-modal-body">
                <div class="personal-gallery-grid" id="modal-gallery-grid">
                    <!-- Images will be injected here via JS -->
                </div>
            </div>
        </div>
    </div>

    <script src="{{ asset('assets/js/script.js') }}"></script>
</body>
</html>
