import { createTransport, Transporter } from "nodemailer";
import * as handlebars from "express-handlebars";
import * as nodemailerHandlebars from "nodemailer-express-handlebars";

import { Config, Mail } from "./types";
import { send } from "email-templates";

export class Banana {
  private smtpTransport: Transporter;
  private email: string;

  constructor(config: Config) {
    const { service, auth, templatePath } = config;
    this.smtpTransport = createTransport({
      service,
      auth
    });
    const viewEngine = handlebars.create({});
    const viewPath = templatePath;
    this.smtpTransport.use(
      "compile",
      nodemailerHandlebars({ viewEngine, viewPath })
    );
    this.email = auth.user;
  }

  public async send(mailList: Array<Mail>) {
    return Promise.all(
      mailList.map(message => {
        const mail = {
          from: this.email,
          to: message.to,
          subject: message.subject,
          template: message.template,
          context: message.context
        };
        return this.smtpTransport.sendMail(mail);
      })
    );
  }
}
