const fs = require('fs');

const envConfigFile = `export const environment = {
  production: true,
  emailServiceId: "${process.env.EMAIL_SERVICE_ID}",
  emailTemplateId: "${process.env.EMAIL_TEMPLATE_ID}",
  emailPublicKey: "${process.env.EMAIL_PUBLIC_KEY}"
};
`;

fs.writeFileSync('./src/environments/environment.prod.ts', envConfigFile);
console.log('✅ environment.prod.ts generado con variables de Netlify');
