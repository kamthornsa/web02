// JavaScript สำหรับ Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // เรียกใช้ฟังก์ชันเริ่มต้น
    initializePortfolio();
    initializeNavigation();
    initializeAnimations();
    initializeContactForm();
});

// ฟังก์ชันเริ่มต้น Portfolio
function initializePortfolio() {
    populatePersonalInfo();
    populateSkills();
    populateExperience();
    populateProjects();
    populateContactInfo();
}

// ฟังก์ชันเติมข้อมูลส่วนตัว
function populatePersonalInfo() {
    const personal = portfolioData.personal;
    
    // อัพเดทข้อมูลในหน้า Hero
    document.getElementById('fullname').textContent = personal.fullname;
    document.getElementById('position').textContent = personal.position;
    document.getElementById('hero-description').textContent = personal.heroDescription;
    document.getElementById('profile-image').src = personal.profileImage;
    document.getElementById('profile-image').alt = `รูปโปรไฟล์ของ ${personal.fullname}`;
    
    // อัพเดทข้อมูลในหน้า About
    document.getElementById('about-description').textContent = personal.aboutDescription;
    document.getElementById('about-slogan').textContent = `"${personal.slogan}"`;
    
    // อัพเดทลิงก์ CV
    document.getElementById('download-cv').href = personal.cvUrl;
    
    // อัพเดท Footer
    document.getElementById('footer-name').textContent = personal.fullname;
}

// ฟังก์ชันเติมข้อมูลทักษะ
function populateSkills() {
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';
    
    portfolioData.skills.forEach(skillGroup => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card fade-in';
        
        skillCard.innerHTML = `
            <div class="text-center mb-4">
                <i class="${skillGroup.icon} text-3xl text-primary mb-3"></i>
                <h3 class="text-xl font-semibold mb-4">${skillGroup.category}</h3>
            </div>
            <div class="flex flex-wrap justify-center">
                ${skillGroup.items.map(skill => `
                    <span class="tech-tag">${skill}</span>
                `).join('')}
            </div>
        `;
        
        skillsContainer.appendChild(skillCard);
    });
}

// ฟังก์ชันเติมข้อมูลประสบการณ์
function populateExperience() {
    const experienceTimeline = document.getElementById('experience-timeline');
    experienceTimeline.innerHTML = '';
    
    portfolioData.experience.forEach((exp, index) => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'timeline-item fade-in';
        
        experienceItem.innerHTML = `
            <div class="bg-white p-6 rounded-lg shadow-md ml-6">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                        <h3 class="text-xl font-semibold text-gray-900">${exp.position}</h3>
                        <h4 class="text-lg text-primary font-medium">${exp.company}</h4>
                    </div>
                    <span class="text-sm text-gray-500 mt-1 md:mt-0">${exp.period}</span>
                </div>
                <ul class="list-disc list-inside text-gray-600 mb-4 space-y-1">
                    ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
                </ul>
                <div class="flex flex-wrap">
                    ${exp.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
            </div>
        `;
        
        experienceTimeline.appendChild(experienceItem);
    });
}

// ฟังก์ชันเติมข้อมูลโปรเจกต์
function populateProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '';
    
    // แสดงโปรเจกต์เด่นก่อน แล้วตามด้วยโปรเจกต์อื่น
    const sortedProjects = portfolioData.projects.sort((a, b) => b.featured - a.featured);
    
    sortedProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        
        projectCard.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${project.image}" alt="${project.name}" 
                     class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110">
                ${project.featured ? '<div class="absolute top-3 right-3 bg-accent text-white px-2 py-1 rounded text-xs font-semibold">เด่น</div>' : ''}
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">${project.name}</h3>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <div class="flex flex-wrap mb-4">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
                <div class="flex space-x-3">
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
                       class="flex items-center text-gray-600 hover:text-primary transition-colors">
                        <i class="fab fa-github mr-2"></i>
                        Code
                    </a>
                    ${project.liveUrl ? `
                        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer"
                           class="flex items-center text-gray-600 hover:text-primary transition-colors">
                            <i class="fas fa-external-link-alt mr-2"></i>
                            Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// ฟังก์ชันเติมข้อมูลติดต่อ
function populateContactInfo() {
    const contactInfo = document.getElementById('contact-info');
    const contact = portfolioData.contact;
    
    contactInfo.innerHTML = `
        <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>${contact.email}</span>
        </div>
        <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>${contact.phone}</span>
        </div>
        <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>${contact.location}</span>
        </div>
        <div class="contact-item">
            <i class="fas fa-globe"></i>
            <a href="${contact.website}" target="_blank" rel="noopener noreferrer" 
               class="text-primary hover:underline">${contact.website}</a>
        </div>
    `;
    
    // เติม Social Links
    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = portfolioData.social.map(social => `
        <a href="${social.url}" target="_blank" rel="noopener noreferrer" 
           class="social-link" title="${social.name}">
            <i class="${social.icon}"></i>
        </a>
    `).join('');
}

// ฟังก์ชันจัดการ Navigation
function initializeNavigation() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Smooth scrolling สำหรับ navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // ลบ height ของ navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // ปิด mobile menu หลังจากคลิก
                mobileMenu.classList.add('hidden');
            }
        });
    });
    
    // ไฮไลท์ active navigation link
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('text-primary');
                });
                
                // Add active class to current nav link
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('text-primary');
                }
            }
        });
    });
}

// ฟังก์ชันจัดการ Animations
function initializeAnimations() {
    // Intersection Observer สำหรับ fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // เฝ้าดูทุก element ที่มี class fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ฟังก์ชันจัดการ Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // แสดง loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading"></span> กำลังส่ง...';
        submitBtn.disabled = true;
        
        // จำลองการส่งข้อความ (ในการใช้งานจริงอาจจะเชื่อมต่อกับ API)
        setTimeout(() => {
            // แสดงข้อความสำเร็จ
            showNotification('ส่งข้อความเรียบร้อยแล้ว ขอบคุณที่ติดต่อเรา!', 'success');
            
            // รีเซ็ตฟอร์ม
            contactForm.reset();
            
            // รีเซ็ตปุ่ม
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
        }, 2000);
        
        // ในการใช้งานจริง คุณสามารถใช้บริการเช่น Formspree, Getform หรือ Netlify Forms
        // หรือส่งข้อมูลไปยัง API ของคุณเอง
    });
}

// ฟังก์ชันแสดง Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // แสดง notification
    setTimeout(() => {
        notification.classList.add('opacity-100');
    }, 100);
    
    // ซ่อน notification หลังจาก 5 วินาที
    setTimeout(() => {
        notification.classList.add('opacity-0');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// ฟังก์ชันสำหรับกรองโปรเจกต์ (อาจจะใช้ในอนาคต)
function filterProjects(category = 'all') {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            // Logic สำหรับกรองตามหมวดหมู่
            card.style.display = 'block';
        }
    });
}

// ฟังก์ชันเปลี่ยนธีม (สำหรับการพัฒนาในอนาคต)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// โหลดธีมจาก localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// เรียกใช้เมื่อโหลดหน้าเว็บ
loadTheme();
