const I18nData = {
    ar: {
        sec_main: 'الرئيسية', sec_admin: 'الإدارة', sec_concerns: 'الانشغالات', sec_ai: 'الذكاء الاصطناعي',
        nav_home: 'مركز القيادة', nav_settings: 'إعدادات الجامعة', nav_requests: 'طلبات الأساتذة', nav_stud_concerns: 'انشغالات الطلبة', nav_teach_concerns: 'انشغالات الأساتذة', nav_ai_train: 'تدريب النظام',
        btn_logout: 'تسجيل الخروج', header_title: 'العمليات المباشرة',
        pub_title: 'نشر إعلان جديد', pub_dest: 'لجميع المستخدمين', pub_t_ph: 'عنوان الإعلان...', pub_b_ph: 'تفاصيل الإعلان...', pub_btn: 'نشر الآن', pub_img: 'صور', pub_pdf: 'PDF', pub_escalate: 'تصعيد',
        pub_target_all: 'لجميع المستخدمين', pub_target_stud: 'للطلبة فقط', pub_target_teach: 'للأساتذة فقط', pub_interact: 'قابل للتفاعل', pub_comments: 'فتح التعليقات', sec_posts: 'المنشورات السابقة',
        feed_title: 'موجز الانشغالات والطلبات', empty_list: 'لا توجد بيانات حالياً',
        btn_solve: 'حل المشكلة', btn_vote: 'نشر للتصويت', btn_reject: 'رفض', btn_approve: 'قبول',
        btn_analyze: 'تحليل ذكي (Gemini)', txt_analyzing: 'جاري تحليل جيميناي...', risk: 'مستوى الخطر', solution: 'الحل المقترح', class: 'التصنيف',
        badge_urgent: 'عاجل', badge_normal: 'عادي',
        ai_title: 'أطلس المساعد', ai_status: 'متصل (Gemini API)', ai_ph: 'اسألني عن أي بيانات في النظام...', 
        ai_sugg_summary: 'ملخص الحالة', ai_sugg_draft: 'صياغة إعلان', ai_sugg_advice: 'نصيحة',
        err_mic: 'الميكروفون غير متاح أو تم رفض الإذن. تحقق من إعدادات المتصفح.', file_selected: 'تم تحديد الملف',
        ai_welcome: "مرحباً سيدي المدير. أنا أطلس (مدعوم من Gemini). أنا متصل بقاعدة البيانات الحية. يمكنك سؤالي عن الطلبات، الانشغالات، أو المساعدة في اتخاذ القرار.",
        
        // Settings Translation
        set_title: 'إعدادات وهوية الجامعة', set_specs: 'عدد التخصصات', set_inst: 'أسماء المعاهد',
        set_faculties: 'أسماء الكليات', set_system: 'نظام التعليم المعتمد',
        set_sys_lmd: 'نظام LMD', set_sys_usa: 'النظام الأمريكي / الأنجلوسكسوني', set_sys_classic: 'النظام الكلاسيكي (طب / هندسة)',
        set_sys_schools: 'المدارس العليا', set_sys_res: 'نظام الأطباء المقيمين', set_sys_other: 'أنظمة عالمية أخرى',
        set_levels: 'المستويات الدراسية الناتجة:', set_logo: 'شعار الجامعة / الهوية البصرية',
        set_concern_types: 'أنواع الانشغالات المتاحة', set_ai_toggle: 'حالة الذكاء الاصطناعي (Gemini)',
        btn_save: 'حفظ الإعدادات', btn_ai_on: 'مفعل', btn_ai_off: 'معطل', btn_add: 'إضافة',

        // Hierarchy & Escalation
        level_department: 'قسم', level_institute: 'معهد / كلية', level_university: 'جامعة',
        filter_level_title: 'عرض حسب المستوى الإداري:',
        filter_all_levels: 'جميع المستويات',
        btn_escalate_issue: 'تصعيد ↑', escalate_confirm_title: 'تصعيد الانشغال؟',
        escalate_confirm_text: 'سيتم تحويل هذا الانشغال للجهة الإدارية الأعلى.',
        escalate_note_label: 'ملاحظة إدارية (اختياري):',
        escalate_note_placeholder: 'أضف ملاحظة توضيحية للجهة الأعلى...',
        escalate_btn_confirm: 'نعم، تصعيد', escalate_btn_cancel: 'إلغاء',
        escalate_success: 'تم التصعيد بنجاح', escalate_already_max: 'هذا الانشغال في أعلى مستوى بالفعل',
        admin_notes_title: 'ملاحظات إدارية:', no_admin_notes: 'لا توجد ملاحظات',
        level_badge_department: 'مستوى: قسم', level_badge_institute: 'مستوى: معهد', level_badge_university: 'مستوى: جامعة',
        suggested_level_label: 'المستوى المقترح:'
    },
    en: {
        sec_main: 'Main Ops', sec_admin: 'Admin', sec_concerns: 'Concerns', sec_ai: 'AI System',
        nav_home: 'Command Center', nav_settings: 'University Settings', nav_requests: 'Teacher Requests', nav_stud_concerns: 'Student Concerns', nav_teach_concerns: 'Teacher Concerns', nav_ai_train: 'AI Training',
        btn_logout: 'Logout', header_title: 'Live Operations',
        pub_title: 'Publish Post', pub_dest: 'All Users', pub_t_ph: 'Title...', pub_b_ph: 'Details...', pub_btn: 'Publish', pub_img: 'Images', pub_pdf: 'PDF', pub_escalate: 'Escalate',
        pub_target_all: 'All Users', pub_target_stud: 'Students Only', pub_target_teach: 'Teachers Only', pub_interact: 'Allow Interactions', pub_comments: 'Open Comments', sec_posts: 'Previous Posts',
        feed_title: 'Concerns Feed', empty_list: 'No data available',
        btn_solve: 'Solve', btn_vote: 'Vote', btn_reject: 'Reject', btn_approve: 'Approve',
        btn_analyze: 'Smart Analysis', txt_analyzing: 'Gemini is analyzing...', risk: 'Risk Level', solution: 'Proposed Solution', class: 'Classification',
        badge_urgent: 'Urgent', badge_normal: 'Normal',
        ai_title: 'Atlas AI', ai_status: 'Online (Gemini API)', ai_ph: 'Ask me about system data...', 
        ai_sugg_summary: 'Status Summary', ai_sugg_draft: 'Draft Post', ai_sugg_advice: 'Advice',
        err_mic: 'Mic unavailable or permission denied.', file_selected: 'Selected',
        ai_welcome: "Hello Director. Atlas v11.4 (Powered by Gemini) is ready. I am connected to the live database. You can ask me about requests, concerns, or for decision support.",
        
        // Settings Translation
        set_title: 'University Settings & Identity', set_specs: 'Number of Specialties', set_inst: 'Institute Names',
        set_faculties: 'Faculty Names', set_system: 'Education System',
        set_sys_lmd: 'LMD System', set_sys_usa: 'Anglo-Saxon / American System', set_sys_classic: 'Classic System (Med/Eng)',
        set_sys_schools: 'Higher Schools', set_sys_res: 'Residents System', set_sys_other: 'Other Global Systems',
        set_levels: 'Generated Study Levels:', set_logo: 'University Logo / Visual Identity',
        set_concern_types: 'Available Concern Types', set_ai_toggle: 'Artificial Intelligence Status (Gemini)',
        btn_save: 'Save Settings', btn_ai_on: 'Enabled', btn_ai_off: 'Disabled', btn_add: 'Add',

        // Hierarchy & Escalation
        level_department: 'Department', level_institute: 'Institute / Faculty', level_university: 'University',
        filter_level_title: 'Filter by admin level:',
        filter_all_levels: 'All Levels',
        btn_escalate_issue: 'Escalate ↑', escalate_confirm_title: 'Escalate this issue?',
        escalate_confirm_text: 'This concern will be forwarded to the higher authority.',
        escalate_note_label: 'Admin note (optional):',
        escalate_note_placeholder: 'Add a note for the higher authority...',
        escalate_btn_confirm: 'Yes, Escalate', escalate_btn_cancel: 'Cancel',
        escalate_success: 'Successfully escalated', escalate_already_max: 'This issue is already at the highest level',
        admin_notes_title: 'Admin Notes:', no_admin_notes: 'No notes',
        level_badge_department: 'Level: Department', level_badge_institute: 'Level: Institute', level_badge_university: 'Level: University',
        suggested_level_label: 'Suggested Level:'
    },
    fr: {
        sec_main: 'Principal', sec_admin: 'Admin', sec_concerns: 'Préoccupations', sec_ai: 'IA',
        nav_home: 'Centre de Commande', nav_settings: 'Paramètres Université', nav_requests: 'Demandes Profs', nav_stud_concerns: 'Étudiants', nav_teach_concerns: 'Profs', nav_ai_train: 'Entraînement',
        btn_logout: 'Déconnexion', header_title: 'Opérations en Direct',
        pub_title: 'Nouvelle Annonce', pub_dest: 'Pour Tous', pub_t_ph: 'Titre...', pub_b_ph: 'Détails...', pub_btn: 'Publier', pub_img: 'Images', pub_pdf: 'PDF', pub_escalate: 'Escalader',
        pub_target_all: 'Pour Tous', pub_target_stud: 'Étudiants Uniq.', pub_target_teach: 'Professeurs Uniq.', pub_interact: 'Interactions', pub_comments: 'Commentaires', sec_posts: 'Publications Précédentes',
        feed_title: 'Flux des Préoccupations', empty_list: 'Aucune donnée disponible',
        btn_solve: 'Résoudre', btn_vote: 'Vote', btn_reject: 'Rejeter', btn_approve: 'Accepter',
        btn_analyze: 'Analyse IA', txt_analyzing: 'Gemini analyse...', risk: 'Niveau de risque', solution: 'Solution proposée', class: 'Classification',
        badge_urgent: 'Urgent', badge_normal: 'Normal',
        ai_title: 'Assistant Atlas', ai_status: 'En Ligne (Gemini)', ai_ph: 'Posez des questions...', 
        ai_sugg_summary: 'Résumé', ai_sugg_draft: 'Rédiger', ai_sugg_advice: 'Conseil',
        err_mic: 'Micro indisponible ou permission refusée.', file_selected: 'Sélectionné',
        ai_welcome: "Bonjour Directeur. Atlas (Propulsé par Gemini) est prêt. Je suis connecté à la base de données. Posez-moi des questions sur les demandes ou les soucis.",
        
        // Settings Translation
        set_title: 'Paramètres et Identité de l\'Université', set_specs: 'Nombre de Spécialités', set_inst: 'Noms des Instituts',
        set_faculties: 'Noms des Facultés', set_system: 'Système d\'Enseignement',
        set_sys_lmd: 'Système LMD', set_sys_usa: 'Système Anglo-Saxon / Américain', set_sys_classic: 'Système Classique (Med/Ing)',
        set_sys_schools: 'Écoles Supérieures', set_sys_res: 'Système de Résidanat', set_sys_other: 'Autres Systèmes Mondiaux',
        set_levels: 'Niveaux d\'Étude Générés :', set_logo: 'Logo de l\'Université / Identité Visuelle',
        set_concern_types: 'Types de Préoccupations', set_ai_toggle: 'Statut de l\'Intelligence Artificielle',
        btn_save: 'Enregistrer', btn_ai_on: 'Activé', btn_ai_off: 'Désactivé', btn_add: 'Ajouter',

        // Hierarchy & Escalation
        level_department: 'Département', level_institute: 'Institut / Faculté', level_university: 'Université',
        filter_level_title: 'Filtrer par niveau administratif :',
        filter_all_levels: 'Tous les niveaux',
        btn_escalate_issue: 'Escalader ↑', escalate_confirm_title: 'Escalader ce problème ?',
        escalate_confirm_text: 'Ce souci sera transmis à l\'autorité supérieure.',
        escalate_note_label: 'Note administrative (optionnel) :',
        escalate_note_placeholder: 'Ajouter une note pour l\'autorité supérieure...',
        escalate_btn_confirm: 'Oui, Escalader', escalate_btn_cancel: 'Annuler',
        escalate_success: 'Escaladé avec succès', escalate_already_max: 'Ce problème est déjà au plus haut niveau',
        admin_notes_title: 'Notes administratives :', no_admin_notes: 'Aucune note',
        level_badge_department: 'Niveau : Département', level_badge_institute: 'Niveau : Institut', level_badge_university: 'Niveau : Université',
        suggested_level_label: 'Niveau suggéré :'
    }
};

function getTranslation(dictionary, lang, key) {
    if (!dictionary || !dictionary[lang]) return key;
    return dictionary[lang][key] || key;
}

const I18nModule = { I18nData, getTranslation };

if (typeof module !== 'undefined' && module.exports) {
    module.exports = I18nModule;
} else if (typeof window !== 'undefined') {
    window.I18nModule = I18nModule;
}
