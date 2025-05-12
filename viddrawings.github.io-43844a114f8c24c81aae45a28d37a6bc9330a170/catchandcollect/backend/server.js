const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: 'mail.transip.email',
  port: 587,
  secure: false, // use true when port 465
  auth: {
    user: 'info@splashofmagic.nl',
    pass: 'JOUW_EMAIL_WACHTWOORD'
  }
});

app.post('/aanmelden', async (req, res) => {
  const data = req.body;

  const mailOptions = {
    from: '"Aanmelding Standhouder" <info@splashofmagic.nl>',
    to: 'info@splashofmagic.nl',
    subject: `Nieuwe aanmelding van ${data.contactpersoon}`,
    html: `
      <h2>Nieuwe standhouder-aanmelding</h2>
      <p><strong>Bedrijfsnaam:</strong> ${data.bedrijfsnaam}</p>
      <p><strong>Contactpersoon:</strong> ${data.contactpersoon}</p>
      <p><strong>KVK:</strong> ${data.kvk}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefoon:</strong> ${data.telefoon}</p>
      <p><strong>Standtype:</strong> ${data.standType}</p>
      <p><strong>Stoelen:</strong> ${data.stoelen}</p>
      <p><strong>Extra tickets:</strong> ${data.extraTickets}</p>
      <p><strong>Stroom nodig:</strong> ${data.stroom ? 'Ja' : 'Nee'}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({message: 'E-mail verzonden'});
  } catch (error) {
    console.error('Fout bij verzenden e-mail:', error);
    res.status(500).send({message: 'Verzenden mislukt'});
  }
});

app.post('/contact', async (req, res) => {
  const {naam, email, onderwerp, bericht} = req.body;

  if (!naam || !email || !bericht) {
    return res.status(400).json({message: 'Alle velden zijn verplicht.'});
  }

  try {
    let mailOptions = {
      from: `"Contactformulier" <${email}>`,
      to: 'jouw@e-mailadres.nl', // todo
      subject: onderwerp,
      text: `Naam: ${naam}\nE-mail: ${email}\n\nBericht:\n${bericht}`,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Bericht verzonden:', nodemailer.getTestMessageUrl(info));
    res.status(200).json({message: 'Bericht verzonden'});
  } catch (error) {
    console.error('Fout bij verzenden:', error);
    res.status(500).json({message: 'Er ging iets mis.'});
  }
});

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
