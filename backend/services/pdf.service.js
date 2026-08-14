const puppeteer = require("puppeteer");

const generatePDF = async (html) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    try {
        const page = await browser.newPage();

        await page.setContent(html, {
            waitUntil: "networkidle0",
        });

        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
            margin: {
                top: "8mm",
                right: "8mm",
                bottom: "0",
                left: "8mm",
            },
        });

        return pdfBuffer;
    } finally {
        await browser.close();
    }
};

module.exports = {
    generatePDF,
};