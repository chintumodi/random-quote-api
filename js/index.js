const quoteText = document.querySelector('.quote')
const quoteBtn = document.querySelector('button')
const authorName = document.querySelector('.author .name')

const soundBtn = document.querySelector('.sound')
const copyBtn = document.querySelector('.copy')
const twitterBtn = document.querySelector('.twitter')

function showQuote(){
    quoteBtn.innerText = ('Loading...')
    // console.log('clicked')
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result)
        
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = ('Next Quote')
    });

}

    soundBtn.addEventListener('click',()=>{
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`)
        speechSynthesis.speak(utterance)
    })
    
    // copyBtn.addEventListener('click',()=>{
    //     navigator.clipboard.writerText(quoteText.innerText);
    // });
    

    twitterBtn.addEventListener('click',()=>{
        const tweeturl = `https:/twitter.com `;
        window.open(tweeturl)
    })

quoteBtn.addEventListener('click', showQuote);





































// random quote function

// function randomQuote() {
//     quoteBtn.classList.add('loading')
//     quoteBtn.innerText = "Loading Quote.."
//     // console.log('clicked')
//     fetch("https:/api.quotable.io/random").then(res => res.json()).then(result => {
//         console.log(result);
//         quoteText.innerText = result.content
//         authorName.innerText = result.author
 
//         quoteBtn.innerText = "Next Quote.."
//         quoteBtn.classList.remove('loading')
//     });

// }

//  soundBtn.addEventListener('click',()=>{
// // the SpeechSynthesisUtterance is a web speech api that represents a speech request    

// let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`)
// speechSynthesis.speak(utterance)
//  });  

//  copyBtn.addEventListener('click',()=>{
//     console.log('clicked')
//     navigator.clipboard.writeText(`${quoteText.innerText}`);
// // copying the quote on copybtn click
// // writeText() property writes the specified text string to system Clipboard
//  });

//  twitterBtn.addEventListener('click',()=>{
//     console.log('clicked')
//     let tweetUrl = `https:/twitter.com/intent/tweet?url= ${quoteText.innerText}`
//     window.open(tweetUrl, "_blank")
//  });



// quoteBtn.addEventListener('click', randomQuote);


