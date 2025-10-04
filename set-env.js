const fs = require('fs');

if (!process.env.EMAIL_SERVICE_ID || !process.env.EMAIL_TEMPLATE_ID || !process.env.EMAIL_PUBLIC_KEY) {
  console.error("❌ Faltan variables de entorno. Asegúrate de configurarlas en Render.");
  process.exit(1);
}

const envConfigFile = `export const environment = {
  production: true,
  emailServiceId: "${process.env.EMAIL_SERVICE_ID}",
  emailTemplateId: "${process.env.EMAIL_TEMPLATE_ID}",
  emailPublicKey: "${process.env.EMAIL_PUBLIC_KEY}"
};
`;

fs.writeFileSync('./src/environments/environment.prod.ts', envConfigFile);
console.log('✅ environment.prod.ts generado con variables de Render');


