const puppeteer = require('puppeteer');

async function sendMessageToInstagram(username, message) {
    const browser = await puppeteer.launch({ headless: false }); // Para visualizar el navegador en acción, puedes cambiar a true para modo headless
    const page = await browser.newPage();

    // Ir a la página de Instagram e iniciar sesión manualmente
    await page.goto('https://www.instagram.com/victoriam.indu/');
    // Aquí debes implementar el código para iniciar sesión manualmente

    // Ir al perfil del usuario al que quieres enviar el mensaje
    await page.goto(`https://www.instagram.com/victoriam.indu/${username}/`);
    await page.waitForSelector('button[type="button"]'); // Esperar a que se cargue el botón de mensaje
    await page.click('button[type="button"]'); // Hacer clic en el botón de mensaje

    // Escribir y enviar el mensaje
    await page.waitForSelector('textarea');
    await page.type('textarea', message);
    await page.waitForSelector('button[type="submit"]');
    await page.click('button[type="submit"]');

    // Esperar un tiempo para asegurarse de que el mensaje se envió correctamente
    await page.waitForTimeout(3000);

    await browser.close();
}

// Llamar a la función para enviar un mensaje
sendMessageToInstagram('victoriam.indu', '¡Hola! ¿Cómo estás?');
