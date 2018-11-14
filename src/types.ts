enum MailService {
  Gmail = "gmail"
}

export interface Authorization {
  user: string;
  pass: string;
}

export interface Message {
  to: string;
  from: string;
  subject: string;
  html: string;
  text: string;
}

export interface Mail {
  to: string;
  template: string;
  subject: string;
  context: Object;
}

export interface Config {
  service: MailService.Gmail | string;
  auth: Authorization;
  templatePath: string;
}
