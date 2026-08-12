document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            if(!this.classList.contains('btn')) {
                this.classList.add('active');
            }
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // offset for navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current && !link.classList.contains('btn')) {
                link.classList.add('active');
            }
        });
    });

    // Album Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const albumItems = document.querySelectorAll('.album-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            albumItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hide');
                } else {
                    if (item.getAttribute('data-category').includes(filterValue)) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                }
            });
        });
    });

    // Member Detail Switching
    const membersData = {
        'bambang': {
            name: 'Nasruddin Majid',
            role: 'Ayah',
            about: 'Sosok penyayang bagi seluruh keluarga besar yang selalu memberikan wejangan bijak.',
            birth: '2 Mei',
            city: 'Jantho',
            cover: 'assets/images/nasruddin_majid.png',
            gallery: []
        },
        'sri': {
            name: 'Elfiyanti',
            role: 'Ibu',
            about: 'Jantung dari keluarga Ilyas. Selalu memastikan keluarga tetap hangat dan rukun saat berkumpul bersama.',
            birth: '22 September 1962',
            city: 'Aceh, Lhokseumawe',
            cover: 'assets/images/elfiyanti.png',
            gallery: []
        },
        'andi': {
            name: 'Alfinas Yudhistira',
            role: 'Anak Pertama',
            about: 'Anak pertama keluarga Ilyas yang selalu menjaga dan melindungi adik-adiknya.',
            birth: '8 Mei 1997',
            city: 'Aceh, Lhokseumawe',
            cover: 'assets/images/alfinas_yudhistira.png',
            gallery: []
        },
        'sari': {
            name: 'Yudita Octafiyanna',
            role: 'Anak Kedua',
            about: 'Anak kedua keluarga Ilyas yang kreatif dan penuh dengan semangat ceria.',
            birth: '12 November 1998',
            city: 'Aceh, Lhokseumawe',
            cover: 'assets/images/yudita_octa.png',
            gallery: []
        },
        'rizka': {
            name: 'Rizka Agustina',
            role: 'Anak Ketiga',
            about: 'Anak ketiga keluarga Ilyas. Selalu ramah, ceria, dan peduli pada semua saudara.',
            birth: '10 Agustus 2002',
            city: 'Aceh, Lhokseumawe',
            cover: 'assets/images/rizka_agustina.png',
            gallery: []
        },
        'dewi': {
            name: 'Wirdatul Ahya',
            role: 'Anak Keempat',
            about: 'Anak keempat keluarga Ilyas, si kembar yang memiliki jiwa petualang dan menyenangkan.',
            birth: '23 Mei 2005',
            city: 'Aceh, Lhokseumawe',
            cover: 'assets/images/wirdatul_ahya.png',
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
        'wirdatul_musfirah': {
            name: 'Wirdatul Musfirah',
            role: 'Anak Kelima',
            about: 'Anak kelima keluarga Ilyas, kembaran dari Wirdatul Ahya yang manis dan penyayang.',
            birth: '23 Mei 2005',
            city: 'Aceh, Lhokseumawe',
            cover: 'assets/images/wirdatul_musfirah.png',
            gallery: []
        }
    };

    const memberItems = document.querySelectorAll('.member-item');
    const dName = document.getElementById('detail-name');
    const dRole = document.getElementById('detail-role');
    const dRoleCard = document.getElementById('detail-role-card');
    const dAbout = document.getElementById('detail-about');
    const dBirth = document.getElementById('detail-birth');
    const dCity = document.getElementById('detail-city');
    const dCover = document.getElementById('detail-cover');

    memberItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active from all
            memberItems.forEach(m => m.classList.remove('active'));
            // Add to clicked
            this.classList.add('active');

            const memberId = this.getAttribute('data-member');
            const data = membersData[memberId];

            if (data) {
                // Update DOM with slight fade effect
                const contentArea = document.querySelector('.member-detail');
                contentArea.style.opacity = '0';
                
                setTimeout(() => {
                    dName.textContent = data.name;
                    dRole.textContent = data.role;
                    dRoleCard.textContent = data.role;
                    dAbout.textContent = data.about;
                    dBirth.textContent = data.birth;
                    dCity.textContent = data.city;
                    dCover.src = data.cover;
                    
                    // Update Gallery Action Button
                    const galleryAction = document.getElementById('gallery-action-container');
                    const btnViewGallery = document.getElementById('btn-view-gallery');
                    if (galleryAction) {
                        if (data.gallery && data.gallery.length > 0) {
                            galleryAction.style.display = 'block';
                            // Attach data to button for the modal
                            btnViewGallery.setAttribute('data-member', memberId);
                        } else {
                            galleryAction.style.display = 'none';
                        }
                    }
                    
                    contentArea.style.opacity = '1';
                }, 300);
            }
        });
    });

    // Initial smooth transition setting
    document.querySelector('.member-detail').style.transition = 'opacity 0.3s ease';

    // Image Modal / Lightbox Logic
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalClose = document.getElementById('modalClose');

    if (modal && modalImg && modalClose) {
        document.addEventListener('click', function(e) {
            if (e.target.matches('.album-item img, .personal-gallery-item img')) {
                modal.classList.add('show');
                modalImg.src = e.target.src;
            }
        });

        modalClose.addEventListener('click', function() {
            modal.classList.remove('show');
        });

        // Close modal if clicked outside the image
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }

    // Gallery Modal Logic
    const galleryModal = document.getElementById('galleryModal');
    const galleryModalClose = document.getElementById('galleryModalClose');
    const btnViewGallery = document.getElementById('btn-view-gallery');
    const modalGalleryGrid = document.getElementById('modal-gallery-grid');
    const galleryModalTitle = document.getElementById('gallery-modal-title');

    if (galleryModal && btnViewGallery) {
        btnViewGallery.addEventListener('click', function() {
            const memberId = this.getAttribute('data-member');
            const data = membersData[memberId];
            if (data && data.gallery) {
                galleryModalTitle.textContent = 'Galeri Pribadi ' + data.name;
                modalGalleryGrid.innerHTML = '';
                data.gallery.forEach(imgSrc => {
                    const galItem = document.createElement('div');
                    galItem.className = 'personal-gallery-item';
                    const imgEl = document.createElement('img');
                    imgEl.src = imgSrc;
                    galItem.appendChild(imgEl);
                    modalGalleryGrid.appendChild(galItem);
                });
                galleryModal.classList.add('show');
            }
        });

        galleryModalClose.addEventListener('click', function() {
            galleryModal.classList.remove('show');
        });

        galleryModal.addEventListener('click', function(e) {
            if (e.target === galleryModal) {
                galleryModal.classList.remove('show');
            }
        });
    }
});
