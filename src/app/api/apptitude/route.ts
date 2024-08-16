import puppeteer from 'puppeteer';

export async function POST(request: Request) {

    try {
        const browser = await puppeteer.launch({
            headless: true
        })

        const page = await browser.newPage()

        await page.goto('https://www.geeksforgeeks.org/aptitude-questions-and-answers/', {
           waitUntil: 'networkidle2'
        })
        
        // await page.waitForSelector('.QuizQuestionCard_quizCard__9T_0J', { timeout: 5000 });
         // Wait for the blockquote to be present on the page
         await page.waitForSelector('blockquote', { timeout: 15000 });

         const content = await page.evaluate(() => {
             const blockquote = document.querySelector('blockquote');
             if (blockquote) {
                 return {
                     text: blockquote.querySelector('p')?.textContent?.trim(),
                     list: Array.from(blockquote.querySelectorAll('ol li')).map(item => {
                         const link = item.querySelector('a');
                         return {
                             text: link ? link.textContent?.trim() : item.textContent?.trim(),
                             url: link ? link.href : null
                         };
                     })
                 };
             } else {
                 return { text: 'No content found', list: [] };
             }
         });
        await browser.close()

        return new Response(JSON.stringify(content), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        } catch (error) {

            console.error('Error during web scraping:', error);

            return new Response(JSON.stringify({ error: 'Failed to scrape data' }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

        }
    }


    
      



// import puppeteer from 'puppeteer';
// import fs from 'fs';

// export async function GET(request: Request) {
//     try {
//         const browser = await puppeteer.launch({
//             headless: true
//         });

//         const page = await browser.newPage();

//         // Go to the target page
//         await page.goto('https://www.geeksforgeeks.org/quizzes/numbers-gq/', {
//             waitUntil: 'networkidle0', // or 'domcontentloaded'
//             timeout: 120000 // 120 seconds // Wait until the network is idle
//         });

//         // Take a screenshot of the full page
//         const screenshotBuffer = await page.screenshot({ fullPage: true });

//         // Close the browser
//         await browser.close();

//         // Convert screenshot to base64
//         const base64Image = Buffer.from(screenshotBuffer).toString('base64');
//         const dataUri = `data:image/png;base64,${base64Image}`;

//         return new Response(JSON.stringify({ image: dataUri }), {
//             status: 200,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });


//     } catch (error) {
//         console.error('Error during screenshot capture:', error);

//         return new Response(JSON.stringify({ error: 'Failed to capture screenshot' }), {
//             status: 500,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//     }
// }
