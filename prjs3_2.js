var myheading = "<h1>This is My Web Page!</h1>",
linkTag = "<a href=\"http://www.webxpertz.net\">Web Site Link</a>",
someText = "This text can be effected by other statements.",
beginEffect = "<strong>",
endEffect = "</strong>",
beginPara = "<p>",
endPara = "</p>";
document.write(myheading);
document.write(beginEffect + someText + endEffect);
document.write(beginPara + linkTag + endPara);
document.write(beginPara + someText + endPara);