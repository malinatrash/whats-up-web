export interface Credentials {
  idInstance: string;
  apiTokenInstance: string;
}

export interface Message {
  text: string;
  received: boolean;
  timestamp: string;
}

export interface WhatsAppResponse {
  receiptId: number;
  body: {
    typeWebhook: string;
    messageData: {
      typeMessage: string;
      textMessageData: {
        textMessage: string;
      };
    };
  };
}
