function importAd(publisherID, devStatus, platform) {
    if (typeof publisherID == 'undefined' || publisherID === null) {
        console.error('Publisher ID is undefined, the script will not run.') // throw an error if the publisher ID is undefined
    }
    else {
        const pubid = (!publisherID.includes('ca-pub-') || publisherID.match(/^[0-9]+$/)) ? 'ca-pub-' + publisherID : publisherID;
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
    }
}