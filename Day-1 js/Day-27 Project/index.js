const { Telegraf } = require('telegraf');

const bot = new Telegraf('6844361109:AAFZcgK-Bk90xa_SQaFt_KfctRsCDrDpuVs');
bot.start((ctx) => ctx.reply('Welcome'));

bot.launch();