(function() {
    var app, config, serveStatic;

    var express=require('express');
    app=express();
    serveStatic=require('serve-static');


    config=require('./config');
    app.use(serveStatic(config.bowerPath));
    app.use(serveStatic(config.rootPath + "/client"));


    app.get("/config", function(req,res){

        delay();

        return res.send( {
          secret:"Secret1"
        });
    });

    app.listen(process.env.PORT || 3000);
    console.log("Listening on http://localhost:" + (process.env.PORT || '3000') );

    //This represents an actual time consuming call made
    function delay(){
        var i, m, k;

        for (i= 1; i <= 10000; i = ++i) {
            for ( m = 1; m <= 100000; j = ++m) {
                k = 1;
            }
        }
    }
}).call(this);


