// import puppeteer from 'puppeteer';

// export async function POST(request: Request) {

//     try {
//         const browser = await puppeteer.launch({
//             headless: true
//         })

//         const page = await browser.newPage()

//         await page.goto('https://www.geeksforgeeks.org/aptitude-questions-and-answers/', {
//            waitUntil: 'networkidle2'
//         })
        
//         await page.waitForSelector('.QuizQuestionCard_quizCard__9T_0J', { timeout: 5000 });

//         const quizData = await page.evaluate(() => {
//             const quizCard = document.querySelector('.QuizQuestionCard_quizCard__9T_0J');
//             if (!quizCard) {
//                 return { error: 'Quiz card not found' };
//             }

//             const questionNumber = quizCard.querySelector('.QuizQuestionCard_quizCard__header__questionNumber__GffEN')?.textContent?.trim() || 'No question number';
//             const questionText = quizCard.querySelector('.QuizQuestionCard_quizCard__quizQuestionTextContainer__question__tv5de')?.textContent?.trim() || 'No question text';
            
//             const options = Array.from(quizCard.querySelectorAll('.QuizQuestionCard_quizCard__optionsList__optionItem__6OtkL')).map(option => {
//                 return option.querySelector('.QuizQuestionCard_quizCard__optionsList__optionItem__optionLabel__ZJEuI div')?.textContent?.trim() || 'No option text';
//             });

//             const discussLinkElement = quizCard.querySelector('.QuizQuestionCard_quizCard__tagCollection__discussIt__P4q4G a');
//             const discussLink = discussLinkElement ? (discussLinkElement as HTMLAnchorElement).href : 'No discuss link';

//             return {
//                 questionNumber,
//                 questionText,
//                 options,
//                 discussLink
//             };
//         });



//         await browser.close()

//         return new Response(JSON.stringify(quizData), {
//             status: 200,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         } catch (error) {

//             console.error('Error during web scraping:', error);

//             return new Response(JSON.stringify({ error: 'Failed to scrape data' }), {
//                 status: 500,
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//         }
//     }


    
//         // const modules = await page.evaluate(() => {
//         //     return Array.from(document.querySelectorAll('h2' ) ).map(module => {
//         //         const headingElement = module as HTMLHeadingElement;
//         //         return {
//         //             title: headingElement.textContent?.trim() || 'No title',
                    
//         //         };
//         //     });
//         // });



import puppeteer from 'puppeteer';
import fs from 'fs';

export async function GET(request: Request) {
    try {
        const browser = await puppeteer.launch({
            headless: true
        });

        const page = await browser.newPage();

        // Go to the target page
        await page.goto('https://www.geeksforgeeks.org/quizzes/numbers-gq/', {
            waitUntil: 'networkidle0', // or 'domcontentloaded'
            timeout: 120000 // 120 seconds // Wait until the network is idle
        });

        // Take a screenshot of the full page
        const screenshotBuffer = await page.screenshot({ fullPage: true });

        // Close the browser
        await browser.close();

        // Convert screenshot to base64
        const base64Image = Buffer.from(screenshotBuffer).toString('base64');
        const dataUri = `data:image/png;base64,${base64Image}`;

        return new Response(JSON.stringify({ image: dataUri }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });


    } catch (error) {
        console.error('Error during screenshot capture:', error);

        return new Response(JSON.stringify({ error: 'Failed to capture screenshot' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
