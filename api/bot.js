export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const update = req.body;

      // Foydalanuvchi /start bosganda ishlaydi
      if (update.message && update.message.text === '/start') {
        const chatId = update.message.chat.id;
        const BOT_TOKEN = process.env.BOT_TOKEN;

        const welcomeText = 
          "Assalomu alaykum! <b>Unition Learning Center</b>ning rasmiy bilim darajasini aniqlash (Level Check) botiga xush kelibsiz.\n\n" +
          "Bu yerda maxsus test orqali o'z bilim darajangizni tez va aniq bilib olishingiz mumkin.\n\n" +
          "⚠️ <i>Eslatma: Tizimga kirish uchun o'quv markazi tomonidan berilgan maxsus parol talab etiladi.</i>\n\n" +
          "Testni boshlash uchun quyidagi tugmani bosing 👇";

        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: welcomeText,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: '🚀 Boshlash',
                    web_app: { url: 'https://unition.vercel.app' }
                  }
                ]
              ]
            }
          })
        });
      }

      return res.status(200).json({ ok: true });
    } catch (error) {
      console.error('Bot xatosi:', error);
      return res.status(200).json({ ok: false });
    }
  }

  return res.status(200).send('Unition Bot ishlamoqda!');
}