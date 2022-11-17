export interface LoginType {
  username: string;
  password: string;
  phone: string;
  prefix?: string;
  givenName: string;
  familyName: string;
}

export enum UIMessageType {
  SMS = 'sms',
  ERROR = 'error'
}

export interface UIMessage {
  type: UIMessageType;
  title: string;
  text: string;
}
