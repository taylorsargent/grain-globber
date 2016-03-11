var $ul = $('ul');

grains.forEach(function (grain){
  var $name = $('<h2>');
  var $img = $('<img>');
  var $desc = $('<p>');


  $img.attr('src', 'images/' + grain.img);
  $name.html(grain.name);
  $desc.html(grain.desc);


  $('body').append($img);
  $('body').append($name);
  $('body').append($desc);
});
