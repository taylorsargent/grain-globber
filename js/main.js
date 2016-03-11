var $ul = $('ul');

grains.forEach(function (grain){
  var $name = $('<h2>');
  var $img = $('<img>');

  $name.html(grains.name);
  $img.attr('src', 'images/' + grains.img);

  $name.append(<h2>);
  $ul.append($li);
});
