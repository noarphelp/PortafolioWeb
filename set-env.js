const fs = require('fs');

console.log("🔍 Variables de entorno leídas por Netlify:");
console.log("EMAIL_SERVICE_ID:", process.env.EMAIL_SERVICE_ID);
console.log("EMAIL_TEMPLATE_ID:", process.env.EMAIL_TEMPLATE_ID);
console.log("EMAIL_PUBLIC_KEY:", process.env.EMAIL_PUBLIC_KEY);

const envConfigFile = `export const environment = {
  production: true,
  emailServiceId: "${process.env.EMAIL_SERVICE_ID}",
  emailTemplateId: "${process.env.EMAIL_TEMPLATE_ID}",
  emailPublicKey: "${process.env.EMAIL_PUBLIC_KEY}"
};
`;

fs.writeFileSync('./src/environments/environment.prod.ts', envConfigFile);
console.log('✅ environment.prod.ts generado con variables de Netlify');

