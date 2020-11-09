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
    
      
      
    
      var element = document.getElementById("3bb5916f-31f7-4a3c-9458-d4face12b2a4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3bb5916f-31f7-4a3c-9458-d4face12b2a4' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e445eda4-bebb-476d-aa48-4d91e3246419":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85789","type":"BoxAnnotation"},{"attributes":{},"id":"85787","type":"SaveTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85790","type":"PolyAnnotation"},{"attributes":{"text":"mu"},"id":"85862","type":"Title"},{"attributes":{},"id":"85774","type":"BasicTicker"},{"attributes":{"source":{"id":"85850"}},"id":"85854","type":"CDSView"},{"attributes":{"children":[[{"id":"85764"},0,0],[{"id":"85800"},0,1]]},"id":"85888","type":"GridBox"},{"attributes":{"children":[{"id":"85890"},{"id":"85888"}]},"id":"85891","type":"Column"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85868"},"ticker":{"id":"85778"}},"id":"85777","type":"LinearAxis"},{"attributes":{"callback":null},"id":"85788","type":"HoverTool"},{"attributes":{},"id":"85765","type":"DataRange1d"},{"attributes":{"axis":{"id":"85773"},"ticker":null},"id":"85776","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85837","type":"Circle"},{"attributes":{},"id":"85778","type":"BasicTicker"},{"attributes":{"below":[{"id":"85809"}],"center":[{"id":"85812"},{"id":"85816"}],"left":[{"id":"85813"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85853"},{"id":"85855"},{"id":"85856"},{"id":"85857"},{"id":"85860"}],"title":{"id":"85862"},"toolbar":{"id":"85827"},"toolbar_location":null,"x_range":{"id":"85801"},"x_scale":{"id":"85805"},"y_range":{"id":"85803"},"y_scale":{"id":"85807"}},"id":"85800","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"85836"},"glyph":{"id":"85837"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85838"},"selection_glyph":null,"view":{"id":"85840"}},"id":"85839","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"85773"}],"center":[{"id":"85776"},{"id":"85780"}],"left":[{"id":"85777"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85839"},{"id":"85841"},{"id":"85842"},{"id":"85843"},{"id":"85846"}],"title":{"id":"85848"},"toolbar":{"id":"85791"},"toolbar_location":null,"x_range":{"id":"85765"},"x_scale":{"id":"85769"},"y_range":{"id":"85767"},"y_scale":{"id":"85771"}},"id":"85764","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"85786","type":"UndoTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85878"},"ticker":{"id":"85810"}},"id":"85809","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"85803","type":"DataRange1d"},{"attributes":{},"id":"85878","type":"BasicTickFormatter"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85880"},"ticker":{"id":"85814"}},"id":"85813","type":"LinearAxis"},{"attributes":{},"id":"85805","type":"LinearScale"},{"attributes":{},"id":"85769","type":"LinearScale"},{"attributes":{},"id":"85807","type":"LinearScale"},{"attributes":{"callback":null},"id":"85824","type":"HoverTool"},{"attributes":{},"id":"85866","type":"BasicTickFormatter"},{"attributes":{},"id":"85810","type":"BasicTicker"},{"attributes":{"axis":{"id":"85809"},"ticker":null},"id":"85812","type":"Grid"},{"attributes":{},"id":"85880","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"85889"},"toolbar_location":"above"},"id":"85890","type":"ToolbarBox"},{"attributes":{"axis":{"id":"85813"},"dimension":1,"ticker":null},"id":"85816","type":"Grid"},{"attributes":{},"id":"85868","type":"BasicTickFormatter"},{"attributes":{},"id":"85814","type":"BasicTicker"},{"attributes":{},"id":"85881","type":"Selection"},{"attributes":{"text":"tau"},"id":"85848","type":"Title"},{"attributes":{"toolbars":[{"id":"85791"},{"id":"85827"}],"tools":[{"id":"85781"},{"id":"85782"},{"id":"85783"},{"id":"85784"},{"id":"85785"},{"id":"85786"},{"id":"85787"},{"id":"85788"},{"id":"85817"},{"id":"85818"},{"id":"85819"},{"id":"85820"},{"id":"85821"},{"id":"85822"},{"id":"85823"},{"id":"85824"}]},"id":"85889","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85838","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85781"},{"id":"85782"},{"id":"85783"},{"id":"85784"},{"id":"85785"},{"id":"85786"},{"id":"85787"},{"id":"85788"}]},"id":"85791","type":"Toolbar"},{"attributes":{},"id":"85882","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"85825"}},"id":"85819","type":"BoxZoomTool"},{"attributes":{},"id":"85818","type":"PanTool"},{"attributes":{},"id":"85817","type":"ResetTool"},{"attributes":{},"id":"85869","type":"Selection"},{"attributes":{},"id":"85782","type":"PanTool"},{"attributes":{},"id":"85823","type":"SaveTool"},{"attributes":{},"id":"85820","type":"WheelZoomTool"},{"attributes":{},"id":"85870","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"85826"}},"id":"85821","type":"LassoSelectTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85866"},"ticker":{"id":"85774"}},"id":"85773","type":"LinearAxis"},{"attributes":{},"id":"85822","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85817"},{"id":"85818"},{"id":"85819"},{"id":"85820"},{"id":"85821"},{"id":"85822"},{"id":"85823"},{"id":"85824"}]},"id":"85827","type":"Toolbar"},{"attributes":{},"id":"85781","type":"ResetTool"},{"attributes":{},"id":"85883","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85851","type":"Circle"},{"attributes":{"overlay":{"id":"85789"}},"id":"85783","type":"BoxZoomTool"},{"attributes":{},"id":"85884","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"85845"},"glyph":{"id":"85844"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85847"}},"id":"85846","type":"GlyphRenderer"},{"attributes":{"source":{"id":"85845"}},"id":"85847","type":"CDSView"},{"attributes":{},"id":"85784","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"85841","type":"Span"},{"attributes":{},"id":"85871","type":"Selection"},{"attributes":{},"id":"85771","type":"LinearScale"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"85855","type":"Span"},{"attributes":{"overlay":{"id":"85790"}},"id":"85785","type":"LassoSelectTool"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"85842","type":"Span"},{"attributes":{},"id":"85872","type":"UnionRenderers"},{"attributes":{},"id":"85801","type":"DataRange1d"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85843","type":"Span"},{"attributes":{"axis":{"id":"85777"},"dimension":1,"ticker":null},"id":"85780","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85869"},"selection_policy":{"id":"85870"}},"id":"85836","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85844","type":"Dash"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85871"},"selection_policy":{"id":"85872"}},"id":"85845","type":"ColumnDataSource"},{"attributes":{"source":{"id":"85859"}},"id":"85861","type":"CDSView"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85883"},"selection_policy":{"id":"85884"}},"id":"85859","type":"ColumnDataSource"},{"attributes":{"source":{"id":"85836"}},"id":"85840","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85858","type":"Dash"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85825","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"85856","type":"Span"},{"attributes":{"data_source":{"id":"85850"},"glyph":{"id":"85851"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85852"},"selection_glyph":null,"view":{"id":"85854"}},"id":"85853","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"85859"},"glyph":{"id":"85858"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85861"}},"id":"85860","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85881"},"selection_policy":{"id":"85882"}},"id":"85850","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85857","type":"Span"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85826","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85852","type":"Circle"},{"attributes":{"end":1,"start":-0.05},"id":"85767","type":"DataRange1d"}],"root_ids":["85891"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"e445eda4-bebb-476d-aa48-4d91e3246419","root_ids":["85891"],"roots":{"85891":"3bb5916f-31f7-4a3c-9458-d4face12b2a4"}}];
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