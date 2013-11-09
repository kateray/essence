// Initialize the extension on browser load
window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false); //remove listener, no longer needed
    myExtension.init();
},false);

var myExtension = {
  init: function() {
    var appcontent = document.getElementById("appcontent");   // browser
    if(appcontent){
      appcontent.addEventListener("load", myExtension.onPageLoad, true);
    }
  },

  // Return an array of RAML urls found in a document
  detectRaml: function(document) {
    var metas = document.getElementsByTagName('link');
    var ramlFiles = [];

    for (i=0; i<metas.length; i++) {
      if (metas[i].getAttribute("rel") == "service") {
        ramlFiles.push( metas[i].getAttribute("href") );
      }
    }

    return ramlFiles;
  },

  parseRaml: function(url) {
    console.log('Requesting RAML');
    RAML.Parser.loadFile(url).then(function (data) {
        console.log('Received data:');
        console.log(data);
    }, function (error) {
        console.log('Error parsing: ' + url);
    });
  },

  onPageLoad: function(aEvent) {
    var doc = aEvent.originalTarget; // doc is document that triggered "onload" event
    var ls = window.content.localStorage;
    var ramlArray = JSON.parse(ls.getItem('essence-raml') || JSON.stringify([]));
    var newRaml = myExtension.detectRaml(doc);

    for (i = 0; i < newRaml.length; i++) {
      //check if localstorage already contains href
      if (ramlArray.indexOf(newRaml[i]) == -1 ){
        ramlArray.push( newRaml[i] );
      }
    }

    ls.setItem('essence-raml', JSON.stringify(ramlArray));
    // add event lfistener for page unload
    aEvent.originalTarget.defaultView.addEventListener("unload", function(event){ myExtension.onPageUnload(event); }, true);
  },

  onPageUnload: function(aEvent) {
    // do something
  }
};