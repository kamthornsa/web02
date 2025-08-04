// ข้อมูล Portfolio - แก้ไขข้อมูลตรงนี้
const portfolioData = {
    // ข้อมูลส่วนตัว
    personal: {
        fullname: "สมชาย ใจดี",
        position: "Full Stack Developer",
        profileImage: "https://via.placeholder.com/200x200/3B82F6/FFFFFF?text=Profile",
        heroDescription: "นักพัฒนาซอฟต์แวร์ที่มีประสบการณ์ 3+ ปี ในการสร้างเว็บแอปพลิเคชันและแอปพลิเคชันมือถือ",
        aboutDescription: `ฉันเป็นนักพัฒนาซอฟต์แวร์ที่มีความหลงใหลในการสร้างแอปพลิเคชันที่มีคุณภาพและใช้งานง่าย 
        มีประสบการณ์ทำงานกับเทคโนโลยีหลากหลาย ตั้งแต่ Frontend, Backend ไปจนถึง Mobile Development 
        ชอบเรียนรู้สิ่งใหม่ๆ และติดตามเทรนด์เทคโนโลยีอยู่เสมอ`,
        slogan: "Code with passion, Build with purpose",
        cvUrl: "./resume.pdf" // ลิงก์ไฟล์ CV
    },

    // ทักษะ
    skills: [
        {
            category: "Frontend Development",
            items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Angular", "Tailwind CSS", "Bootstrap"],
            icon: "fas fa-laptop-code"
        },
        {
            category: "Backend Development", 
            items: ["Node.js", "Express.js", "Python", "Django", "FastAPI", "PHP", "Laravel"],
            icon: "fas fa-server"
        },
        {
            category: "Database",
            items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"],
            icon: "fas fa-database"
        },
        {
            category: "Mobile Development",
            items: ["React Native", "Flutter", "Ionic"],
            icon: "fas fa-mobile-alt"
        },
        {
            category: "DevOps & Tools",
            items: ["Git", "Docker", "AWS", "Heroku", "Netlify", "Vercel"],
            icon: "fas fa-tools"
        },
        {
            category: "Design & UI/UX",
            items: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
            icon: "fas fa-paint-brush"
        }
    ],

    // ประสบการณ์ทำงาน
    experience: [
        {
            company: "บริษัท เทคโนโลยี ABC จำกัด",
            position: "Senior Full Stack Developer",
            period: "ม.ค. 2022 - ปัจจุบัน",
            description: [
                "พัฒนาและดูแลเว็บแอปพลิเคชัน E-commerce ที่มีผู้ใช้งานมากกว่า 100,000 คน",
                "ออกแบบและพัฒนา RESTful API สำหรับระบบจัดการสินค้าคงคลัง",
                "นำทีมพัฒนา 5 คน ในการสร้างแอปพลิเคชันมือถือ",
                "ปรับปรุงประสิทธิภาพระบบให้เร็วขึ้น 40%"
            ],
            technologies: ["React", "Node.js", "PostgreSQL", "AWS", "React Native"]
        },
        {
            company: "สตาร์ทอัพ XYZ",
            position: "Frontend Developer",
            period: "มิ.ย. 2020 - ธ.ค. 2021", 
            description: [
                "พัฒนาหน้าเว็บ Admin Dashboard สำหรับระบบจัดการลูกค้า",
                "สร้าง Component Library ด้วย React และ Storybook",
                "ทำงานร่วมกับทีม UX/UI ในการปรับปรุงประสบการณ์ผู้ใช้",
                "เขียน Unit Test และ Integration Test"
            ],
            technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Jest", "Cypress"]
        },
        {
            company: "บริษัท ดิจิทัล 123 จำกัด",
            position: "Junior Web Developer",
            period: "ก.ย. 2019 - พ.ค. 2020",
            description: [
                "พัฒนาเว็บไซต์สำหรับลูกค้ามากกว่า 20 โปรเจกต์",
                "เรียนรู้และประยุกต์ใช้ Modern JavaScript Framework",
                "ทำงานร่วมกับทีม Backend ในการพัฒนา API",
                "รับผิดชอบ Frontend Testing และ Bug Fixing"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"]
        }
    ],

    // โปรเจกต์
    projects: [
        {
            name: "E-Commerce Platform",
            description: "แพลตฟอร์มอีคอมเมิร์ซครบวงจร รองรับการชำระเงินออนไลน์ และระบบจัดการสินค้าคงคลัง",
            image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=E-Commerce",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
            githubUrl: "https://github.com/username/ecommerce-platform",
            liveUrl: "https://ecommerce-demo.vercel.app",
            featured: true
        },
        {
            name: "Task Management App",
            description: "แอปพลิเคชันจัดการงานแบบ Real-time พร้อมระบบแจ้งเตือนและการทำงานร่วมกันในทีม",
            image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Task+Manager",
            technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
            githubUrl: "https://github.com/username/task-manager",
            liveUrl: "https://task-manager-demo.netlify.app",
            featured: true
        },
        {
            name: "Weather Dashboard",
            description: "แดชบอร์ดแสดงข้อมูลสภาพอากาศพร้อมกราฟและการพยากรณ์อากาศ 7 วัน",
            image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Weather+App",
            technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
            githubUrl: "https://github.com/username/weather-dashboard",
            liveUrl: "https://weather-dashboard-demo.vercel.app",
            featured: false
        },
        {
            name: "Portfolio CMS",
            description: "ระบบจัดการเนื้อหาสำหรับเว็บไซต์ Portfolio พร้อม Admin Panel",
            image: "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Portfolio+CMS",
            technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js"],
            githubUrl: "https://github.com/username/portfolio-cms",
            liveUrl: null,
            featured: false
        },
        {
            name: "Chat Application",
            description: "แอปพลิเคชันแชทแบบ Real-time รองรับการส่งไฟล์และ Group Chat",
            image: "https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Chat+App",
            technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
            githubUrl: "https://github.com/username/chat-app",
            liveUrl: "https://chat-app-demo.herokuapp.com",
            featured: false
        },
        {
            name: "Learning Platform",
            description: "แพลตฟอร์มการเรียนรู้ออนไลน์พร้อมระบบ Quiz และ Progress Tracking",
            image: "https://via.placeholder.com/400x250/06B6D4/FFFFFF?text=Learning+Platform",
            technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
            githubUrl: "https://github.com/username/learning-platform",
            liveUrl: null,
            featured: false
        }
    ],

    // ข้อมูลติดต่อ
    contact: {
        email: "somchai.jaidee@email.com",
        phone: "+66 89-123-4567",
        location: "กรุงเทพมหานคร, ไทย",
        website: "https://portfolio.somchai.dev"
    },

    // Social Links
    social: [
        {
            name: "GitHub",
            url: "https://github.com/username",
            icon: "fab fa-github"
        },
        {
            name: "LinkedIn", 
            url: "https://linkedin.com/in/username",
            icon: "fab fa-linkedin"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/username",
            icon: "fab fa-twitter"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/username", 
            icon: "fab fa-instagram"
        }
    ]
};

// Export ข้อมูลเพื่อใช้ในไฟล์อื่น
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
