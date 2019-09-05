$(document).ready(function() {
  $('.desktopNavRoot a').each(function(index, val){
    let href = val.href.replace('anko-brand', 'anko');
    $(val).attr('href', href);
  });
});
