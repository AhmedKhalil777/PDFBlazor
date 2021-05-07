// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

export function showPrompt(message) {
  return prompt(message, 'Type anything here');
}

export function printPdf(id) {
    var divContents = document.getElementById(id).innerHTML;
    var links = document.getElementsByTagName('link');
    var styleElements = document.getElementsByTagName('style');
    var a = window.open('', '', 'height=1000, width=1500');
    a.document.write('<html><head>');
    for (var i = 0; i < links?.length; i++) {
        a.document.write(links.item(i).outerHTML);
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
