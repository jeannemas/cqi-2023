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
    LOGOUT_ITEM: "Logout",
    CHANGE_LANGUAGE_ITEM: "Change Language",
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
    LOGOUT_ITEM: "Me déconnecter",
    CHANGE_LANGUAGE_ITEM: "Changer de langue",
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
