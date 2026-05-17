const AdminUtils = {
    parseUserRole: function(role, email) {
        if (role === 'teacher' || role === 'student') return role;
        return (email && email.includes('teacher')) ? 'teacher' : 'student';
    },
    parseIssueStatus: function(priority, statusText) {
        return (priority === 'urgent' || statusText === 'عاجل') ? 'urgent' : 'pending';
    },
    formatIssueTime: function(createdAtStr) {
        if (!createdAtStr) return '';
        return new Date(createdAtStr).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    },
    formatIssueDate: function(createdAtStr) {
        if (!createdAtStr) return '';
        return new Date(createdAtStr).toLocaleDateString();
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdminUtils;
} else if (typeof window !== 'undefined') {
    window.AdminUtils = AdminUtils;
}
