# Configuración de EmailJS en mi proyecto

Este archivo explica cada función y módulo relacionado con el envío de correos usando EmailJS, como si yo mismo lo estuviera explicando.

---

## 1. Inicialización de EmailJS

```js
(window as any).emailjs.init('TU_PUBLIC_KEY');
```
**Explicación:** Aquí inicializo EmailJS con mi clave pública. Esto permite que el frontend pueda enviar correos sin exponer credenciales privadas.

---

## 2. Formulario de contacto

El formulario HTML tiene los campos: nombre, email, teléfono y mensaje. Cuando el usuario lo envía, se ejecuta la función de envío.

---

## 3. Envío del formulario

```js
emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', form)
  .then(() => {
    // Mensaje de éxito
  })
  .catch(() => {
    // Mensaje de error
  });
```
**Explicación:** Uso `sendForm` para enviar los datos del formulario a EmailJS. Si todo sale bien, muestro un mensaje de éxito; si falla, muestro un error.

---

## 4. Estructura de los IDs
- **Public Key:** Identifica mi cuenta EmailJS.
- **Service ID:** Es el servicio de correo que configuré en EmailJS (por ejemplo, Gmail, Outlook, etc).
- **Template ID:** Es la plantilla de correo que personalicé en EmailJS para el mensaje.

---

## 5. Mensajes de estado

En el frontend, muestro mensajes de éxito o error según la respuesta de EmailJS, para que el usuario sepa si su mensaje fue enviado correctamente.

---

## 6. Seguridad

Solo uso la clave pública en el frontend. Las claves privadas nunca deben estar en el código del cliente.

---

## 7. Personalización

Puedo modificar la plantilla en EmailJS para cambiar el diseño y el contenido del correo que recibo.

---

Si tienes dudas sobre cómo funciona alguna parte, ¡pregúntame!
