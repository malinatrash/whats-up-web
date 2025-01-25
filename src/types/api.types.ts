export interface Credentials {
  idInstance: string;
  apiTokenInstance: string;
}

export interface SendMessageRequest {
  chatId: string;
  message: string;
}

export interface SendMessageResponse {
  idMessage: string;
}

export interface TextMessageData {
  textMessage: string;
}

export interface MessageData {
  typeMessage: string;
  textMessageData: TextMessageData;
}

export interface NotificationBody {
  typeWebhook: string;
  messageData: MessageData;
}

export interface WhatsAppNotification {
  receiptId: number;
  body: NotificationBody;
}

export interface APIError {
  code: number;
  message: string;
}
