export default function authErrorToMessage(code) {
  switch (code) {
    case "auth/invalid-email": return "Email non valida";
    case "auth/user-disabled": return "Account disabilitato";
    case "auth/user-not-found": return "Utente non trovato";
    case "auth/wrong-password": return "Password errata";
    case "auth/too-many-requests": return "Troppi tentativi, riprova più tardi";
    default: return "Errore sconosciuto";
  }
}
