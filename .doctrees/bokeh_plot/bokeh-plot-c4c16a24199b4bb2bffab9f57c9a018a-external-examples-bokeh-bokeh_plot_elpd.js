(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("24ce6f2b-645c-4119-9008-e88a14640f88");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '24ce6f2b-645c-4119-9008-e88a14640f88' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"b2ed1f76-3626-459b-a9ee-83d08b8620a8":{"roots":{"references":[{"attributes":{"axis":{"id":"67843"},"ticker":null},"id":"67846","type":"Grid"},{"attributes":{},"id":"67852","type":"PanTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"67870","type":"Cross"},{"attributes":{"toolbars":[{"id":"67861"}],"tools":[{"id":"67851"},{"id":"67852"},{"id":"67853"},{"id":"67854"},{"id":"67855"},{"id":"67856"},{"id":"67857"},{"id":"67858"}]},"id":"67887","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"67858","type":"HoverTool"},{"attributes":{"children":[{"id":"67888"},{"id":"67886"}]},"id":"67889","type":"Column"},{"attributes":{"axis":{"id":"67847"},"dimension":1,"ticker":null},"id":"67850","type":"Grid"},{"attributes":{"overlay":{"id":"67859"}},"id":"67853","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"67871"},"glyph":{"id":"67870"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"67873"}},"id":"67872","type":"GlyphRenderer"},{"attributes":{},"id":"67844","type":"BasicTicker"},{"attributes":{},"id":"67856","type":"UndoTool"},{"attributes":{"below":[{"id":"67843"}],"center":[{"id":"67846"},{"id":"67850"}],"left":[{"id":"67847"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"67872"}],"title":{"id":"67874"},"toolbar":{"id":"67861"},"toolbar_location":null,"x_range":{"id":"67835"},"x_scale":{"id":"67839"},"y_range":{"id":"67837"},"y_scale":{"id":"67841"}},"id":"67834","subtype":"Figure","type":"Plot"},{"attributes":{"children":[[{"id":"67834"},0,0]]},"id":"67886","type":"GridBox"},{"attributes":{},"id":"67835","type":"DataRange1d"},{"attributes":{},"id":"67857","type":"SaveTool"},{"attributes":{"source":{"id":"67871"}},"id":"67873","type":"CDSView"},{"attributes":{},"id":"67839","type":"LinearScale"},{"attributes":{},"id":"67837","type":"DataRange1d"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"67881"},"selection_policy":{"id":"67882"}},"id":"67871","type":"ColumnDataSource"},{"attributes":{},"id":"67880","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"67887"},"toolbar_location":"above"},"id":"67888","type":"ToolbarBox"},{"attributes":{},"id":"67841","type":"LinearScale"},{"attributes":{},"id":"67854","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"67878"},"ticker":{"id":"67844"}},"id":"67843","type":"LinearAxis"},{"attributes":{},"id":"67848","type":"BasicTicker"},{"attributes":{},"id":"67881","type":"Selection"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"67880"},"ticker":{"id":"67848"}},"id":"67847","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67851"},{"id":"67852"},{"id":"67853"},{"id":"67854"},{"id":"67855"},{"id":"67856"},{"id":"67857"},{"id":"67858"}]},"id":"67861","type":"Toolbar"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"67860","type":"PolyAnnotation"},{"attributes":{},"id":"67851","type":"ResetTool"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"67874","type":"Title"},{"attributes":{},"id":"67882","type":"UnionRenderers"},{"attributes":{},"id":"67878","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"67860"}},"id":"67855","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67859","type":"BoxAnnotation"}],"root_ids":["67889"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"b2ed1f76-3626-459b-a9ee-83d08b8620a8","root_ids":["67889"],"roots":{"67889":"24ce6f2b-645c-4119-9008-e88a14640f88"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();