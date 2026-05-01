* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #FF6B9D;
    --secondary: #C44569;
    --accent: #FFA502;
    --dark: #1a1a1a;
    --light: #f5f5f5;
    --white: #ffffff;
    --text: #333333;
    --success: #4CAF50;
    --error: #f44336;
    --warning: #ff9800;
    --info: #2196F3;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ===== NOTIFICATIONS ===== */
.notification-container {
    position: fixed;
    top: 80px;
    right: 20px;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.notification {
    background: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-left: 5px solid;
    animation: slideInRight 0.3s ease;
    min-width: 300px;
}

.notification.success {
    border-color: var(--success);
}

.notification.error {
    border-color: var(--error);
}

.notification.warning {
    border-color: var(--warning);
}

.notification.info {
    border-color: var(--info);
}

.notification-title {
    font-weight: bold;
    margin-bottom: 5px;
}

@keyframes slideInRight {
    from {
        transform: translateX(400px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* ===== MODAL ===== */
.modal {
    display: none;
    position: fixed;
    z-index: 5000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.3s ease;
}

.modal.show {
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background-color: var(--white);
    padding: 30px;
    border-radius: 15px;
    width: 90%;
    max-width: 450px;
    position: relative;
    animation: slideUp 0.3s ease;
}

.close {
    color: #aaa;
    position: absolute;
    right: 20px;
    top: 15px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
}

.close:hover {
    color: var(--primary);
}

.modal-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    border-bottom: 2px solid var(--light);
}

.tab-btn {
    background: none;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    color: #999;
    border-bottom: 3px solid transparent;
    transition: all 0.3s ease;
}

.tab-btn.active {
    color: var(--primary);
    border-bottom-color: var(--primary);
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
    animation: fadeIn 0.3s ease;
}

@keyframes slideUp {
    from {
        transform: translateY(50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* ===== FORMS ===== */
.form-group {
    margin-bottom: 15px;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid var(--light);
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 10px rgba(255, 107, 157, 0.2);
}

.submit-btn,
.action-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-btn:hover,
.action-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 107, 157, 0.3);
}

.form-note {
    text-align: center;
    font-size: 0.9rem;
    color: #999;
    margin-top: 10px;
}

/* ===== NAVIGATION ===== */
.navbar {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 2px;
}

.nav-menu {
    display: flex;
    gap: 2rem;
    list-style: none;
    align-items: center;
}

.nav-link {
    color: var(--white);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
}

.nav-link:hover {
    opacity: 0.8;
}

.login-btn {
    background: var(--accent);
    color: var(--white);
    border: none;
    padding: 10px 25px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.login-btn:hover {
    transform: scale(1.05);
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--white);
    border-radius: 3px;
    transition: all 0.3s ease;
}

/* ===== LANDING PAGE ===== */
.landing-page {
    display: block;
}

.landing-page.hidden {
    display: none;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: var(--white);
    padding: 100px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    min-height: 90vh;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    line-height: 1.2;
    animation: slideInLeft 0.8s ease;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.95;
}

.cta-btn {
    background: var(--accent);
    color: var(--white);
    border: none;
    padding: 15px 40px;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.phone-mockup {
    display: flex;
    justify-content: center;
}

.phone-screen {
    width: 250px;
    height: 500px;
    background: var(--white);
    border-radius: 40px;
    border: 12px solid var(--dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.app-icon {
    font-size: 4rem;
}

.app-text {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
}

/* Problems Section */
.problems {
    padding: 80px 20px;
    background: var(--light);
}

.problems h2,
.solution h2,
.features h2,
.why-lifecare h2,
.about h2,
.contact h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: var(--dark);
}

.section-subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 50px;
    font-size: 1.1rem;
}

.problems-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.problem-card {
    background: var(--white);
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.problem-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.problem-icon {
    font-size: 3rem;
    margin-bottom: 15px;
}

.problem-card h3 {
    color: var(--primary);
    margin-bottom: 10px;
    font-size: 1.3rem;
}

/* Solution Section */
.solution {
    padding: 80px 20px;
    background: var(--white);
}

.solution-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.solution-text h3 {
    color: var(--primary);
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 10px;
}

.solution-text p {
    font-size: 1.1rem;
    margin-bottom: 20px;
    line-height: 1.8;
}

/* Features Section */
.features {
    padding: 80px 20px;
    background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(196, 69, 105, 0.1) 100%);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.feature-card {
    background: var(--white);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-10px);
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: var(--white);
}

.feature-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
}

.feature-card h3 {
    color: var(--primary);
    margin-bottom: 10px;
    font-size: 1.3rem;
}

.feature-card:hover h3 {
    color: var(--white);
}

/* Why LifeCare Section */
.why-lifecare {
    padding: 80px 20px;
    background: var(--light);
}

.why-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.why-card {
    background: var(--white);
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-left: 5px solid var(--primary);
}

.why-card:hover {
    transform: translateY(-10px);
}

.why-card h3 {
    color: var(--primary);
    margin-bottom: 10px;
    font-size: 1.2rem;
}

/* About Section */
.about {
    padding: 80px 20px;
    background: var(--white);
}

.about-content {
    max-width: 700px;
    margin: 0 auto;
}

.about-content h3 {
    color: var(--primary);
    font-size: 1.5rem;
    margin-top: 30px;
    margin-bottom: 15px;
}

.about-content p {
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 20px;
}

/* Contact Section */
.contact {
    padding: 80px 20px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: var(--white);
}

.contact h2,
.contact .section-subtitle {
    color: var(--white);
}

.contact-info {
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    padding: 40px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
}

.contact-info h3 {
    margin-bottom: 20px;
    font-size: 1.3rem;
}

.contact-info p {
    margin-bottom: 10px;
    font-size: 1.05rem;
}

/* Footer */
.footer {
    background: var(--dark);
    color: var(--white);
    padding: 30px 20px;
    text-align: center;
}

.footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.social-links {
    display: flex;
    gap: 20px;
}

.social-links a {
    color: var(--white);
    text-decoration: none;
}

/* ===== DASHBOARD ===== */
.dashboard {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: var(--light);
}

.dashboard.hidden {
    display: none;
}

.dashboard-navbar {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.dashboard-nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dashboard-menu {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
}

.dashboard-btn {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid transparent;
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
}

.dashboard-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: white;
}

.logout-btn {
    background: var(--accent);
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.logout-btn:hover {
    transform: scale(1.05);
}

.dashboard-content {
    flex: 1;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    padding: 30px 20px;
}

.dashboard-section {
    display: none;
    animation: fadeIn 0.3s ease;
}

.dashboard-section.active {
    display: block;
}

.dashboard-section h2 {
    color: var(--primary);
    margin-bottom: 30px;
    font-size: 2rem;
}

/* Health Container */
.health-container,
.tasks-container,
.expenses-container,
.duty-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.health-form,
.task-form,
.expense-form,
.duty-form {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.health-form h3,
.task-form h3,
.expense-form h3,
.duty-form h3 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.3rem;
}

.health-list,
.task-list,
.expense-list,
.duty-list {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-height: 600px;
    overflow-y: auto;
}

.empty-msg {
    text-align: center;
    color: #999;
    padding: 40px 20px;
}

/* Item Cards */
.item-card {
    background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(196, 69, 105, 0.1) 100%);
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    border-left: 4px solid var(--primary);
}

.item-card h4 {
    color: var(--primary);
    margin-bottom: 8px;
}

.item-card p {
    font-size: 0.95rem;
    margin-bottom: 5px;
}

.item-actions {
    margin-top: 10px;
    display: flex;
    gap: 10px;
}

.delete-btn {
    background: var(--error);
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.delete-btn:hover {
    opacity: 0.8;
}

/* Expenses Stats */
.expense-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 30px;
}

.stat-card {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
}

.stat-card p {
    opacity: 0.9;
    margin-bottom: 10px;
}

.stat-card h3 {
    font-size: 1.8rem;
}

.stat-card input {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid white;
    padding: 8px 12px;
    border-radius: 5px;
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
}

.stat-card input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

/* Profile Container */
.profile-container {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
}

.profile-card h3 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
}

.profile-card p {
    margin-bottom: 15px;
}

.profile-card h4 {
    color: var(--primary);
    margin-top: 25px;
    margin-bottom: 15px;
}

/* Responsive */
@media (max-width: 768px) {
    .health-container,
    .tasks-container,
    .expenses-container,
    .duty-container {
        grid-template-columns: 1fr;
    }

    .hero {
        grid-template-columns: 1fr;
        padding: 60px 20px;
        text-align: center;
    }

    .hero-content h1 {
        font-size: 2.2rem;
    }

    .phone-mockup {
        display: none;
    }

    .dashboard-menu {
        gap: 0.5rem;
    }

    .dashboard-btn {
        padding: 6px 12px;
        font-size: 0.9rem;
    }

    .notification {
        min-width: 250px;
        font-size: 0.9rem;
    }

    .modal-content {
        width: 95%;
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
