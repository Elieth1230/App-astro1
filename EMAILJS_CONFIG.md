# 📧 Configuración de EmailJS para TAANAB Arquitectos

## 🔧 Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Confirma tu email

### 2. Configurar el servicio de Gmail
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona "Gmail"
4. Autoriza con tu cuenta de Gmail (`contacto@taanab.mx`)
5. Guarda el **Service ID** (ejemplo: `service_abc123`)

### 3. Crear plantilla principal (para recibir contactos)
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. **Template Name**: "Contacto TAANAB"
4. **Template ID**: Guarda este ID (ejemplo: `template_xyz789`)

#### Configuración de la plantilla principal:
```
To Email: contacto@taanab.mx
From Email: {{user_email}}
From Name: {{user_name}}
Subject: Nuevo contacto desde taanab.mx - {{user_name}}

Body:
Nuevo mensaje de contacto desde el sitio web:

Nombre: {{user_name}}
Email: {{user_email}}
Teléfono: {{user_phone}}

Mensaje:
{{message}}

---
Enviado desde: taanab.mx
Fecha: {{current_date}}
```

### 4. Crear plantilla de confirmación (para el cliente)
1. Crea otra plantilla
2. **Template Name**: "Confirmación TAANAB"
3. **Template ID**: Guarda este ID (ejemplo: `template_confirm123`)

#### Configuración de la plantilla de confirmación:
```
To Email: {{user_email}}
From Email: contacto@taanab.mx
From Name: TAANAB Arquitectos
Subject: Gracias por contactarnos - TAANAB Arquitectos

Body:
Hola {{user_name}},

¡Gracias por contactar a TAANAB Arquitectos!

Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto. Nuestro equipo revisará tu consulta y te responderemos en las próximas 24-48 horas.

Si tienes alguna pregunta urgente, no dudes en llamarnos o escribirnos por WhatsApp.

Saludos cordiales,
Equipo TAANAB Arquitectos

---
📧 contacto@taanab.mx
📱 WhatsApp: +52 333 123 4567
🌐 taanab.mx
📍 Guadalajara, Jal | Playa del Carmen, QROO
```

### 5. Obtener tu Public Key
1. Ve a "Account" > "General"
2. Copia tu **Public Key** (ejemplo: `user_abc123def456`)

### 6. Actualizar el código
En el archivo `src/pages/contacto.astro`, reemplaza:

```javascript
// Línea 171: Reemplaza 'TU_PUBLIC_KEY' con tu clave real
(window as any).emailjs.init('user_abc123def456');

// Línea 205: Reemplaza con tu Service ID
(window as any).emailjs.send('service_abc123', 'template_xyz789', templateParams)

// Línea 216: Reemplaza con tu Template ID de confirmación
return (window as any).emailjs.send('service_abc123', 'template_confirm123', confirmationParams);
```

### 7. Configuración de emails múltiples (Opcional)
Si quieres que llegue a varios emails:
1. En la plantilla principal, en "To Email" pon: `contacto@taanab.mx,jorge@taanab.mx`
2. O crea múltiples servicios para diferentes cuentas

### 8. Probar el formulario
1. Ejecuta `npm run dev`
2. Ve a `/contacto`
3. Llena y envía el formulario
4. Verifica que lleguen los emails

## 🎯 Funcionalidad implementada:

✅ **Email principal**: Se envía a `contacto@taanab.mx` con todos los datos del formulario
✅ **Email de confirmación**: Se envía automáticamente al cliente
✅ **Estados visuales**: Loading, éxito y error
✅ **Validación**: Campos requeridos
✅ **Experiencia de usuario**: Mensajes claros y botón con estado

## 🔒 Seguridad:
- ✅ Public Key es segura para frontend
- ✅ No expones credenciales privadas
- ✅ EmailJS maneja la autenticación

## 💰 Límites gratuitos:
- 200 emails/mes gratis
- Después $20/mes por 1000 emails

## 🆘 Soporte:
Si tienes problemas, contacta: [EmailJS Support](https://www.emailjs.com/docs/)
