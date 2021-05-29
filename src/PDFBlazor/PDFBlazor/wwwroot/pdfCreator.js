// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

export function printPdf(id) {
    var divContents = document.getElementById(id).innerHTML;
    var links = document.getElementsByTagName('link');
    var hides = document.getElementsByClassName('pdf-hide');
    var canvases = document.getElementsByTagName('canvas');
    for (var i = 0; i < hides.length; i++) {
        divContents =   divContents.replace(hides.item(i).outerHTML, '')
    }
    for (var i = 0; i < canvases.length; i++) {
        divContents = divContents.replace(canvases.item(i).outerHTML, "<br><img src='" + canvases.item(i).toDataURL() + "'/>")
    }
    var styleElements = document.getElementsByTagName('style');
    var a = window.open('', '', 'height=1200, width=2000');
    a.document.write('<html><head>');
    for (var i = 0; i < links?.length; i++) {
        if (!links.item(i).outerHTML.includes('http')) {
            a.document.write(links.item(i).outerHTML.replace('href="', 'href="' + links[i].baseURI));
        }
        else {

            a.document.write(links.item(i).outerHTML);
        }
    }
    for (var i = 0; i < styleElements.length; i++) {
        a.document.write(styleElements.item(i).outerHTML);
    }
    a.document.write('</head>');
    a.document.write('<body style:"padding:20px" >');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();

}
