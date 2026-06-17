// ========== SMOOTH SCROLLING & NAVIGATION ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== CURRENCY TAB SWITCHING - FIXED VERSION ==========
setTimeout(function() {
    const inrBtn = document.querySelector('[data-currency="inr"]');
    const usdBtn = document.querySelector('[data-currency="usd"]');
    const inrPackages = document.getElementById('inr-packages');
    const usdPackages = document.getElementById('usd-packages');
    
    console.log('🚀 Tab initialization:');
    console.log('INR Button:', inrBtn);
    console.log('USD Button:', usdBtn);
    console.log('INR Grid:', inrPackages);
    console.log('USD Grid:', usdPackages);
    
    if (inrBtn && usdBtn && inrPackages && usdPackages) {
        inrBtn.addEventListener('click', function() {
            console.log('→ Clicked INR');
            inrBtn.classList.add('active');
            usdBtn.classList.remove('active');
            inrPackages.classList.add('active-tab');
            usdPackages.classList.remove('active-tab');
        });
        
        usdBtn.addEventListener('click', function() {
            console.log('→ Clicked USD');
            usdBtn.classList.add('active');
            inrBtn.classList.remove('active');
            usdPackages.classList.add('active-tab');
            inrPackages.classList.remove('active-tab');
        });
    }
}, 500);

// ========== SELECT PACKAGE FUNCTION ==========
function selectPackage(packageName) {
    const packageSelect = document.getElementById('package');
    packageSelect.value = packageName;
    
    // Scroll to consultation form
    document.getElementById('consultation').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    // Focus on form
    setTimeout(() => {
        document.getElementById('name').focus();
    }, 500);
}

// ========== CONTACT FOR PRICE ==========
function contactForPrice() {
    const whatsappNumber = '919073370100';
    const message = 'Hello! I am interested in the VIP Platinum package. Please share the custom pricing.';
    const whatsappURL = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message);
    window.open(whatsappURL, '_blank');
}

// ========== FORM SUBMISSION TO WHATSAPP ==========
document.getElementById('consultationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const tob = document.getElementById('tob').value || 'Not provided';
    const pob = document.getElementById('pob').value;
    const phone = document.getElementById('phone').value;
    const package_selected = document.getElementById('package').value || 'Not selected';
    const query = document.getElementById('query').value;
    
    // Validate required fields
    if (!name || !email || !dob || !pob || !phone) {
        alert('Please fill in all required fields');
        return;
    }
    
    const message = `🔮 *JYOTISH SAGAAR CONSULTATION REQUEST* 🔮

🔹 *CLIENT INFORMATION*
├─ Name: ${name}
├─ Email: ${email}
└─ WhatsApp: ${phone}

🔹 *BIRTH DETAILS*
├─ Date of Birth: ${dob}
├─ Time of Birth: ${tob}
└─ Place of Birth: ${pob}

🔹 *PACKAGE*
└─ Selected: ${package_selected}

🔹 *QUERY/CONCERN*
${query}

---
*Please confirm this appointment within 24 hours.*`;
    
    const whatsappURL = 'https://wa.me/919073370100?text=' + encodeURIComponent(message);
    window.open(whatsappURL, '_blank');
    
    // Reset form
    this.reset();
    alert('✅ Your consultation request has been sent to WhatsApp!');
});

// ========== HAMBURGER MENU ==========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Close menu when link clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.style.display = 'none';
        });
    });
}

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .package-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ========== HEADER SCROLL EFFECT ==========
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar-header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(255, 215, 0, 0.15)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ========== ACTIVE NAV LINK HIGHLIGHT ==========
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.style.color = '#ffd700';
            }
        }
    });
});

// ========== FORM INPUT VALIDATION ==========
document.getElementById('phone').addEventListener('input', function() {
    this.value = this.value.replace(/[^\d+]/g, '');
});

// ========== PAGE LOAD ANIMATION ==========
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Jyotish Sagaar Website Loaded Successfully!');
});
