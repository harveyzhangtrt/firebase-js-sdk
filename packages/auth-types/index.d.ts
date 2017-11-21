import { FirebaseApp, FirebaseNamespace } from "@firebase/app-types";
import { Observer, Unsubscribe } from "@firebase/util";

interface UserInfo {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
}

interface User extends UserInfo {
  delete(): Promise<any>;
  emailVerified: boolean;
  getIdToken(forceRefresh?: boolean): Promise<any>;
  getToken(forceRefresh?: boolean): Promise<any>;
  isAnonymous: boolean;
  linkAndRetrieveDataWithCredential(
    credential: AuthCredential
  ): Promise<any>;
  linkWithCredential(credential: AuthCredential): Promise<any>;
  linkWithPhoneNumber(
    phoneNumber: string,
    applicationVerifier: ApplicationVerifier
  ): Promise<any>;
  linkWithPopup(provider: AuthProvider): Promise<any>;
  linkWithRedirect(provider: AuthProvider): Promise<any>;
  metadata: UserMetadata;
  phoneNumber: string | null;
  providerData: (UserInfo | null)[];
  reauthenticateAndRetrieveDataWithCredential(
    credential: AuthCredential
  ): Promise<any>;
  reauthenticateWithCredential(
    credential: AuthCredential
  ): Promise<any>;
  reauthenticateWithPhoneNumber(
    phoneNumber: string,
    applicationVerifier: ApplicationVerifier
  ): Promise<any>;
  reauthenticateWithPopup(provider: AuthProvider): Promise<any>;
  reauthenticateWithRedirect(
    provider: AuthProvider
  ): Promise<any>;
  refreshToken: string;
  reload(): Promise<any>;
  sendEmailVerification(
    actionCodeSettings?: ActionCodeSettings | null
  ): Promise<any>;
  toJSON(): Object;
  unlink(providerId: string): Promise<any>;
  updateEmail(newEmail: string): Promise<any>;
  updatePassword(newPassword: string): Promise<any>;
  updatePhoneNumber(
    phoneCredential: AuthCredential
  ): Promise<any>;
  updateProfile(profile: {
    displayName: string | null;
    photoURL: string | null;
  }): Promise<any>;
}

interface ActionCodeInfo { }

type ActionCodeSettings = {
  android?: {
    installApp?: boolean;
    minimumVersion?: string;
    packageName: string;
  };
  handleCodeInApp?: boolean;
  iOS?: { bundleId: string };
  url: string;
};

type AdditionalUserInfo = {
  isNewUser: boolean;
  profile: Object | null;
  providerId: string;
  username?: string | null;
};

interface ApplicationVerifier {
  type: string;
  verify(): Promise<any>;
}

interface FirebaseAuth {
  app: FirebaseApp;
  applyActionCode(code: string): Promise<any>;
  checkActionCode(code: string): Promise<any>;
  confirmPasswordReset(code: string, newPassword: string): Promise<any>;
  createUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<any>;
  currentUser: User | null;
  fetchProvidersForEmail(email: string): Promise<any>;
  getRedirectResult(): Promise<any>;
  languageCode: string | null;
  onAuthStateChanged(
    nextOrObserver:
      | Observer<any, any>
      | ((a: User | null) => any),
    error?: (a: Error) => any,
    completed?: Unsubscribe
  ): Unsubscribe;
  onIdTokenChanged(
    nextOrObserver:
      | Observer<any, any>
      | ((a: User | null) => any),
    error?: (a: Error) => any,
    completed?: Unsubscribe
  ): Unsubscribe;
  sendPasswordResetEmail(
    email: string,
    actionCodeSettings?: ActionCodeSettings | null
  ): Promise<any>;
  setPersistence(persistence: Auth.Persistence): Promise<any>;
  signInAndRetrieveDataWithCredential(
    credential: AuthCredential
  ): Promise<any>;
  signInAnonymously(): Promise<any>;
  signInWithCredential(
    credential: AuthCredential
  ): Promise<any>;
  signInWithCustomToken(token: string): Promise<any>;
  signInWithEmailAndPassword(email: string, password: string): Promise<any>;
  signInWithPhoneNumber(
    phoneNumber: string,
    applicationVerifier: ApplicationVerifier
  ): Promise<any>;
  signInWithPopup(provider: AuthProvider): Promise<any>;
  signInWithRedirect(provider: AuthProvider): Promise<any>;
  signOut(): Promise<any>;
  useDeviceLanguage(): any;
  verifyPasswordResetCode(code: string): Promise<any>;
}

interface AuthCredential {
  providerId: string;
}

interface AuthProvider {
  providerId: string;
}

interface ConfirmationResult {
  confirm(verificationCode: string): Promise<any>;
  verificationId: string;
}

declare class EmailAuthProvider extends EmailAuthProvider_Instance {
  static PROVIDER_ID: string;
  static credential(
    email: string,
    password: string
  ): AuthCredential;
}

declare class EmailAuthProvider_Instance implements AuthProvider {
  providerId: string;
}

interface Error {
  code: string;
  message: string;
}

declare class FacebookAuthProvider extends FacebookAuthProvider_Instance {
  static PROVIDER_ID: string;
  static credential(token: string): AuthCredential;
}
declare class FacebookAuthProvider_Instance implements AuthProvider {
  addScope(scope: string): AuthProvider;
  providerId: string;
  setCustomParameters(
    customOAuthParameters: Object
  ): AuthProvider;
}

declare class GithubAuthProvider extends GithubAuthProvider_Instance {
  static PROVIDER_ID: string;
  static credential(token: string): AuthCredential;
}
declare class GithubAuthProvider_Instance implements AuthProvider {
  addScope(scope: string): AuthProvider;
  providerId: string;
  setCustomParameters(
    customOAuthParameters: Object
  ): AuthProvider;
}

declare class GoogleAuthProvider extends GoogleAuthProvider_Instance {
  static PROVIDER_ID: string;
  static credential(
    idToken?: string | null,
    accessToken?: string | null
  ): AuthCredential;
}
declare class GoogleAuthProvider_Instance implements AuthProvider {
  addScope(scope: string): AuthProvider;
  providerId: string;
  setCustomParameters(
    customOAuthParameters: Object
  ): AuthProvider;
}

declare class PhoneAuthProvider extends PhoneAuthProvider_Instance {
  static PROVIDER_ID: string;
  static credential(
    verificationId: string,
    verificationCode: string
  ): AuthCredential;
}
declare class PhoneAuthProvider_Instance implements AuthProvider {
  constructor(auth?: FirebaseAuth | null);
  providerId: string;
  verifyPhoneNumber(
    phoneNumber: string,
    applicationVerifier: ApplicationVerifier
  ): Promise<any>;
}

declare class RecaptchaVerifier extends RecaptchaVerifier_Instance { }
declare class RecaptchaVerifier_Instance
  implements ApplicationVerifier {
  constructor(
    container: any | string,
    parameters?: Object | null,
    app?: FirebaseApp | null
  );
  clear(): any;
  render(): Promise<any>;
  type: string;
  verify(): Promise<any>;
}

declare class TwitterAuthProvider extends TwitterAuthProvider_Instance {
  static PROVIDER_ID: string;
  static credential(
    token: string,
    secret: string
  ): AuthCredential;
}
declare class TwitterAuthProvider_Instance implements AuthProvider {
  providerId: string;
  setCustomParameters(
    customOAuthParameters: Object
  ): AuthProvider;
}

type UserCredential = {
  additionalUserInfo?: AdditionalUserInfo | null;
  credential: AuthCredential | null;
  operationType?: string | null;
  user: User | null;
};

interface UserMetadata {
  creationTime?: string;
  lastSignInTime?: string;
}

export interface FirebaseAuthNamespace {
  (app?: FirebaseApp): FirebaseAuth;
  Auth: {
    new(): FirebaseAuth;
    Persistence: {
      LOCAL: string;
      NONE: string;
      SESSION: string;
    }
  }
}

declare module '@firebase/app-types' {
  interface FirebaseNamespace {
    auth?: FirebaseAuthNamespace
  }
  interface FirebaseApp {
    auth?(): FirebaseAuth;
  }
}