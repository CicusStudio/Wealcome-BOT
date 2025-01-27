## **Passo 1: Scaricare i file già pronti**

1. **Scarica i file del bot**: Puoi scaricare i file direttamente da questo link qui sotto:
   
   [Scarica i file del bot Discord](https://example.com/download/discord-bot.zip) *(Nota: questo è solo un esempio, dovrai caricare i tuoi file su un servizio di hosting, tipo Google Drive o Dropbox)*.

2. **Estrai i file** in una cartella sul tuo computer.

---

## **Passo 2: Installare Node.js**

Se non hai già installato **Node.js**, segui questi passaggi:

1. Vai sul sito ufficiale di **Node.js**: [https://nodejs.org/en](https://nodejs.org/en).
2. Scarica la versione **LTS** (quella stabile consigliata).
3. Segui le istruzioni per installarlo sul tuo computer.
4. Dopo l'installazione, apri il **Prompt dei comandi** su Windows (o il terminale su Mac/Linux) e scrivi:

    ```bash
    node -v
    ```

   Se tutto è a posto, vedrai la versione di **Node.js** che hai appena installato.

---

## **Passo 3: Installare le dipendenze**

1. Apri il **Prompt dei comandi** (cmd) o **PowerShell** su Windows (o terminale su Mac/Linux).
2. Vai nella cartella dove hai estratto i file del bot:

    ```bash
    cd percorso/della/cartella/discord-bot
    ```

3. Ora, devi installare le librerie **discord.js** e **dotenv** che servono per far funzionare il bot. Scrivi questo comando:

    ```bash
    npm install discord.js dotenv
    ```

---

## **Passo 4: Configurare il Bot**

1. **Apri il file `config.cfg`** che hai trovato nella cartella dei file estratti.
2. Modifica le seguenti voci con le tue informazioni:

   - **TOKEN**: Qui devi mettere il **token del bot** che ottieni quando crei il bot sul [Discord Developer Portal](https://discord.com/developers/applications).
   - **CHANNEL_ID**: Inserisci l'ID del canale dove vuoi che il bot invii il messaggio di benvenuto.
   - **DEFAULT_ROLE**: Metti l'ID del ruolo che vuoi assegnare a chi entra nel server.
   - **EMBED_COLOR**: Scegli il colore per l'embed (scrivilo in formato esadecimale, come `#FF5733`).
   - **WELCOME_TEXT**: Scrivi il messaggio di benvenuto che vuoi che il bot invii quando un utente entra.

   Ecco come potrebbe apparire il file `config.cfg` dopo averlo configurato:

   ```ini
   [Bot Settings]
   TOKEN=il_tuo_token_del_bot

   [Welcome Settings]
   CHANNEL_ID=ID_del_canale
   DEFAULT_ROLE=ID_del_ruolo_di_default
   EMBED_COLOR=#FF5733
   WELCOME_TEXT=Benvenuto nel nostro server, siamo felici di averti con noi!

3. E MOLTO IMPORTANTE CHE IL RUOLO DEL BOT DISCORD SIA SOPRA AD QUELLO DI DEFAULT. Il bot deve disporre di tutti i permessi necessari sia sul DISCORD DEVELOPER PORTAL, SIA DISCORD STESSO
