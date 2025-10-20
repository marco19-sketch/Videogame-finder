export default function authErrorToMessage(code) {
  switch (code) {
    case 'auth/invalid-credential':
      return 'Invalid credentials'
    case "auth/invalid-email":
      return "Email non valida";
    case "auth/user-disabled":
      return "Account disabilitato";
    case "auth/user-not-found":
      return "Utente non trovato";
    case "auth/wrong-password":
      return "Password errata";
    case "auth/too-many-requests":
      return "Troppi tentativi, riprova più tardi";
    case "auth/email-already-in-use":
      return "Email already in use.";
    case "auth/weak-password":
      return "Weak password";
    case "auth/popup-closed-by-user":
      return "Pop up closed by user";
    case "auth/network-request-failed":
      return "Network request failed";
    case "auth/email-not-verified":
      return "Email non verificata. Controlla la tua inbox.";
    default:
      return "Si è verificato un errore sconosciuto. Riprova.";
  }
}
