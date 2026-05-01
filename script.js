// ===== USER DATA STORAGE =====
let currentUser = null;
let users = JSON.parse(localStorage.getItem('lifecareUsers')) || {};
let userActivities = JSON.parse(localStorage.getItem('lifecareActivities')) || {};

// ===== MODAL FUNCTIONS =====
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
}

function switchTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    if (tabName === 'login') {
        document.getElementById('loginForm').classList.add('active');
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
    } else {
        document.getElementById('signupForm').classList.add('active');
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
    }
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(title, message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-title">${title}</div>
        <div>${message}</div>
    `;
    
    container.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ===== LOGIN/SIGNUP =====
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation - in real app, this would verify against backend
    if (email && password) {
        // Create or retrieve user
        if (!users[email]) {
            users[email] = {
                email: email,
                password: password,
                name: email.split('@')[0],
                role: 'student',
                joinDate: new Date().toLocaleDateString(),
                allergies: '',
                medications: ''
            };
        }
        
        // Save user
        localStorage.setItem('lifecareUsers', JSON.stringify(users));
        
        // Login user
        currentUser = users[email];
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        closeModal('loginModal');
        showDashboard();
        showNotification('Welcome!', `Logged in as ${currentUser.name}`, 'success');
        
        // Clear form
        document.getElementById('loginForm').reset();
    }
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const role = document.getElementById('signupRole').value;
    const password = document.getElementById('signupPassword').value;
    
    if (users[email]) {
        showNotification('Error', 'Email already registered!', 'error');
        return;
    }
    
    users[email] = {
        email: email,
        password: password,
        name: name,
        role: role,
        joinDate: new Date().toLocaleDateString(),
        allergies: '',
        medications: ''
    };
    
    localStorage.setItem('lifecareUsers', JSON.stringify(users));
    
    currentUser = users[email];
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Initialize user activities
    if (!userActivities[email]) {
        userActivities[email] = {
            health: [],
            tasks: [],
            expenses: [],
            duty: []
        };
        localStorage.setItem('lifecareActivities', JSON.stringify(userActivities));
    }
    
    closeModal('loginModal');
    showDashboard();
    showNotification('Account Created!', `Welcome ${name}!`, 'success');
    
    // Clear form
    document.getElementById('signupForm').reset();
});

// ===== SHOW/HIDE DASHBOARD =====
function showDashboard() {
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    
    // Load user profile
    updateProfileDisplay();
    
    // Initialize activities if needed
    const email = currentUser.email;
    if (!userActivities[email]) {
        userActivities[email] = {
            health: [],
            tasks: [],
            expenses: [],
            duty: []
        };
    }
    
    // Load all data
    loadAllData();
}

function showLandingPage() {
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('landingPage').classList.remove('hidden');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showLandingPage();
    showNotification('Logged Out', 'You have been logged out', 'info');
}

// ===== DASHBOARD SECTIONS =====
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
}

// ===== HEALTH MANAGEMENT =====
function addHealth() {
    const symptom = document.getElementById('symptom').value;
    const medication = document.getElementById('medication').value;
    const notes = document.getElementById('notes').value;
    
    if (!symptom && !medication && !notes) {
        showNotification('Error', 'Please fill at least one field', 'error');
        return;
    }
    
    const email = currentUser.email;
    const health = {
        id: Date.now(),
        symptom: symptom,
        medication: medication,
        notes: notes,
        date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    };
    
    if (!userActivities[email]) userActivities[email] = { health: [], tasks: [], expenses: [], duty: [] };
    userActivities[email].health.push(health);
    localStorage.setItem('lifecareActivities', JSON.stringify(userActivities));
    
    showNotification('Success', 'Health record added!', 'success');
    
    // Clear fields
    document.getElementById('symptom').value = '';
    document.getElementById('medication').value = '';
    document.getElementById('notes').value = '';
    
    // Reload
    loadHealthData();
}

function loadHealthData() {
    const email = currentUser.email;
    const healthList = document.getElementById('healthList');
    const records = userActivities[email]?.health || [];
    
    if (records.length === 0) {
        healthList.innerHTML = '<p class="empty-msg">No health records yet. Start tracking!</p>';
        return;
    }
    
    healthList.innerHTML = records.map(record => `
        <div class="item-card">
            <h4>${record.symptom || 'No symptom'}</h4>
            <p><strong>Medication:</strong> ${record.medication || 'None'}</p>
            <p><strong>Notes:</strong> ${record.notes || 'None'}</p>
            <p><small>${record.date}</small></p>
            <div class="item-actions">
                <button class="delete-btn" onclick="deleteHealthRecord(${record.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function deleteHealthRecord(id) {
    const email = currentUser.email;
    userActivities[email].health = userActivities[email].health.filter(r => r.id !== id);
    localStorage.setItem('lifecareActivities', JSON.stringify(userActivities));
    loadHealthData();
    showNotification('Deleted', 'Record removed', 'info');
}

// ===== TASK MANAGEMENT =====
function addTask() {
    const name = document.getElementById('taskName').value;
    const priority = document.getElementById('taskPriority').value;
    const date = document.getElementById('taskDate').value;
    
    if (!name) {
        showNotification('Error', 'Please enter task name', 'error');
        return;
    }
    
    const email = currentUser.email;
    const task = {
        id: Date.now(),
        name: name,
        priority: priority,
        date: date,
        completed: false,
        createdAt: new Date().toLocaleDateString()
    };
    
    if (!userActivities[email]) userActivities[email] = { health: [], tasks: [], expenses: [], duty: [] };
    userActivities[email].tasks.push(task);
    localStorage.setItem('lifecareActivities', JSON.stringify(userActivities));
    
    showNotification('Success', 'Task added!', 'success');
    
    document.getElementById('taskName').value = '';
    document.getElementById('taskDate').value = '';
    
    loadTaskData();
}

function loadTaskData() {
    const email = currentUser.email;
    const taskList = document.getElementById('taskList');
    const tasks = userActivities[email]?.tasks || [];
    
    if (tasks.length === 0) {
        taskList.innerHTML = '<p class="empty-msg">No tasks yet. Create one!</p>';
        return;
    }
    
    taskList.innerHTML = tasks.map(task => `
        <div class="item-card">
            <h4>${task.name}</h4>
            <p><strong>Priority:</strong> <span style="color: ${task.priority === 'high' ? '#f44336' : task.priority === 'medium' ? '#ff9800' : '#4CAF50'}">${task.priority.toUpperCase()}</span></p>
            <p><strong>Due:</strong> ${task.date || 'No date'}</p>
            <div class="item-actions">
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function deleteTask(id) {
    const email = currentUser.email;
    userActivities[email].tasks = userActivities[email].tasks.filter(t => t.id !== id);
    localStorage.setItem('lifecareActivities', JSON.stringify(userActivities));
    loadTaskData();
    showNotification('Deleted', 'Task removed', 'info');
}

// ===== EXPENSE TRACKING =====
function addExpense() {
    const name = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const category = document.getElementById('expenseCategory').value;
    
    if (!name || !amount || amount <= 0) {
        showNotification('Error', 'Please fill all fields correctly', 'error');
        return;
    }
    
    const email = currentUser.email;
    const expense = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category,
        date: new Date().toLocaleDateString()
    };
    
    if (!userActivities[email]) userActivities[email] = { health: [], tasks: [], expenses: [], duty: [] };
    userActivities[email].expenses.push(expense);
    localStorage.setItem('lifecareActivities', JSON.stringify(userActivities));
    
    showNotification('Success', `₱${amount.toFixed(2)} added!`, 'success');
    
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
    
    loadExpenseData();
}

function loadExpenseData() {
    const email = currentUser.email;
    const expenseList = document.getElementById('expenseList');
    const expenses = userActivities[email]?.expenses || [];
    
    if (expenses.length === 0) {
        expenseList.innerHTML = '<p class="empty-msg">No expenses yet.</p>';
    } else {
        expenseList.innerHTML = expenses.map(expense => `
            <div class="item-card">
                <h4>${expense.name}</h4>
                <p><strong>Amount:</strong> ₱${expense.amount.toFixed(2)}</p>
                <p><strong>Category:</strong> ${expense.category}</p>
                <p><small>${expense.date}</small></p>
                <div class="item-actions">
                    <button class="delete-btn" onclick="deleteExpense(${expense.id})">Delete</button>
                </div>
            </div>
        `).join('');
    }
    
    // Update stats
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    document.getElementById('totalSpent').textContent = total.toFixed(2);
    
    // Check budget
    const budget = parseFloat(document.getElementById('budgetLimit').value) || 0;
    if (budget > 0 && total > budget) {
        showNotification('Budget Alert!', `You\'ve exceeded your budget by ₱${(total - budget).toFixed(2)}`, 'warning');
    }
}

function deleteExpense(id) {
    const email = currentUser.email;
    userActivities[email].expenses = userActivities[email].expenses.filter(e => e.id !== id);
    localStorage.setItem('lifecareActivities', JSON.stringify(userActivities));
    loadExpenseData();
    showNotification('Deleted', 'Expense removed', 'info');
}

function updateBudget() {
    const budget = parseFloat(document.getElementById('budgetLimit').value) || 0;
    const email = currentUser.email;
    const total = (userActivities[email]?.expenses || []).reduce((sum, exp) => sum + exp.amount, 0);
    
    if (budget > 0 && total > budget) {
        showNotification('Budget Exceeded!', `Current: ₱${total.toFixed(2)} | Budget: ₱${budget.toFixed(2)}`, 'warning');
    } else if (budget > 0) {
        showNotification('Budget Updated', `You have ₱${(budget - total).toFixed(2)} left`, 'success');
    }
}

// ===== DUTY PREPARATION =====
function addDutyPrep() {
    const area = document.getElementById('dutyArea').value;
    const checklist = document.getElementById('dutyChecklist').value;
    const notes = document.getElementById('confidenceNotes').value;
    
    if (!area) {
        showNotification('Error', 'Please enter duty area', 'error');
        return;
    }
    
    const email = currentUser.email;
    const duty = {
        id: Date.now(),
        area: area,
        checklist: checklist.split(',').filter(item => item.trim()),
        notes: notes,
        date: new Date().toLocaleDateString()
    };
    
    if (!userActivities[email]) userActivities[email] = { health: [], tasks: [], expenses: [], duty: [] };
    userActivities[email].duty.push(duty);
    localStorage.setItem('lifecareActivities', JSON.stringify(userActivities));
    
    showNotification('Success', `Duty prep for ${area} saved!`, 'success');
    
    document.getElementById('dutyArea').value = '';
    document.getElementById('dutyChecklist').value = '';
    document.getElementById('confidenceNotes').value = '';
    
    loadDutyData();
}

function loadDutyData() {
    const email = currentUser.email;
    const dutyList = document.getElementById('dutyList');
    const duties = userActivities[email]?.duty || [];
    
    if (duties.length === 0) {
        dutyList.innerHTML = '<p class="empty-msg">No duty preparations yet.</p>';
        return;
    }
    
    dutyList.innerHTML = duties.map(duty => `
        <div class="item-card">
            <h4>📍 ${duty.area}</h4>
            <p><strong>Items to Bring:</strong></p>
            <ul>
                ${duty.checklist.map(item => `<li>✓ ${item.trim()}</li>`).join('')}
            </ul>
            <p><strong>Tips:</strong> ${duty.notes || 'No notes'}</p>
            <p><small>${duty.date}</small></p>
            <div class="item-actions">
                <button class="delete-btn" onclick="deleteDuty(${duty.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function deleteDuty(id) {
    const email = currentUser.email;
    userActivities[email].duty = userActivities[email].duty.filter(d => d.id !== id);
    localStorage.setItem('lifecareActivities', JSON.stringify(userActivities));
    loadDutyData();
    showNotification('Deleted', 'Duty prep removed', 'info');
}

// ===== PROFILE =====
function updateProfileDisplay() {
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('profileRole').textContent = currentUser.role.replace('-', ' ').toUpperCase();
    document.getElementById('profileDate').textContent = currentUser.joinDate;
    document.getElementById('allergies').value = currentUser.allergies || '';
    document.getElementById('medications').value = currentUser.medications || '';
}

function updateProfile() {
    const allergies = document.getElementById('allergies').value;
    const medications = document.getElementById('medications').value;
    
    currentUser.allergies = allergies;
    currentUser.medications = medications;
    
    users[currentUser.email] = currentUser;
    localStorage.setItem('lifecareUsers', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    showNotification('Success', 'Profile updated!', 'success');
}

// ===== LOAD ALL DATA =====
function loadAllData() {
    loadHealthData();
    loadTaskData();
    loadExpenseData();
    loadDutyData();
}

// ===== INITIALIZATION =====
window.addEventListener('load', () => {
    // Check if user is logged in
    const saved = localStorage.getItem('currentUser');
    if (saved) {
        currentUser = JSON.parse(saved);
        showDashboard();
    }
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        closeModal('loginModal');
    }
});
