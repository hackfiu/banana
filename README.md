# banana

Banana is a simple mailing library meant to reduce overhead when developing backend services that involve sending some type of email to one (or many) user.

## Usage

First, you'll want an instance of a Banana, so just hit it with a little bit of this:
```javascript
import { Banana } from 'banana';

const banana = new Banana({
  service: 'gmail',
  templatePath: 'src/templates',
  auth: {
    user: 'foo@bar.edu',
    pass: 'password'
  },
});
```

And there you have it, your very own Banana!

So, about `templatePath`, it's essentially a folder with a collection of `.handlebars` files, you can read more about handlebars [here](https://handlebarsjs.com/).

Here's an example of a `.handlebars` file, let's shove it into `src/templates/hi.handlebars`:

```html
<h1>Hi {{name}}, I'm a banana!</h1>
```

Now let's send an email using that template with our Banana.

First, let's make a list of our buddies and the emails we'll send them:
```javascript
const davidName = 'David, the boy';

const davidMail = {
  to: 'david@bar.edu',
  subject: `Hey ${davidName}!`,
  template: 'hi', // we can omit .handlebars
  context: {
    name: davidName, // These are the variables inside the double curly braces in our template!
  },
};

const carlosName = 'Carlos, the other boy';

const carlosMail = {
  to: 'carlos@bar.edu',
  subject: `Hey ${carlosName}!`,
  template: 'hi', // we can even use different templates in the same call!
  context: {
    name: carlosName,
  },
};
```

Now that we have our friends' message objects all nice and ready, let's shoot those emails out!
```javascript
banana.send([davidMail, carlosMail]);
```

And they'll get this nice little message:
```html
<h1>Hi David, the boy, I'm a banana!</h1>
<h1>Hi Carlos, the other boy, I'm a banana!</h1>
```
