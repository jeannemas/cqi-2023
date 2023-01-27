const EN = {
  AUTH: {
    TITLE: "Login",
    EMAIL_FIELD: "Email",
    PASSWORD_FIELD: "Password",
    LOGIN_BUTTON: "Login",
  },

  NAVBAR: {
    USERS_ITEM: "Users",
    MY_ACCOUNT_ITEM: "My Account",
    LOST_AND_FOUND: "Lost and found",
    LIST_TASK: "Task list",
    LOGOUT_ITEM: "Logout",
    CHANGE_LANGUAGE_ITEM: "Change Language",
    REPORT_ITEM: "Report"
  },

  USERS: {
    TITLE: "Users",
    TABLE: {
      NAME_COLUMN: "Name",
      EMAIL_COLUMN: "Email",
      ROLE_COLUMN: "Role",
    },
    CREATE_USER_BUTTON: "Create User",
    ROLES: {
      ORGANISATOR: "Organisator",
      VOLUNTEER: "Volunteer",
    },
  },

  UTILS: {
    CANCEL: "Cancel",
    EDIT: "Edit",
    CREATE: "Create",
  },

  REPORT: {
    HISTORY: "History",
    NAME: "Name",
    DESCRIPTION: "Description",
    TYPEOFASSITANCE: "Type of assistance",
    SEND: "Envoyer",
    TYPES:{
      ORGANISATOR:"Organisator",
      VOLUNTEER: "Volunter",
      SECURITY: "Security",
      FIRSTAID: "First aid",
    }
  },
};

export type I18N = typeof EN;

const FR = {
  AUTH: {
    TITLE: "Se connecter",
    EMAIL_FIELD: "Courriel",
    PASSWORD_FIELD: "Mot de passe",
    LOGIN_BUTTON: "Se connecter",
  },

  NAVBAR: {
    USERS_ITEM: "Utilisateurs",
    MY_ACCOUNT_ITEM: "Mon compte",
    LOST_AND_FOUND: "Object perdu",
    LIST_TASK: "Liste de tâche",
    LOGOUT_ITEM: "Me déconnecter",
    CHANGE_LANGUAGE_ITEM: "Changer de langue",
    REPORT_ITEM: "Rapportage de problème"
  },

  USERS: {
    TITLE: "Utilisateurs",
    TABLE: {
      NAME_COLUMN: "Nom",
      EMAIL_COLUMN: "Courriel",
      ROLE_COLUMN: "Rôle",
    },
    CREATE_USER_BUTTON: "Créer un utilisateur",
    ROLES: {
      ORGANISATOR: "Organisateur",
      VOLUNTEER: "Bénévole",
    },
  },

  UTILS: {
    CANCEL: "Annuler",
    EDIT: "Modifier",
    CREATE: "Créer",
  },

  REPORT: {
    HISTORY: "Historique",
    NAME: "Nom",
    DESCRIPTION: "Description",
    TYPEOFASSITANCE: "Type d'assistance",
    SEND: "Envoyer",
    TYPES:{
      ORGANISATOR:"Organisateur",
      VOLUNTEER: "Bénévole",
      SECURITY: "Sécurité",
      FIRSTAID: "Premier soins"
    }
  },
} satisfies I18N;

const map = new Map<string, I18N>([
  ["en", EN],
  ["fr", FR],
]);

export const i18n = (providedLang?: string) => {
  const key = (providedLang ?? "").toLowerCase();

  return map.get(key) ?? EN;
};
export const getCurrentLanguage = (providedLang?: string) => {
  const key = (providedLang ?? "").toLowerCase();

  return map.has(key) ? key : "en";
};
export const getSupportedLanguages = () => [...map.keys()];
