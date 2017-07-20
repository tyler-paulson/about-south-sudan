var books = document.getElementsByClassName('books--item--buy')
for(var i=0; i<books.length; i++) {
  books[i].addEventListener('click', function() {
    goog_report_conversion();
    ga('send', 'event', 'Books', 'Click', 'Unspecified Book Title');
  })
}
