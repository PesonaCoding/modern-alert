(function () {
    if (!document.getElementById('alertContainer')) {
        const container = document.createElement('div');
        container.id = 'alertContainer';
        container.className = 'modern-alert-container';
        document.body.appendChild(container);
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    feather.replace();
});

const ModernAlert = {
    icons: {
        success: 'check-circle',
        error: 'alert-circle',
        warning: 'alert-triangle',
        info: 'info'
    },

    counter: 0,

    show(type, title, message, duration = 5000) {
        const container = document.getElementById('alertContainer');
        const alertId = `alert-${this.counter++}`;

        const alert = document.createElement('div');
        alert.className = `modern-alert modern-alert-${type}`;
        alert.id = alertId;

        alert.innerHTML = `
            <div class="modern-alert-icon">
                <i data-feather="${this.icons[type] || 'info'}"></i>
            </div>
            <div class="modern-alert-content">
                <div class="modern-alert-title">${title}</div>
                <div class="modern-alert-message">${message}</div>
            </div>
            <button class="modern-alert-close" onclick="ModernAlert.close('${alertId}')">
                <i data-feather="x"></i>
            </button>
            <div class="modern-alert-progress"></div>
        `;

        container.appendChild(alert);
        feather.replace();

        setTimeout(() => {
            alert.classList.add('show');

            const progress = alert.querySelector('.modern-alert-progress');
            progress.style.transition = `transform ${duration / 1000}s linear`;
            progress.style.transform = 'scaleX(1)';

            setTimeout(() => {
                this.close(alertId);
            }, duration);
        }, 10);
    },

    close(alertId) {
        const alert = document.getElementById(alertId);
        if (alert) {
            alert.classList.remove('show');
            setTimeout(() => alert.remove(), 500);
        }
    }
};
