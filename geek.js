function title() {
    var titles = ["crafted by restrict", "paid biolink service", "@adopters", "love you"];
    var index = 0;

    function newtitle() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
    }

    setInterval(newtitle, 100);
  }

  window.onload = title;
