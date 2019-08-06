/* eslint-disable */
let request = require("request");
let NodeHelper = require("node_helper");
let cheerio = require("cheerio");
let moment = require("moment");

module.exports = NodeHelper.create({

    start: function () {
        console.log("Starting node helper: " + this.name);
    },

    socketNotificationReceived: function (notification, payload) {
        let self = this;
        let comic = payload.config.comic;

        console.log("Comic -> Notification: " + notification + " Payload: " + comic);

		if (comic.constructor === Array) {
			if (comic.includes(payload.config.lastComic)) {
				comic.splice(payload.config.lastComic)
			}
			
		}

        if (notification === "GET_COMIC") {
            switch (comic) {
            case "pondus":
                this.getPondus();
				break;
			case "lunch":
                this.getLunch();
                break;
            default:
                console.log("Comic not found!");
            }
        }
    },

    getPondus: function () {
        let self = this;
		let url = "https://www.vg.no/tegneserier/api/images/pondus/";
    	let date = new Date();
		url += moment(date).format("YYYY-MM-DD") + ".webp";
	
        console.log("Trying url: " + url);
        request(url, function (error, response, body) {
            let $ = cheerio.load(body);
            let src =  $("img").attr('src');
            self.sendSocketNotification("COMIC", {
                img : src
            });
        });
        return;
    },

	getLunch: function () {
        let self = this;
		let url = "https://www.vg.no/tegneserier/api/images/lunch/";
    	let date = new Date();
		url += moment(date).format("YYYY-MM-DD") + ".webp";
		
        console.log("Trying url: " + url);
        request(url, function (error, response, body) {
            let $ = cheerio.load(body);
            let src =  $("img").attr('src');
            self.sendSocketNotification("COMIC", {
                img : src
            });
        });
        return;
    }
});
