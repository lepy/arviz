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
    
      
      
    
      var element = document.getElementById("f0e525c9-22ea-4ac8-802f-c27504e417c8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f0e525c9-22ea-4ac8-802f-c27504e417c8' but no matching script tag was found.")
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
                    
                  var docs_json = '{"676579f3-a82d-4786-9145-c8b04310337e":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68112","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68099","type":"BoxAnnotation"},{"attributes":{"axis_label":"ESS","formatter":{"id":"68140"},"ticker":{"id":"68088"}},"id":"68087","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68145"},"selection_policy":{"id":"68146"}},"id":"68120","type":"ColumnDataSource"},{"attributes":{},"id":"68084","type":"BasicTicker"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68130","type":"Span"},{"attributes":{"above":[{"id":"68131"}],"below":[{"id":"68083"}],"center":[{"id":"68086"},{"id":"68090"}],"left":[{"id":"68087"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68113"},{"id":"68118"},{"id":"68123"},{"id":"68128"},{"id":"68130"}],"title":{"id":"68134"},"toolbar":{"id":"68101"},"toolbar_location":null,"x_range":{"id":"68075"},"x_scale":{"id":"68079"},"y_range":{"id":"68077"},"y_scale":{"id":"68081"}},"id":"68074","subtype":"Figure","type":"Plot"},{"attributes":{"toolbars":[{"id":"68101"}],"tools":[{"id":"68091"},{"id":"68092"},{"id":"68093"},{"id":"68094"},{"id":"68095"},{"id":"68096"},{"id":"68097"},{"id":"68098"}]},"id":"68153","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"68098","type":"HoverTool"},{"attributes":{},"id":"68141","type":"Selection"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68126","type":"Circle"},{"attributes":{},"id":"68138","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"68120"}},"id":"68124","type":"CDSView"},{"attributes":{"data_source":{"id":"68115"},"glyph":{"id":"68116"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68117"},"selection_glyph":null,"view":{"id":"68119"}},"id":"68118","type":"GlyphRenderer"},{"attributes":{},"id":"68140","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"68154"},{"id":"68152"}]},"id":"68155","type":"Column"},{"attributes":{"axis":{"id":"68087"},"dimension":1,"ticker":null},"id":"68090","type":"Grid"},{"attributes":{},"id":"68088","type":"BasicTicker"},{"attributes":{},"id":"68091","type":"ResetTool"},{"attributes":{},"id":"68144","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"68132"},{"id":"68133"}],"location":"center_right","orientation":"horizontal"},"id":"68131","type":"Legend"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"68138"},"ticker":{"id":"68084"}},"id":"68083","type":"LinearAxis"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"68113"},{"id":"68118"}]},"id":"68132","type":"LegendItem"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68100","type":"PolyAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68147"},"selection_policy":{"id":"68148"}},"id":"68125","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"68116","type":"Line"},{"attributes":{"data_source":{"id":"68125"},"glyph":{"id":"68126"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68127"},"selection_glyph":null,"view":{"id":"68129"}},"id":"68128","type":"GlyphRenderer"},{"attributes":{},"id":"68077","type":"DataRange1d"},{"attributes":{},"id":"68145","type":"Selection"},{"attributes":{"axis":{"id":"68083"},"ticker":null},"id":"68086","type":"Grid"},{"attributes":{"data_source":{"id":"68110"},"glyph":{"id":"68111"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68112"},"selection_glyph":null,"view":{"id":"68114"}},"id":"68113","type":"GlyphRenderer"},{"attributes":{},"id":"68075","type":"DataRange1d"},{"attributes":{},"id":"68147","type":"Selection"},{"attributes":{},"id":"68096","type":"UndoTool"},{"attributes":{"children":[[{"id":"68074"},0,0]]},"id":"68152","type":"GridBox"},{"attributes":{},"id":"68094","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68141"},"selection_policy":{"id":"68142"}},"id":"68110","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68110"}},"id":"68114","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68111","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"68117","type":"Line"},{"attributes":{"source":{"id":"68125"}},"id":"68129","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"68122","type":"Line"},{"attributes":{"source":{"id":"68115"}},"id":"68119","type":"CDSView"},{"attributes":{},"id":"68148","type":"UnionRenderers"},{"attributes":{"text":"b"},"id":"68134","type":"Title"},{"attributes":{},"id":"68079","type":"LinearScale"},{"attributes":{},"id":"68146","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"68099"}},"id":"68093","type":"BoxZoomTool"},{"attributes":{},"id":"68092","type":"PanTool"},{"attributes":{},"id":"68143","type":"Selection"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"68121","type":"Line"},{"attributes":{"data_source":{"id":"68120"},"glyph":{"id":"68121"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68122"},"selection_glyph":null,"view":{"id":"68124"}},"id":"68123","type":"GlyphRenderer"},{"attributes":{},"id":"68142","type":"UnionRenderers"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"68128"},{"id":"68123"}]},"id":"68133","type":"LegendItem"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68143"},"selection_policy":{"id":"68144"}},"id":"68115","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"68153"},"toolbar_location":"above"},"id":"68154","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"68100"}},"id":"68095","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68127","type":"Circle"},{"attributes":{},"id":"68097","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68091"},{"id":"68092"},{"id":"68093"},{"id":"68094"},{"id":"68095"},{"id":"68096"},{"id":"68097"},{"id":"68098"}]},"id":"68101","type":"Toolbar"},{"attributes":{},"id":"68081","type":"LinearScale"}],"root_ids":["68155"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"676579f3-a82d-4786-9145-c8b04310337e","root_ids":["68155"],"roots":{"68155":"f0e525c9-22ea-4ac8-802f-c27504e417c8"}}];
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