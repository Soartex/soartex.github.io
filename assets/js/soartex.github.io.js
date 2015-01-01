$(function(){
  // build side menu
  var html = '';

  // https://github.com/mistic100/jekyll-bootstrap-doc
  $('.bs-docs-section').each(function() {
    var h1 = $(this).find('h1').first(),
        h23 = $(this).find('h2[id], h3[id]');

    if (h1.length && h1[0].id) {
      html+= '<li><a href="#' + h1[0].id +'">'+ h1.text() +'</a>';

      if (h23.length) {
        html+= '<ul class="nav">';
        h23.each(function() {
          html+= '<li><a href="#' + this.id +'">'+ $(this).text() +'</a></li>';
        });
        html+= '</ul>';
      }

      html+= '</li>';
    }
  });

  if (html == '') {
    $('[role=complementary]').hide();
    $('[role=main]').toggleClass('col-md-9 col-md-12');
  }
  else {
    $('.bs-docs-sidenav').html(html);
  }

});

function trianglify(color1, color2) {
  var header = $('#content'),
    t = new Trianglify({
      cellsize: 80,
      noiseIntensity: 0,
      x_gradient: [color1, color2]
    }),
    pattern = t.generate(window.screen.width | header.outerWidth(), header.outerHeight()*1.2);

  header.css('background-image', pattern.dataUrl);
}