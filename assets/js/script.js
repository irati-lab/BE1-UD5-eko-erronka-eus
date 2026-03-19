// Orria kargatzen denean exekutatuko den kodea (metodo seguruagoa)
window.onload = function() {
    // Ikonoak kargatu
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.warn('Lucide icons ez dago kargatuta!');
    }

    // Mugikorretarako menuaren funtzionalitatea
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
};

// Sekzioen artean nabigatzeko funtzio nagusia
function showSection(sectionId) {
    // 1. Ezkutatu sekzio guztiak
    const sections = document.querySelectorAll('main > section');
    sections.forEach(sec => {
        sec.classList.add('section-hidden');
    });

    // 2. Erakutsi eskatutako sekzioa
    const activeSection = document.getElementById(sectionId);
    if(activeSection) {
        activeSection.classList.remove('section-hidden');
    }

    // 3. Eguneratu menuko "active" klasea (azpimarra/kolorea)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Dropdown menuko barneko estekek ez dute klase aktiboa hartuko modu berean, baina orokorrean funtzionatzen du
        if(link.getAttribute('data-target') === sectionId) {
            link.classList.add('active');
        }
    });

    // 4. Joan orriaren goialdera leunki
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mugikorretarako menua ireki/itxi
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}
