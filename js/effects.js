var effects = [
  {
    name: "reverse",
    effect: function(player, sec) {
      if (!player.hasEffect(this.name)) {
        player.speed *= -1;
        var n = this.name;
        player.effectText.push(n);
        setTimeout(function() {
          player.speed *= -1;
          player.removeEffect(n);
        }, sec * 1000);
      }
    }
  },
  {
    name: "slowdown",
    effect: function(player, sec) {
      if (!player.hasEffect(this.name)) {
        player.speed /= 2;
        var n = this.name;
        soundManager.setSpeed(player);
        player.effectText.push(n);
        setTimeout(function() {
          player.speed *= 2;
          player.removeEffect(n);
          soundManager.setSpeed(player);
        }, sec * 1000);
      }
    }
  },
  {
    name: "speedup",
    effect: function(player, sec) {
      if (!player.hasEffect(this.name)) {
        player.speed *= 2;
        var n = this.name;
        player.effectText.push(n);
        soundManager.setSpeed(player);
        setTimeout(function() {
          player.speed /= 2;
          player.removeEffect(n);
          soundManager.setSpeed(player);
        }, sec * 1000);
      }
    }
  },
  {
    name: "double points",
    effect: function(player, sec) {
      if (!player.hasEffect(this.name)) {
        player.pointsMultiplier = 2;
        var n = this.name;
        player.effectText.push(n);
        setTimeout(function() {
          player.pointsMultiplier = 1;
          player.removeEffect(n);
        }, sec * 1000);
      }
    }
  } /*,
  {
    name: "inverse colors",
    effect: function(player, sec) {
      if (!player.hasEffect(this.name)) {
        globalSettings.invertColors = true;
        setTimeout(function() {
          globalSettings.invertColors = false;
        }, sec * 1000);
      }
    }
  } ,
  {
    name: "blackout",
    effect: function(player, sec) {
      if (!globalSettings.drawBlack) {
        globalSettings.drawBlack = true;
        setTimeout(function() {
          globalSettings.drawBlack = false;
        }, 1000);
      }
    }
  }*/
];
