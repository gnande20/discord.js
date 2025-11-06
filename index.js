// =============================
// 🌀 Bot Blue Lock : Bachira
// Auteur : Gnande Kouakou Camille
// =============================

// Importation de la librairie discord.js
const { Client, GatewayIntentBits } = require("discord.js");

// === 🧩 Mets ton token ici ===
// ⚠️ Ne le partage JAMAIS à personne, même à moi 😎
const TOKEN = "MTQzNTczNDkzNDM0MDc2NzgzNQ.GBGCr3.l9lv-O9_rYqLSEadKSBuud_7a35WGJoU9zMTUs";

// Création du client Discord
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,          // Connexion aux serveurs
    GatewayIntentBits.GuildMessages,   // Lire les messages
    GatewayIntentBits.MessageContent   // Lire le contenu des messages
  ]
});

// Quand le bot est prêt
client.once("ready", () => {
  console.log(`💙 Blue Lock bot connecté en tant que ${client.user.tag} !`);
  console.log("⚽ Prêt à dominer le terrain !");
});

// Quand quelqu’un envoie un message
client.on("messageCreate", (message) => {
  if (message.author.bot) return; // Ignore les messages de bot

  // Commande test
  if (message.content.toLowerCase() === "!ping") {
    message.reply("🏐 Pong ! Le Blue Lock ne dort jamais !");
  }

  // Exemple de réponse stylée Blue Lock
  if (message.content.toLowerCase() === "!ego") {
    message.reply("🔥 *L’Ego, c’est la clé de la victoire !* — Bachira");
  }
});

// Connexion du bot
client.login(TOKEN)
  .then(() => console.log("✅ Connexion réussie !"))
  .catch(err => console.error("❌ Erreur de connexion :", err));
