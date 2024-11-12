import figlet from 'figlet'
import chalk from 'chalk'

figlet.text('HEMIS', { font: 'Standard' }, (err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log(chalk.blueBright(data));
    console.log("📘📘📘 Hemis'ga xush kelibsiz!!! 📘📘📘");
});
