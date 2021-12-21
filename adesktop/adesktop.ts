function importAd(pub_id, platform) {
    if (typeof pub_id == 'undefined' || pub_id === null) {
        console.error('Publisher ID is undefined, the script will not run.') // throw an error if the publisher ID is undefined
    }
    else {
        const adjs = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'; //adsense base url
        const wholelink = adjs + '?client=' + pub_id;
        const adscript = document.createElement('script');
        adscript.setAttribute('async', '');
        adscript.setAttribute('src', wholelink);
        adscript.setAttribute('crossorigin', 'anonymous'); // add attributes to the script element
        const ifMobile = /Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent); // check if the user is on a mobile device
        function runAds() {
            console.log('ads loaded')
            document.head.appendChild(adscript); // append the script to the head of the document        
        }
        switch (platform) {
            case 'mobile':
                if (ifMobile == true) {
                    runAds();
                }
                break;
            default:
                runAds();
        }
    }
}