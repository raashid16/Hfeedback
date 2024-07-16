import { Message } from "@/model/user";

export interface ApiRresponse {
  success: boolean;
  message: string;
  isAcceptingMessages?: boolean;
  messages?: Array<Message>;
}
