function title() {
    var titles = ["crafted by xeno", "paid biolink service", "discord.gg/bnr", "love you"];
    var index = 0;

    function newtitle() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
    }

    setInterval(newtitle, 100);
  }

  window.onload = title;