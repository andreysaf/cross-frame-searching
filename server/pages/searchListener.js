let searchTerm = '';

window.addEventListener('message', function (event) {
  //   if (event.origin != 'http://javascript.info') {
  //     // something from an unknown domain, let's ignore it
  //     return;
  //   }

  function doSearch(text, color = 'yellow') {
    let searchOccurences = 0;

    if (color != 'transparent' && searchTerm !== '') {
      doSearch(searchTerm, 'transparent');
    }

    if (window.find && window.getSelection) {
      document.designMode = 'on';
      var sel = window.getSelection();
      sel.collapse(document.body, 0);

      while (window.find(text)) {
        if (color !== 'transparent') {
          searchOccurences++;
        }

        document.execCommand('HiliteColor', false, color);
        sel.collapseToEnd();
      }
      document.designMode = 'off';
    } else if (document.body.createTextRange) {
      var textRange = document.body.createTextRange();
      while (textRange.findText(text)) {
        textRange.execCommand('BackColor', false, color);
        textRange.collapse(false);
      }
    }

    return searchOccurences;
  }

  const searchOccurences = doSearch(event.data);
  searchTerm = event.data;

  // can message back using event.source.postMessage(...)
  event.source.postMessage(
    { name: window.document.title, search: searchOccurences },
    '*'
  );
});
