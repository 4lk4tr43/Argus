/**
 * Created by andreaskaufmann on 14/05/15.
 */

///<reference path="./ts_libs/node.d.ts"/>
///<reference path="./ts_libs/express.d.ts"/>

module Application {

    class Server {
        express = require("express");
        expressDotViewEngine = require("express-dot-engine");

        private _express;

        private startViewEngine() {
            this._express.engine("dot", this.expressDotViewEngine.__express);
            this._express.set("views", "./views");
            this._express.set("view engine", "dot");
        }

        private registerStaticFolders() {
            this._express.use("/stylesheets", this.express.static("stylesheets"));
            this._express.use("/images", this.express.static("images"));
        }

        private registerRoutes() {
            this._express.get("/", function (req, res) {
                res.render("index")
            });
        }

        constructor(port:number) {
            this._express = new this.express();

            this.startViewEngine();
            this.registerStaticFolders();
            this.registerRoutes();

            this._express.listen(port);
        }
    }

    new Server(4321);
}