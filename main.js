/**
 * Created by andreaskaufmann on 14/05/15.
 */
///<reference path="./ts_libs/node.d.ts"/>
///<reference path="./ts_libs/express.d.ts"/>
var Application;
(function (Application) {
    var Server = (function () {
        function Server(port) {
            this.express = require("express");
            this.expressDotViewEngine = require("express-dot-engine");
            this._express = new this.express();
            this.startViewEngine();
            this.registerStaticFolders();
            this.registerRoutes();
            this._express.listen(port);
        }
        Server.prototype.startViewEngine = function () {
            this._express.engine("dot", this.expressDotViewEngine.__express);
            this._express.set("views", "./views");
            this._express.set("view engine", "dot");
        };
        Server.prototype.registerStaticFolders = function () {
            this._express.use("/stylesheets", this.express.static("stylesheets"));
            this._express.use("/images", this.express.static("images"));
        };
        Server.prototype.registerRoutes = function () {
            this._express.get("/", function (req, res) {
                res.render("index");
            });
        };
        return Server;
    })();
    new Server(4321);
})(Application || (Application = {}));
//# sourceMappingURL=main.js.map