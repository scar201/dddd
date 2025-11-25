
const WEBHOOK_URL = 'https://canary.distQc3wS7oeOiOWMlTBVtlKTKH7Y5An-Iq';

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Rules Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab');
    
    // Remove active class from all buttons and contents
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button and corresponding content
    btn.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-item, .rule-card, .store-item, .link-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero-content');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// Activation Form Handler
document.getElementById('activationForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const answers = {};
  
  for (let [key, value] of formData.entries()) {
    answers[key] = value;
  }
  
  const discordUsername = answers.q0;
  
  const embed = {
    title: 'طلب تفعيل جديد',
    color: 9333994,
    fields: [
      {
        name: '-0: يوزرك روبلوكس',
        value: answers.q_minus0,
        inline: false
      },
      {
        name: '0: يوزرك ديسكورد',
        value: discordUsername,
        inline: false
      },
      {
        name: '1: ماذا يعني الباور جيمنج - PowerGaming؟',
        value: answers.q1,
        inline: false
      },
      {
        name: '2: ماذا يعني الخوف على الحياة - NVL؟',
        value: answers.q2,
        inline: false
      },
      {
        name: '3: الصدم العشوائي - VDM',
        value: answers.q3,
        inline: false
      },
      {
        name: '4: ماهو القتل العشوائي - RDM؟',
        value: answers.q4,
        inline: false
      },
      {
        name: '5: ماهو قانون تقدير الحياة - NWL؟',
        value: answers.q5,
        inline: false
      },
      {
        name: '6: هل يمنع الاتفاقيات خارج الرول بلاي؟',
        value: answers.q6,
        inline: false
      },
      {
        name: '7: هل يسمح لك اهانة الشخص المسقط بتاتاً؟',
        value: answers.q7,
        inline: false
      },
      {
        name: '8: في حال جاك شخص وهددك ب سلاح وانت اعزل ما هو التصرف الصحيح؟',
        value: answers.q8,
        inline: false
      },
      {
        name: '9: في حال جاك شخص شفته مشغل هاك ماهو التصرف الصحيح؟',
        value: answers.q9,
        inline: false
      },
      {
        name: '10: هل يمديك قتل مسعف؟',
        value: answers.q10,
        inline: false
      },
      {
        name: '11: هل ممنوع كتابة أسمك باللغة الإنجليزية او برموز او تشكيل او اسم شخصيه مشهوره؟',
        value: answers.q11,
        inline: false
      },
      {
        name: '12: في حال رفع شخص عليك سلاحاً ماهو التصرف الصحيح؟',
        value: answers.q12,
        inline: false
      },
      {
        name: '13: هل يسمح لك بتذكر شخص الي تسبب في موتك؟',
        value: answers.q13,
        inline: false
      },
      {
        name: '14: مسموح لك مشاركة حساباتك او معلوماتك الشخصية؟',
        value: answers.q14,
        inline: false
      },
      {
        name: '15: هل يمديك تلوت المسعفين والتيزر للعساكر؟',
        value: answers.q15,
        inline: false
      }
    ],
    timestamp: new Date().toISOString()
  };
  
  const payload = {
    content: `منشن للمستخدم: ${discordUsername}`,
    embeds: [embed]
  };
  
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    if (response.ok) {
      document.getElementById('activationForm').style.display = 'none';
      document.getElementById('successMessage').style.display = 'block';
      
      // Scroll to success message
      document.getElementById('successMessage').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      alert('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.');
  }
});

// Console message
console.log('%c🎮 مرحباً بك في Life City! ', 'background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%); color: white; font-size: 20px; padding: 10px 20px; border-radius: 5px;');
console.log('%cللانضمام للسيرفر، قم بزيارة الروابط الموجودة في الموقع', 'color: #a0a0b0; font-size: 14px;');
