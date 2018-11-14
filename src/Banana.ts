import * as path from "path";
import { createTransport, Transporter } from "nodemailer";
import * as handlebars from "express-handlebars";
import * as nodemailerHandlebars from "nodemailer-express-handlebars";

import { Config, Mail } from "./types";

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
    try {
      await Promise.all(
        mailList.map(
          message =>
            new Promise(async (resolve, reject) => {
              try {
                const mail = {
                  from: this.email,
                  to: message.to,
                  subject: message.subject,
                  template: message.template,
                  context: message.context
                };
                await this.smtpTransport.sendMail(mail);
                resolve();
              } catch (e) {
                reject(e);
              }
            })
        )
      );
    } catch (err) {
      throw err;
    }
  }
}
