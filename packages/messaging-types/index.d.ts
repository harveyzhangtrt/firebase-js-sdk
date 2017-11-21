import { FirebaseApp, FirebaseNamespace } from "@firebase/app-types";
import { Observer, Unsubscribe } from "@firebase/util";

export interface FirebaseMessaging {
  deleteToken(token: string): Promise<any> | null;
  getToken(): Promise<any> | null;
  onMessage(
    nextOrObserver: Observer<any, any> | ((a: Object) => any),
    onError?: (error: any) => any,
    onComplete?: () => any
  ): Unsubscribe;
  onTokenRefresh(
    nextOrObserver: Observer<any, any> | ((a: Object) => any),
    onError?: (error: any) => any,
    onComplete?: () => any
  ): Unsubscribe;
  requestPermission(): Promise<any> | null;
  setBackgroundMessageHandler(callback: (a: Object) => any): any;
  useServiceWorker(registration: any): any;
}

declare module '@firebase/app-types' {
  interface FirebaseNamespace {
    messaging?: {
      (app?: FirebaseApp): FirebaseMessaging;
      Messaging: {
        new(): FirebaseMessaging
      }
    }
  }
  interface FirebaseApp {
    messaging?(): FirebaseMessaging;
  }
}