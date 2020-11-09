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
    
      
      
    
      var element = document.getElementById("efa5a024-e47a-4fa9-98b8-87f2eb1c2674");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'efa5a024-e47a-4fa9-98b8-87f2eb1c2674' but no matching script tag was found.")
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
                    
                  var docs_json = '{"efef7e2f-80cc-42a5-ae38-21fe6a6d9fde":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68362","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68363","type":"Circle"},{"attributes":{},"id":"68330","type":"LinearScale"},{"attributes":{},"id":"68335","type":"BasicTicker"},{"attributes":{},"id":"68373","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"68381"},{"id":"68379"}]},"id":"68382","type":"Column"},{"attributes":{"children":[[{"id":"68325"},0,0]]},"id":"68379","type":"GridBox"},{"attributes":{},"id":"68374","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68374"},"selection_policy":{"id":"68375"}},"id":"68361","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68350","type":"BoxAnnotation"},{"attributes":{"source":{"id":"68361"}},"id":"68365","type":"CDSView"},{"attributes":{"overlay":{"id":"68351"}},"id":"68346","type":"LassoSelectTool"},{"attributes":{},"id":"68332","type":"LinearScale"},{"attributes":{},"id":"68342","type":"ResetTool"},{"attributes":{},"id":"68347","type":"UndoTool"},{"attributes":{},"id":"68343","type":"PanTool"},{"attributes":{},"id":"68326","type":"DataRange1d"},{"attributes":{"data_source":{"id":"68361"},"glyph":{"id":"68362"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68363"},"selection_glyph":null,"view":{"id":"68365"}},"id":"68364","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"68349","type":"HoverTool"},{"attributes":{},"id":"68348","type":"SaveTool"},{"attributes":{"axis":{"id":"68338"},"dimension":1,"ticker":null},"id":"68341","type":"Grid"},{"attributes":{},"id":"68339","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"68380"},"toolbar_location":"above"},"id":"68381","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68342"},{"id":"68343"},{"id":"68344"},{"id":"68345"},{"id":"68346"},{"id":"68347"},{"id":"68348"},{"id":"68349"}]},"id":"68352","type":"Toolbar"},{"attributes":{},"id":"68328","type":"DataRange1d"},{"attributes":{},"id":"68375","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"68350"}},"id":"68344","type":"BoxZoomTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"68371"},"ticker":{"id":"68335"}},"id":"68334","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"68352"}],"tools":[{"id":"68342"},{"id":"68343"},{"id":"68344"},{"id":"68345"},{"id":"68346"},{"id":"68347"},{"id":"68348"},{"id":"68349"}]},"id":"68380","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"68334"},"ticker":null},"id":"68337","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68351","type":"PolyAnnotation"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68366","type":"Span"},{"attributes":{},"id":"68371","type":"BasicTickFormatter"},{"attributes":{},"id":"68345","type":"WheelZoomTool"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"68373"},"ticker":{"id":"68339"}},"id":"68338","type":"LinearAxis"},{"attributes":{"below":[{"id":"68334"}],"center":[{"id":"68337"},{"id":"68341"}],"left":[{"id":"68338"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68364"},{"id":"68366"}],"title":{"id":"68367"},"toolbar":{"id":"68352"},"toolbar_location":null,"x_range":{"id":"68326"},"x_scale":{"id":"68330"},"y_range":{"id":"68328"},"y_scale":{"id":"68332"}},"id":"68325","subtype":"Figure","type":"Plot"},{"attributes":{"text":"sigma"},"id":"68367","type":"Title"}],"root_ids":["68382"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"efef7e2f-80cc-42a5-ae38-21fe6a6d9fde","root_ids":["68382"],"roots":{"68382":"efa5a024-e47a-4fa9-98b8-87f2eb1c2674"}}];
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