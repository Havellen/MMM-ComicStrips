/* eslint-disable */
Module.register("MMM-ComicStrips", {

    // Default module config.
    defaults: {
      comic: ["pondus", "lunch"],         // Choose between  ["pondus", "lunch"]
      updateInterval : 1000 * 60 * 1,  // 1 hour
      comicWidth: 500
    },

    start: function() {
        Log.info(this.config);
        Log.info("Starting module: " + this.name);

        this.dailyComic = "";
        this.getComic();

        self = this;
        
        setInterval(function() {
            self.getComic();
        }, self.config.updateInterval);
    },

    // Define required scripts.
    getScripts: function() {
        return [];
    },

    getStyles: function() {
        return ["comic.css"];
    },

    getComic: function() {
        Log.info("[MMM-Comics] Getting comic.");
        this.sendSocketNotification("GET_COMIC", {
            config: this.config
        });
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "COMIC") {
            this.dailyComic = payload.img;
            console.log("Comic source: " + this.dailyComic);
            this.updateDom(1000);
        }
    },

    notificationReceived: function(notification, payload, sender) {
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        var comicWrapper = document.createElement("div");
        comicWrapper.className = "comic-container";
        var img = document.createElement("img");
        img.id = "comic-content";
        img.src = this.dailyComic;
        if (this.config.comicWidth) {
          img.style.width = this.config.comicWidth;
        }
      	if (this.config.coloredImage) {
      		img.className = 'colored-image';
      	};
	      comicWrapper.appendChild(img);
        wrapper.appendChild(comicWrapper);
        return wrapper;
    }
});
