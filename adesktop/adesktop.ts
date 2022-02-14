function importAd(...args) {
    const publisherID = args[0];
    const restArgs = args[1] || args[2]
    if (typeof publisherID == 'undefined' && publisherID === null) {
        throw new Error('Publisher ID is undefined, the script will not run.') // throw an error if the publisher ID is undefined
    }
    else if (![typeof args[1], typeof args[2]].every(x => ['string', 'undefined'].includes(x))) { // see if any of the args has the type other than string or undefined
        throw new Error('The 2nd & 3rd argument must be a string or undefined.') // throw an error if the second argument is not a string
        }
    const devStatus = (args[1] === 'dev') ? 'dev' : args[2];
    const platform = (args[1].toLowerCase() === 'mobile') ? 'mobile' : args[2];

        const pubid = (!publisherID.includes('ca-pub-') && publisherID.match(/^[0-9]+$/)) ? 'ca-pub-' + publisherID : publisherID;
        const adjs = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'; //adsense base url
        const wholelink = adjs + '?client=' + pubid;
        const adscript = document.createElement('script');
        adscript.setAttribute('async', '');
        adscript.setAttribute('src', wholelink);
        adscript.setAttribute('crossorigin', 'anonymous'); // add attributes to the script element
        const ifMobile = /Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent); // check if the user is on a mobile device
        function runAds() {
            switch (devStatus) {
                case 'dev':
                    console.log('ads loaded with publisher ID: ' + pubid);
                    const platformStatus = (ifMobile) ? 'mobile' : 'desktop';
                    console.log('current platform: ' + platformStatus);
                    break;
            }
            document.head.appendChild(adscript); // append the script to the head of the document        
        }
        switch (platform) {
            case 'mobile':
                if (ifMobile == true) {
                    runAds();
                }
                break;
            default:
                if (ifMobile == false) {
                    runAds();
                }
        }
    console.log(`Debugging info:
    Publisher ID: ${pubid}
    Dev Status: ${devStatus}
    Platform: ${platform}`)
}