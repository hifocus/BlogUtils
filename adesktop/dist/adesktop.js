function importAd(publisherID, devStatus, platform) {
    if (typeof publisherID == 'undefined' || publisherID === null) {
        console.error('Publisher ID is undefined, the script will not run.'); // throw an error if the publisher ID is undefined
    }
    else {
        var pubid_1 = (!publisherID.includes('ca-pub-') || publisherID.match(/^[0-9]+$/)) ? 'ca-pub-' + publisherID : publisherID;
        var adjs = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'; //adsense base url
        var wholelink = adjs + '?client=' + pubid_1;
        var adscript_1 = document.createElement('script');
        adscript_1.setAttribute('async', '');
        adscript_1.setAttribute('src', wholelink);
        adscript_1.setAttribute('crossorigin', 'anonymous'); // add attributes to the script element
        var ifMobile_1 = /Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent); // check if the user is on a mobile device
        function runAds() {
            switch (devStatus) {
                case 'dev':
                    console.log('ads loaded with publisher ID: ' + pubid_1);
                    var platformStatus = (ifMobile_1) ? 'mobile' : 'desktop';
                    console.log('current platform: ' + platformStatus);
                    break;
            }
            document.head.appendChild(adscript_1); // append the script to the head of the document        
        }
        switch (platform) {
            case 'mobile':
                if (ifMobile_1 == true) {
                    runAds();
                }
                break;
            default:
                if (ifMobile_1 == false) {
                    runAds();
                }
        }
    }
}
