<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

type Theme = 'color' | 'dark'

const currentTheme = ref<Theme>('color')
const isThemeDropdownOpen = ref(false)
const isLoading = ref(true)

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute('data-theme', theme)
}

const setTheme = (theme: Theme) => {
  currentTheme.value = theme
  localStorage.setItem('resume-theme', theme)
  applyTheme(theme)
  isThemeDropdownOpen.value = false
}

const toggleThemeDropdown = () => {
  isThemeDropdownOpen.value = !isThemeDropdownOpen.value
}

onMounted(() => {
  const savedTheme = localStorage.getItem('resume-theme') as Theme | null
  if (savedTheme && ['color', 'dark'].includes(savedTheme)) {
    currentTheme.value = savedTheme
  } else {
    currentTheme.value = 'color'
  }
  applyTheme(currentTheme.value)

  // Minimum 2 second loader
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})

const liveExp = computed(() => {
  const startDate = new Date(2025, 9, 13)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - startDate.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  const years = diffDays / 365.25
  return years.toFixed(1)
})

const skills = [
  'Java', 'Cascading Style Sheets (CSS)', 'HTML',
  'Linux', 'MySQL', 'React', 'NodeJS', 'MS Excel', 'Manual Testing',
  'GenAI', 'Bash', 'Git', 'Python', 'JavaScript', 'Canva', 
  'Selenium', 'RestAPI', 'SQL', 'Agile', 'Maven', 'Rest Assured', 'Jenkins', 'CI/CD', 'Docker'
]
</script>

<template>
  <transition name="fade">
    <div v-if="isLoading" class="global-loader">
      <img src="/heart_loader.webp" alt="Loading..." class="heart-breathe" />
    </div>
  </transition>

  <div class="resume-wrapper">
    <div class="resume-card">
      
      <!-- Header Area -->
      <div class="header-section">
        <img src="/dp.jpg" alt="Sayantani Saha" class="avatar" />
        <div class="header-info">
          <p class="role-text">Looking for <strong>SDE I</strong> or <strong>QEA role</strong>.</p>
          <h1 class="name">Sayantani Saha <span class="pronouns">(She / Her)</span></h1>
          <p class="location">Kolkata, West Bengal, India</p>
          <p class="opentowork-text">#OpenToWork</p>
        </div>
      </div>

      <div class="resume-button-container">
        <a href="/resume.pdf" target="_blank" class="btn-resume">View Resume (PDF)</a>
      </div>

      <!-- Quick Overview -->
      <div class="section">
        <h2 class="section-title">Quick Overview</h2>
        
        <div class="subsection">
          <p class="subsection-label">Highest Education</p>
          <div class="education-item">
            <h3 class="item-title">Bengal Institute Of Technology <span class="dot">•</span> <span class="item-meta">Kolkata, West Bengal, India</span></h3>
            <p class="item-desc">Bachelor of Technology - BTech, Information Technology <span class="dot">•</span> 2021</p>
          </div>
          <div class="education-item mt-2">
            <h3 class="item-title">Calcutta Public School <span class="dot">•</span> <span class="item-meta">Baguiati, Kolkata, West Bengal</span></h3>
            <p class="item-desc">Higher Secondary (Science)</p>
          </div>
        </div>

        <div class="subsection mt-4">
          <p class="subsection-label">Work Experience</p>
          
          <div class="company-root">
            <div class="company-header-main">
              <img src="/cognizant-logo_512x512.png" alt="Cognizant" class="company-logo-main" />
            </div>
            
            <div class="company-tree">
              <div class="work-item">
                <div class="work-header">
                  <h3 class="item-title role-with-icon">
                    PROGRAMMER ANALYST TRAINEE <span class="divider">|</span> <img src="/CTS.png" class="inline-cts" alt="CTS" />
                  </h3>
                  <span class="item-date">Sept 2025 &ndash; Current</span>
                </div>
                <p class="item-meta">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="work-mode-icon"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                  In-office, India
                </p>
                <div class="project-layer mt-2">
                   <div class="work-header inline-project-header">
                     <h4 class="item-subtitle">Project: QEA Insurance <span class="muted-date">(Jan 2025 &ndash; Current)</span></h4>
                   </div>
                   <p class="item-meta">Kolkata, West Bengal</p>
                </div>

                <div class="project-layer mt-2">
                   <div class="work-header inline-project-header">
                     <h4 class="item-subtitle">Project: QEA Healthcare <span class="muted-date">(Sept 2025 &ndash; Jan 2025)</span></h4>
                   </div>
                   <p class="item-meta">Coimbatore, Tamil Nadu</p>
                   <p class="item-desc mt-1">Worked in manual testing, performing validation of data and executed comprehensive claims testing.</p>
                </div>
              </div>
              
              <div class="work-item mt-4">
                <div class="work-header">
                  <h3 class="item-title role-with-icon">
                    PROGRAMMER ANALYST INTERN <span class="divider">|</span> <img src="/CTS.png" class="inline-cts" alt="CTS" />
                  </h3>
                  <span class="item-date">May 2025 &ndash; August 2025</span>
                </div>
                <p class="item-meta">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="work-mode-icon"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  Remote, Chennai, India
                </p>
                <p class="item-desc mt-2">Focused on technical upskilling through hands-on coding, project work, webinars, and milestone-based evaluations; prepared with Agile and Testing skill set for QEA while adapting to dynamic skill tracks and collaborating with industry mentors to align learning with real-world business needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="section">
        <h2 class="section-title">Skills</h2>
        <div class="skills-container">
          <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
        </div>
      </div>

      <!-- Connections -->
      <div class="section">
        <h2 class="section-title">Connections <span class="emoji">🤝</span></h2>
        <ul class="connections-list">
          <li>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            <a href="mailto:sayantanisaha882@gmail.com">sayantanisaha882@gmail.com</a>
          </li>
          <li>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <a href="https://www.linkedin.com/in/sayantani-saha-150aa2251/">LinkedIn</a>
          </li>
          <li>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            <a href="#">GitHub</a>
          </li>
        </ul>
      </div>

      <!-- Footer / Mini bar -->
      <div class="footer-bar">
        <!-- Replaced Theme Dropdown -->
        <div class="theme-dropdown-container">
          <button class="theme-toggle-btn" @click="toggleThemeDropdown" title="Toggle Theme">
            <svg class="palette-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.992 6.012 17.5 2 12 2z"></path></svg>
            <span class="capitalize">{{ currentTheme }}</span>
            <svg class="chevron" :class="{ open: isThemeDropdownOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
          </button>
          <div v-if="isThemeDropdownOpen" class="theme-dropdown-menu">
            <button @click="setTheme('color')" :class="{ active: currentTheme === 'color' }">Color</button>
            <button @click="setTheme('dark')" :class="{ active: currentTheme === 'dark' }">Dark</button>
          </div>
        </div>

        <div class="controls">
          <div class="exp-badge">
            EXP {{ liveExp }} Yrs
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Scoped vars structure - we map to actual CSS variables applied on :root */
.resume-wrapper {
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: var(--page-bg, #0f172a);
  position: relative; /* Contain pseudo element */
  display: flex;
  justify-content: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: var(--text-primary, #f8fafc);
  transition: background-color 0.3s, color 0.3s;
}

/* Tulip SVG Background */
.resume-wrapper::before {
  content: "";
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-color: var(--tulip-color, #ffffff);
  -webkit-mask-image: url('/tulip_bg.svg');
  -webkit-mask-size: 400px;
  -webkit-mask-repeat: repeat;
  -webkit-mask-position: center;
  mask-image: url('/tulip_bg.svg');
  mask-size: 400px;
  mask-repeat: repeat;
  mask-position: center;
  opacity: var(--bg-opacity, 0.3);
  z-index: 0;
  pointer-events: none; /* Don't block clicks */
  transform: rotate(-15deg); /* Diagonal */
}

.resume-card {
  width: 100%;
  max-width: 720px;
  background-color: var(--card-bg, #1e293b);
  border: 1px solid var(--border-color, #334155);
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  box-shadow: var(--card-shadow, 0 10px 40px rgba(0, 0, 0, 0.2));
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
  position: relative; /* Sit above the background */
  z-index: 1;
}

/* Header */
.header-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: var(--card-shadow);
}
.header-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.role-text {
  font-size: 0.9rem;
  color: var(--text-secondary, #94a3b8);
  margin: 0;
}
.role-text strong {
  color: var(--text-primary, #f8fafc);
  font-weight: 600;
}
.name {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;
}
.location {
  font-size: 0.85rem;
  color: var(--text-secondary, #94a3b8);
  margin: 0;
}

/* Resume Button */
.resume-button-container {
  display: flex;
}
.btn-resume {
  background-color: var(--btn-bg, #f472b6); /* Baby pink accent */
  color: var(--btn-text, #ffffff);
  padding: 0.6rem 1.2rem;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: transform 0.2s, opacity 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 14px 0 rgba(244, 114, 182, 0.39);
}
.btn-resume:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(244, 114, 182, 0.23);
}

/* Sections */
.section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.section-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color, #334155);
}

/* Subsections */
.subsection {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.subsection-label {
  font-size: 0.85rem;
  color: var(--text-secondary, #94a3b8);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}
.item-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: var(--text-primary, #f8fafc);
}
.item-subtitle {
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
  color: var(--text-primary);
}
.dot {
  color: var(--text-muted, #64748b);
  margin: 0 0.25rem;
}
.item-meta {
  font-size: 0.85rem;
  color: var(--text-secondary, #94a3b8);
  margin: 0;
  font-weight: normal;
}
.item-desc {
  font-size: 0.85rem;
  color: var(--text-secondary, #94a3b8);
  margin: 0;
  line-height: 1.5;
}
.item-subdesc {
  font-size: 0.8rem;
  color: var(--text-muted, #64748b);
  margin: 0.25rem 0 0 0;
}
.mt-2 { margin-top: 0.5rem; }
.mt-4 { margin-top: 1rem; }

.work-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
}
.item-date {
  font-size: 0.75rem;
  color: var(--text-secondary, #94a3b8);
  white-space: nowrap;
}

.project-layer {
  padding-left: 1rem;
  border-left: 2px solid var(--border-color, #334155);
  margin-top: 0.75rem;
}

.company-root {
  display: flex;
  flex-direction: column;
}

.company-header-main {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.company-logo-main {
  height: 40px; /* Big but not massive */
  object-fit: contain;
  background-color: var(--logo-bg, transparent);
  padding: var(--logo-pad, 0);
  border-radius: var(--logo-radius, 0);
  box-sizing: content-box; /* Preempt padding shrinkage */
}

.inline-project-header {
  justify-content: flex-start;
  align-items: center;
}

.muted-date {
  font-size: 0.8rem;
  font-weight: normal;
  color: var(--text-muted, #64748b);
  margin-left: 0.5rem;
}

.role-with-icon {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.divider {
  color: var(--text-muted, #64748b);
  font-weight: 300;
}

.inline-cts {
  height: 18px;
  width: auto;
  object-fit: contain;
}

.company-tree {
  margin-left: 14px;
  padding-left: 20px;
  border-left: 2px solid var(--border-color, #334155);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
}

/* Skills */
.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.skill-tag {
  background-color: var(--tag-bg, #334155);
  color: var(--tag-text, #e2e8f0);
  padding: 0.35rem 0.7rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: background-color 0.3s, color 0.3s;
}
.skill-tag:hover {
  background-color: var(--tag-bg-hover, #475569);
  color: var(--text-primary);
}

/* Connections */
.emoji { font-size: 1rem; }
.connections-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.connections-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.icon {
  width: 18px;
  height: 18px;
  color: var(--text-secondary, #94a3b8);
}
.connections-list a {
  color: var(--text-primary, #f8fafc);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}
.connections-list a:hover {
  color: var(--link-hover, #38bdf8); /* Light blue link hover */
  text-decoration: underline;
}

/* Footer / Mini bar */
.footer-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color, #334155);
  flex-wrap: wrap;
  gap: 1rem;
}

.controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Theme Dropdown styling */
.theme-dropdown-container {
  position: relative;
}

.theme-toggle-btn {
  background: var(--tag-bg, #334155);
  border: 1px solid var(--border-color, #334155);
  color: var(--text-primary, #f8fafc);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.theme-toggle-btn:hover {
  background: var(--tag-bg-hover, #475569);
}

.palette-icon {
  width: 16px;
  height: 16px;
}

.capitalize {
  text-transform: capitalize;
}

.chevron {
  width: 14px;
  height: 14px;
  transition: transform 0.2s;
}

.chevron.open {
  transform: rotate(180deg);
}

.theme-dropdown-menu {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background: var(--card-bg, #1e293b);
  border: 1px solid var(--border-color, #334155);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 10;
  min-width: 120px;
}

.theme-dropdown-menu button {
  background: transparent;
  border: none;
  padding: 0.6rem 1rem;
  text-align: left;
  color: var(--text-secondary, #94a3b8);
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.theme-dropdown-menu button:hover {
  background: var(--tag-bg-hover, #475569);
  color: var(--text-primary, #f8fafc);
}

.theme-dropdown-menu button.active {
  color: var(--btn-bg, #f472b6); /* Baby pink indicator for active theme */
  font-weight: 600;
  background: var(--tag-bg, #334155);
}


/* EXP Badge */
.exp-badge {
  background-color: rgba(56, 189, 248, 0.1); /* Light blue tint */
  color: var(--link-hover, #38bdf8);
  border: 1px solid rgba(56, 189, 248, 0.2);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.1);
}

@media (max-width: 640px) {
  .header-section {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .avatar {
    width: 75px;
    height: 75px;
  }
  .name {
    font-size: 1.3rem;
  }
  .work-header {
    flex-direction: column;
    gap: 0.25rem;
  }
}

/* Pronouns & Status */
.pronouns {
  font-size: 1.1rem;
  color: var(--text-muted);
  font-weight: 400;
  vertical-align: middle;
}

.opentowork-text {
  color: var(--opentowork-color, #00FF41);
  font-size: 0.95rem;
  font-weight: 600;
  margin-top: 0.25rem;
}

.work-mode-icon {
  width: 14px;
  height: 14px;
  margin-right: 4px;
  vertical-align: -2px;
  opacity: 0.8;
}

/* Global Loader */
.global-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #e0f2fe; /* Light sky blue */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.heart-breathe {
  width: 300px;
  height: auto;
  animation: breathe 1.5s infinite ease-in-out;
}

@keyframes breathe {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

