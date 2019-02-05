# Banana 🍌

[![banana-version][banana-version]](https://npmjs.com/@hackfiu/banana)
[![][hackfiu-badge]][hackfiu]


Banana is a simple mailing library meant to reduce overhead when developing backend services that involve sending some type of email to one (or many) user.

## Install

```js
$ npm install @hackfiu/banana
```

## Usage

First, you'll want an instance of a Banana, so just hit it with a little bit of this:

```js
import { Banana } from '@hackfiu/banana';

const banana = new Banana({
  service: 'gmail',
  templatePath: 'src/templates',
  auth: {
    user: 'foo@bar.edu',
    pass: 'password',
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

```js
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

```js
banana.send([davidMail, carlosMail]);
```

And they'll get this nice little message:

```html
<h1>Hi David, the boy, I'm a banana!</h1>
<h1>Hi Carlos, the other boy, I'm a banana!</h1>
```


### Brought to you by:

[![][hackfiu-logo] ][hackfiu]


[banana-version]: https://img.shields.io/npm/v/@hackfiu/banana.svg?style=flat

[hackfiu-logo]: https://avatars1.githubusercontent.com/u/43051317?s=30

[hackfiu]: https://github.com/hackfiu

[hackfiu-badge]: https://img.shields.io/badge/Brought%20to%20you%20by-HackFIU-f0c85b.svg?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAQB0lEQVR4AezBMQEAAAgEIfuXPmv8ABwAAAAAwJ7q2Tv3ICmOww7P3u3dgY7HWUiAMVAiGEfgquCjRDkVXEJCDjhYj1hYUDK2wVgmJpaUyLoy4lHhIUUkNiBwCBBCwAQnIKks7DJ25AcpbIOEQVh2HGxZiAACrOPI3SG49%2B7O5ttU%2F5EiRrs9O72Pnd%2Bv6qs%2Bnbh59PS3M93TM9uQSCQ%2BnEqlvgDr%2Be%2FtlHsod1FuolwJc%2Fv6%2Bj5AWeflHFXsTTDdgrEQy3OdQziYd1qsc4KjfR8A0y35I7ihBI5bPfxeMpl8jPIwJCCnIMwV3%2Fe%2FyY%2BfvHr16lDK%2Frkc09OnT%2Ffj3021qKtGqA2wb7Uw2fbY0Kam8wFwGz%2FHw6zoj4JNVkNNnuuczgH6b4t1bocqB43sMbDNZbijSFLE4D0wh0b%2BnKnDvMIyLlLsgrugOsv6R0Ez5Jr9MMxyH6vhE2zXWwH25RIfGAslSDj7PRCOQZA8Uww5OPgPUm%2Ff5%2Bd2CDM%2BfA1uKAFBJsAvwQeb9MEaGOSFEgnykUCfwOaTiqKmgHKMgO9CN%2FgQejgjfb3YgmTqFI5ACmyzH%2Fp5eUaCmAPB%2BtdRJiBoPlsAMapgBrxqL0YZCWL6VGzD1iCbDgdbWloGeKFFgoyFw3k2qOMU%2FRzKEYfPUU%2Bn0yaVKojplC9iX6%2Bk7eKTo5QTvVAjQe5h%2FR15dm47KaY5OibVsIR1XE6TCAgyhX19I8BZ8jzMNIMLEiSsyxbWvS2df5LwVYg5kOMhMHJUtiCZIWaOx0tp%2B%2FTBIi%2F0SJAhZggxjLwMY70Qw1j%2BNLbvVJpUuiCZESfYAbbphCcd6CBBGCp9OB1e2uHjYd60pV5%2BmiaVLogZsVoKyQBnjr%2BHei%2FESBBz%2BcJ6z4Z8%2F2BLWJ11tu2fzahMWEmxzB5Kv9QEMf3A3wbolP8b5UjPSSTIn0CoMaNMI8IYOIAuCJpueJ2GvoPy4zAGasyy43CL%2Bf12eN0MUvjFEITfjYOXA5zlfsNUkkYHGkiQzDZTwTvT4ceHz%2BTbL4IXwA94lvg5%2B7bYNLys9WTkaYJfFFQQM%2F%2BNdf1rgDPlWbjLcxUJYqYwuMmrEMujY3439dEScCRnL0yEWID7LBPM3%2FuFEMTc%2BFwLfZBzTFt5wHMaCbLA4t5HMkBneUrA7eoHfxfwDvI34MYQzqybYJdrQRgg%2BVSA%2B0%2Fd8IRNm5Mg9usbDLsh1xyHu6EXcs2OINvY0dEx3Nwks70eP0IxIqQ2MIyz2D0ZWV0JQt9hcuZS0PIy0jf1%2Bi7PXSRIb2%2FveNZ3Lte2RzZQ1vM3h9K55yS8L2DnPGV5yXGBfXp%2F2FNbPOJCEBjINn%2BLMmn5IfAixXs859EZ5C8tGmErzDF%2FN8%2Bi0V7lEuLzAbbtH8A2Sz0HcSjIFkhYfgi8QjHUI%2BUmyHHM3g7b8uA75trSuSBm6sYvLDvcY83fDrW5625GZwZ7FrGdjGguxyaWgyDmnsWyAPc63rDv07kXpDhxL8g0SAVZF%2BUNsAtyzSlotHmOHJKWjWcPZUOZCHKOoj3AiNU8iHvuI0HMs9c2mXnNU3zzWUauN%2FAS%2FPtHLOp%2BMtikF5ZBrKiCuEsKmqCf5z4ShL%2FJdM4vWT4pGL9mGY38%2Fj8tlvGSZQfdJu0w1yMVKshGrzCRIOYFB02WfZ3Vv2M5N5jLGh9ySTLX6RCZlxOATS7CRypRENPX%2B4BXsEiQm%2Bk0f5vSz3UUiuKW6yxrIfRYHOw9OW7jZwI0ommVKAjxzeDNzV5BIkFup0Gdtxxxqb7OskbadDaNbGNymHr%2FYNouzTCjgi%2BxkrD3woULLt87JkHM0O5SywOzCGLv0Nl%2F3rKz%2BbiDum%2BDBytVEJNuWA61nrNIkHo4ajllfXKWZd5pMSTrk%2B9lmyJBX2VS2i49sLiMBGmDTrDNBZhTroIcgr%2BFNUExnd4uh4LcaTGPyod9MCSHdzadsJDuzWz9BTMFw%2Bo%2BCOyCQWUiyL%2FDVgiS16GxHAV5CvpDPDDmpW0OBdln0ZB7Ms9S5LjcVZaXWcsgnmWZJy3nJ2UknVBGU01GwrfBNr7pQ77bCy%2Bai5V5obPlvJ%2FOzPQXOsyPZ4N%2Ft8XyrvyPs43KmDej2CTFtjxaZnOxhpjHB1JgFSPXMC%2B0SJCVUCrpYhr5HVkelpoeYDbvG93d3beUkSAx%2BDCcBB9s0glfgYFeHpEg5t4HHIFSyte8d4iZEPnrAI%2F5%2FhAGhtQG6mA81Lh6HoSyFh4J2Gm%2FbGZK5xkJci9chFJKD9z4To3TvCfYt5WEbKOsz%2FeJQvg8bCnAI7cx2B3wUqsXbveCRYKYR1fXQhJKLYuzbPsM61fgENN%2F2tzT0zM24HF4L3%2F%2FtFlOoV7aMNAMgQeR5Az8YbDJmhJkDByFkgv7%2BrP29vaGLNPen8vjk%2FVHMA8G51j%2Fg2CB%2BbtUEV77MxGOB5zt%2BwMY51lHgtwNfVCKaYN7sp1FoDOog%2BQqvJKZbs9%2FD7%2FO5M2x%2FP8myhNFfi9WDB4I%2BCaXBOy0%2F55FCfIslGqSsDFbvWWGm0N6s6JPzlIeMt9IdZjyAmWyhN6sGIenIRnwTLI4x%2BkoEqSrq2s0B%2FjtdAnH3AcYl8O7eV9Ok6i8vJr17qX0A15aLszeFiWIucNt%2FbrQp2BpHqywHDHrhPtzqJup8F9REMS89ihzn%2BRgwA%2Bds1kuXSVIc3NzveXXGfiwM4R6q4Xdlp9%2BO3O4VKzKjPmzT29XvCAmZmTqDPhBBkAo3stiJMh1ljXb8qnBJLk%2FpK9knmf5IFULxU05yvdXmY53RASJwxfy%2BFDYd%2BXKlSES5JqYSZM7bTq25n5DQ0h1Nwl%2BBTZpynHZ%2FRH5Ebb3YrkLYvG13BuDbj7s%2BP8zCyTIRA7sf1iemjeEWHcD4FnL9Z%2BHGosHv%2B6HM2UtiEV9mpuIQdIDqyEuQYh5Jc8Cm0sc0ge3eiEmM7PW5hLP5F7L%2BmqEI9BZsYKYZCZhmrfIBOmPtFDMAdqKBKmH5ywr8CUHZ%2BDxAeZ%2F7YZay%2FU0wBfhGPRWqiBmkGKWuW%2Fjg21OwAclCCMX0Ao2edzRVzZ%2FF2zyK%2FiDgOv6fXjY5k3pWZIy78H9tMvZvJb72R9hlwe8iejDq5yJxoR1gMfBagumQVUIX%2BT%2FhMU674PYNcu4DVZZLGM5jHY00DHZsg6XWgly%2FZGfqfBCgEs8n7xJI1xnzoDVFl8j8SWL%2FZwL9Xl88DTB6gCsglleJorS2to6yDyQ9CX4Rxr%2B9ykPIsFPzFONB%2BBZWAPzjRRxT1GiGgSobWlpGUDZb8WKFVVe5URRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFPN0WgVQDbGA77eKOyIW0vGpcrWNXsBEZr8yL1HjCbSWCuDniURiSoCD1ORie3zfP0%2FdzvVCCMv7a5bX7GI72f9PFlGQVa7aQyiP3BpBPpGugNCAzlHcEeAgrQAX6YXPhtSQNkISXOQhr0gx36zlKnMliASRIBJEgkgQCSJBJEjYkSASRIJIEAkiQSSIBJEgEkSCSBAJIkEkiASRIBJEgkgQCSJBJIgEkSASRIJIEAkiQSSIBJEgEkSCSBAJIkEkiASRIClIFAIq%2BzTlVAkiQcpGECpgD8U8%2BHQBmAXDJIgEKRtBWHYTRZVX%2FEgQCSJBJIgEkSASRIJIEAkiQSRI8SNBJIgEkSASRIJIEAkiQSSIBJEgEkSCSBAJIkEkiASRIBJEgkgQCSJBJIgEcZKV8G4Y5pCBEkSClKsgF%2BE1xyyHuASRIO4EKeOkUqlNFDUSRIJIEAkiQSSIBJEgEkSCSBAJIkEkiASRIBJEgpRmJIgEkSASRIJIEAkiQSSIBJEgEkSCSBAJIkEkiASRIBJEgkgQCfJnRXwW55mSFkSCSBCO%2F6NFFGSTBAkjEmSDK0HIF4soyFYJEkYkyDMOBVlSREH%2BCZwk064lSHQEWetQkKe9IoVjtzftLrPLQZDDsAU2O2Q2VFe4IH8DCXCRzUU8g%2BwHV%2FmY3moSnbearIQ%2BV1%2BTV6R6r4YD4CrTJUh0BFkMPY4E%2BZ5XhLS0tAxg3T9JO0oikZgiQSIiCPX4MMvqAhc5UaR6HwHHwFUmSJDonEHm%2Br7fkXaTVqgrQr2%2FH06Aq9wsQaIjyEwEedvRJdZViglFqPc%2FZt3n0m7SDXEJEh1BboNWV42J4zTbK3BY50OsuxNc5JRHJEh0BBkFza4OE6wvcJ33h43gKj%2BQINESpAZOgYv4cACGF7DOR%2Fq%2BfzTtLl%2BVIBESxNx1ftHhbIS3KKYXsM7vhW5wlc9JkOgJ8lTaXVJkA2Vdger8x%2BAyjRIkYoJQlzPTDuP7%2FiWKSY7rOsZ%2BzHe8H29RDJUgEROEZd0IXeAyh7u6ukY6rOspcMbx5NUfUgySIBETxGzrEXAZH%2FbBCAf1PAF%2BBClwmbVQJ0GiKchK8MFlkvANGBXWZRWM5pMduZ2nG%2BZ6RIJEU5APQRe4jg9H4D4YFnBbq2AULPB9%2Fzyl87Ce31B8UIJEVBBz%2F%2BCn6QLFTG%2F5Diw2cjbkcLa4CaaZej0QaA5ZcKn3Q4MEia4g%2FWAt%2BFCo%2BNADbXABjtHon%2BeSaTOsg%2FWwNXNZxu9%2FBr%2Fl53boLfB29sESj0iQKApiYi57LoKJidIG4yVIxAXp6OgY5vv%2BwbRybf7FIxIk4oKYbV4ExETphPdJkP%2BNBDl58mQd1%2F3n0pkoPmz1iASRIP93uz9qRogiHT4ozvT19TVKkGsjQaphB%2FgQ1XTDk9BfgkiQ37Xtk%2BCXENW8AqO960SCSJAYLILLEKmYm5h3eUSCSJBsj69%2BBRIQlbRmfyhKgkgQk7a2tsE2L7iugDPHE1AjQSSIzX4MgM0VLkkfrLGbzi5BJIiJmSi4wff9K%2BnKSzOsgFqPSBAJEnR%2F6mEhvAaVkKSZwfyAZyJBJEgYo1uTaFjfouwr8xuBuyluhSoJIkHC3rc6%2BHM4Dz1lclPRh244AX%2Fq2UeCSBD7B61gORyCTijVXIYD8FiwJxkliAQJvp9xGAuzuWz5unk9jg%2FFjk%2FOsU3bzLMuoyHmlVjFDXaBqxEHB5chgx0wCGpKeJ%2BHw6donC9SdhbpfsYLMAveZepKUUpSmAaYwaf4ChruN%2Fn5OLzGz29Ci2nM3ZDMctbxIQndcBku8rdn4df8fJTlP0%2B5JJFITKMc6JVhFMkSy9yZ7%2B3tvZWGfDv%2F%2FTFYAH9BA18GT%2FLzl2n06yg3mFeWrocvw2pYCo%2FCfLiPZXyIctylS5ckhBINgSAONVCXeXiLshaqIaYa%2Bp%2F26dBWgRgAwHDl008hMRgMCYJAoN0FxxDMR68ksAIzoO4ORNnhBKJ8X%2FKP8DMZAAAAAAAAAAAAAPC87P7HfDiOOZ3VZq%2B8XYdpGLq06LtYhpKq2qwv8RR%2BgUFkEIPIIAaRQQwigxhEBjGIDGIQGQSDGASDyCAGkUEMIoMYRAYxiAxiEBnEIDKIQWQQ6mP%2BV%2B%2Bb1fu2j22mel3OwrcAAPABsQMMDq6vNx8AAAAASUVORK5CYII%3D