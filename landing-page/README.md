1 - Por que usar Cloudinary?

.Iremos utilizar o heroku pra hospedar nosso site gratuitamente, no entanto, ele tem como premissa desligar o dyno(server) e quanto é reiniciado ele zera os dados salvos, apagando a pasta uploads do strapi.

.Para não perder essas imagens utilizaremos uns CDN (Content Delivery Network), presente no AWS, heroku (de forma paga), mas de forma gratuita. 

2 - Como fazer o strapi salvar as imagens em outro servidor?

.Strapi-provider-iploado-cloudinary
https://strapi.io/blog/add-cloudinary-support-to-your-strapi-application
.install provider: yarn add @strapi/provider-upload-cloudinary

3 - Adicione esta configuração 

Provider Configuration a ./config/plugins.js

module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});

4 - Crie uma conta no Cloudinary e pegue os dados do server
pnnogde@gmail.com(sign up google)

5 - Substitua strapi::security em ./config/middlewares.js pelo objeto:

module.exports = [
  // ...
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // ...
]

6 - Agora as imagens que subimos no strapi irão para nosso server cloudinary
