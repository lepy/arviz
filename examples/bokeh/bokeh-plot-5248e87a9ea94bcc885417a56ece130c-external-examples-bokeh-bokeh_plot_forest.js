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
    
      
      
    
      var element = document.getElementById("c406c0e6-c9ab-44c6-bd39-e97ad838ad4a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c406c0e6-c9ab-44c6-bd39-e97ad838ad4a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"daf98131-4296-42d0-b647-8daceba59836":{"roots":{"references":[{"attributes":{"source":{"id":"68550"}},"id":"68554","type":"CDSView"},{"attributes":{},"id":"68591","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68551","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68556","type":"Circle"},{"attributes":{},"id":"68589","type":"Selection"},{"attributes":{"data_source":{"id":"68555"},"glyph":{"id":"68556"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68557"},"selection_glyph":null,"view":{"id":"68559"}},"id":"68558","type":"GlyphRenderer"},{"attributes":{},"id":"68626","type":"UnionRenderers"},{"attributes":{},"id":"68630","type":"UnionRenderers"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68561","type":"Line"},{"attributes":{"source":{"id":"68560"}},"id":"68564","type":"CDSView"},{"attributes":{},"id":"68597","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68571","type":"Circle"},{"attributes":{},"id":"68596","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68565"},"glyph":{"id":"68566"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68567"},"selection_glyph":null,"view":{"id":"68569"}},"id":"68568","type":"GlyphRenderer"},{"attributes":{},"id":"68586","type":"UnionRenderers"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68566","type":"Line"},{"attributes":{},"id":"68594","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68557","type":"Circle"},{"attributes":{"source":{"id":"68565"}},"id":"68569","type":"CDSView"},{"attributes":{},"id":"68631","type":"Selection"},{"attributes":{},"id":"68598","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68570"},"glyph":{"id":"68571"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68572"},"selection_glyph":null,"view":{"id":"68574"}},"id":"68573","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68562","type":"Line"},{"attributes":{},"id":"68595","type":"Selection"},{"attributes":{"source":{"id":"68555"}},"id":"68559","type":"CDSView"},{"attributes":{},"id":"68590","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68572","type":"Circle"},{"attributes":{"toolbar":{"id":"68637"},"toolbar_location":"above"},"id":"68638","type":"ToolbarBox"},{"attributes":{},"id":"68625","type":"Selection"},{"attributes":{},"id":"68424","type":"LinearScale"},{"attributes":{},"id":"68599","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"68625"},"selection_policy":{"id":"68626"}},"id":"68555","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68470"},"glyph":{"id":"68471"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68472"},"selection_glyph":null,"view":{"id":"68474"}},"id":"68473","type":"GlyphRenderer"},{"attributes":{},"id":"68593","type":"Selection"},{"attributes":{"children":[{"id":"68638"},{"id":"68636"}]},"id":"68639","type":"Column"},{"attributes":{},"id":"68585","type":"Selection"},{"attributes":{"source":{"id":"68570"}},"id":"68574","type":"CDSView"},{"attributes":{},"id":"68584","type":"BasicTickFormatter"},{"attributes":{},"id":"68592","type":"UnionRenderers"},{"attributes":{},"id":"68628","type":"UnionRenderers"},{"attributes":{},"id":"68583","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"68629"},"selection_policy":{"id":"68630"}},"id":"68565","type":"ColumnDataSource"},{"attributes":{},"id":"68629","type":"Selection"},{"attributes":{"children":[[{"id":"68419"},0,0]]},"id":"68636","type":"GridBox"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68552","type":"Line"},{"attributes":{},"id":"68587","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"68631"},"selection_policy":{"id":"68632"}},"id":"68570","type":"ColumnDataSource"},{"attributes":{},"id":"68632","type":"UnionRenderers"},{"attributes":{},"id":"68627","type":"Selection"},{"attributes":{"toolbars":[{"id":"68446"}],"tools":[{"id":"68436"},{"id":"68437"},{"id":"68438"},{"id":"68439"},{"id":"68440"},{"id":"68441"},{"id":"68442"},{"id":"68443"}]},"id":"68637","type":"ProxyToolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68567","type":"Line"},{"attributes":{},"id":"68588","type":"UnionRenderers"},{"attributes":{},"id":"68600","type":"UnionRenderers"},{"attributes":{"source":{"id":"68480"}},"id":"68484","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68491","type":"Line"},{"attributes":{"data_source":{"id":"68475"},"glyph":{"id":"68476"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68477"},"selection_glyph":null,"view":{"id":"68479"}},"id":"68478","type":"GlyphRenderer"},{"attributes":{},"id":"68601","type":"Selection"},{"attributes":{},"id":"68624","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"68593"},"selection_policy":{"id":"68594"}},"id":"68475","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68466","type":"Circle"},{"attributes":{"source":{"id":"68515"}},"id":"68519","type":"CDSView"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"68617"},"selection_policy":{"id":"68618"}},"id":"68535","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"68609"},"selection_policy":{"id":"68610"}},"id":"68515","type":"ColumnDataSource"},{"attributes":{},"id":"68602","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68460"},"glyph":{"id":"68461"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68462"},"selection_glyph":null,"view":{"id":"68464"}},"id":"68463","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"68445"}},"id":"68440","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68526","type":"Circle"},{"attributes":{"source":{"id":"68535"}},"id":"68539","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"68595"},"selection_policy":{"id":"68596"}},"id":"68480","type":"ColumnDataSource"},{"attributes":{},"id":"68607","type":"Selection"},{"attributes":{"data_source":{"id":"68530"},"glyph":{"id":"68531"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68532"},"selection_glyph":null,"view":{"id":"68534"}},"id":"68533","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"68615"},"selection_policy":{"id":"68616"}},"id":"68530","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68542","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68461","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68537","type":"Line"},{"attributes":{},"id":"68612","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"68443","type":"HoverTool"},{"attributes":{"data":{},"selected":{"id":"68607"},"selection_policy":{"id":"68608"}},"id":"68510","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68495"}},"id":"68499","type":"CDSView"},{"attributes":{},"id":"68615","type":"Selection"},{"attributes":{"axis":{"id":"68428"},"ticker":null},"id":"68431","type":"Grid"},{"attributes":{"data":{"x":[2.2921199846409115,6.479187946875487],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68605"},"selection_policy":{"id":"68606"}},"id":"68505","type":"ColumnDataSource"},{"attributes":{},"id":"68609","type":"Selection"},{"attributes":{"source":{"id":"68455"}},"id":"68459","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68521","type":"Line"},{"attributes":{"data_source":{"id":"68455"},"glyph":{"id":"68456"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68457"},"selection_glyph":null,"view":{"id":"68459"}},"id":"68458","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68525"}},"id":"68529","type":"CDSView"},{"attributes":{},"id":"68608","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68481","type":"Circle"},{"attributes":{},"id":"68620","type":"UnionRenderers"},{"attributes":{"source":{"id":"68540"}},"id":"68544","type":"CDSView"},{"attributes":{"data_source":{"id":"68500"},"glyph":{"id":"68501"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68502"},"selection_glyph":null,"view":{"id":"68504"}},"id":"68503","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68531","type":"Line"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68445","type":"PolyAnnotation"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68501","type":"Line"},{"attributes":{},"id":"68621","type":"Selection"},{"attributes":{"data_source":{"id":"68545"},"glyph":{"id":"68546"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68547"},"selection_glyph":null,"view":{"id":"68549"}},"id":"68548","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68496","type":"Circle"},{"attributes":{},"id":"68605","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68517","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68502","type":"Line"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"68621"},"selection_policy":{"id":"68622"}},"id":"68545","type":"ColumnDataSource"},{"attributes":{},"id":"68441","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68436"},{"id":"68437"},{"id":"68438"},{"id":"68439"},{"id":"68440"},{"id":"68441"},{"id":"68442"},{"id":"68443"}]},"id":"68446","type":"Toolbar"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"68585"},"selection_policy":{"id":"68586"}},"id":"68455","type":"ColumnDataSource"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"68578","type":"DataRange1d"},{"attributes":{"data":{},"selected":{"id":"68589"},"selection_policy":{"id":"68590"}},"id":"68465","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68487","type":"Line"},{"attributes":{},"id":"68442","type":"SaveTool"},{"attributes":{"source":{"id":"68505"}},"id":"68509","type":"CDSView"},{"attributes":{"source":{"id":"68520"}},"id":"68524","type":"CDSView"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"68623"},"selection_policy":{"id":"68624"}},"id":"68550","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68535"},"glyph":{"id":"68536"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68537"},"selection_glyph":null,"view":{"id":"68539"}},"id":"68538","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68465"}},"id":"68469","type":"CDSView"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68603"},"selection_policy":{"id":"68604"}},"id":"68500","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68506","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68532","type":"Line"},{"attributes":{},"id":"68604","type":"UnionRenderers"},{"attributes":{},"id":"68426","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68444","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68497","type":"Circle"},{"attributes":{"source":{"id":"68490"}},"id":"68494","type":"CDSView"},{"attributes":{"source":{"id":"68530"}},"id":"68534","type":"CDSView"},{"attributes":{},"id":"68611","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68472","type":"Line"},{"attributes":{"overlay":{"id":"68444"}},"id":"68438","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"68583"},"ticker":{"id":"68429"}},"id":"68428","type":"LinearAxis"},{"attributes":{"data_source":{"id":"68560"},"glyph":{"id":"68561"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68562"},"selection_glyph":null,"view":{"id":"68564"}},"id":"68563","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68500"}},"id":"68504","type":"CDSView"},{"attributes":{},"id":"68618","type":"UnionRenderers"},{"attributes":{"bounds":"auto","min_interval":1},"id":"68577","type":"DataRange1d"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773684],"y":[0,0]},"selected":{"id":"68587"},"selection_policy":{"id":"68588"}},"id":"68460","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"68613"},"selection_policy":{"id":"68614"}},"id":"68525","type":"ColumnDataSource"},{"attributes":{},"id":"68617","type":"Selection"},{"attributes":{"source":{"id":"68470"}},"id":"68474","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68536","type":"Line"},{"attributes":{"source":{"id":"68485"}},"id":"68489","type":"CDSView"},{"attributes":{"data_source":{"id":"68485"},"glyph":{"id":"68486"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68487"},"selection_glyph":null,"view":{"id":"68489"}},"id":"68488","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68507","type":"Line"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"68611"},"selection_policy":{"id":"68612"}},"id":"68520","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68467","type":"Circle"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"68597"},"selection_policy":{"id":"68598"}},"id":"68485","type":"ColumnDataSource"},{"attributes":{},"id":"68614","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68480"},"glyph":{"id":"68481"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68482"},"selection_glyph":null,"view":{"id":"68484"}},"id":"68483","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68540"},"glyph":{"id":"68541"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68542"},"selection_glyph":null,"view":{"id":"68544"}},"id":"68543","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68486","type":"Line"},{"attributes":{"data_source":{"id":"68550"},"glyph":{"id":"68551"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68552"},"selection_glyph":null,"view":{"id":"68554"}},"id":"68553","type":"GlyphRenderer"},{"attributes":{"text":"94.0% HDI"},"id":"68575","type":"Title"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68456","type":"Line"},{"attributes":{},"id":"68622","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68457","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68516","type":"Line"},{"attributes":{},"id":"68613","type":"Selection"},{"attributes":{},"id":"68619","type":"Selection"},{"attributes":{"source":{"id":"68475"}},"id":"68479","type":"CDSView"},{"attributes":{"data_source":{"id":"68490"},"glyph":{"id":"68491"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68492"},"selection_glyph":null,"view":{"id":"68494"}},"id":"68493","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"68591"},"selection_policy":{"id":"68592"}},"id":"68470","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68505"},"glyph":{"id":"68506"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68507"},"selection_glyph":null,"view":{"id":"68509"}},"id":"68508","type":"GlyphRenderer"},{"attributes":{},"id":"68429","type":"BasicTicker"},{"attributes":{"source":{"id":"68460"}},"id":"68464","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68476","type":"Line"},{"attributes":{},"id":"68606","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68522","type":"Line"},{"attributes":{"source":{"id":"68510"}},"id":"68514","type":"CDSView"},{"attributes":{},"id":"68616","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68510"},"glyph":{"id":"68511"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68512"},"selection_glyph":null,"view":{"id":"68514"}},"id":"68513","type":"GlyphRenderer"},{"attributes":{},"id":"68439","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"68465"},"glyph":{"id":"68466"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68467"},"selection_glyph":null,"view":{"id":"68469"}},"id":"68468","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68511","type":"Circle"},{"attributes":{"data_source":{"id":"68515"},"glyph":{"id":"68516"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68517"},"selection_glyph":null,"view":{"id":"68519"}},"id":"68518","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68541","type":"Circle"},{"attributes":{"source":{"id":"68545"}},"id":"68549","type":"CDSView"},{"attributes":{"axis":{"id":"68432"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"68435","type":"Grid"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"68579","type":"FixedTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68477","type":"Line"},{"attributes":{"formatter":{"id":"68584"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"68579"}},"id":"68432","type":"LinearAxis"},{"attributes":{},"id":"68623","type":"Selection"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"68627"},"selection_policy":{"id":"68628"}},"id":"68560","type":"ColumnDataSource"},{"attributes":{},"id":"68603","type":"Selection"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"68599"},"selection_policy":{"id":"68600"}},"id":"68490","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68547","type":"Line"},{"attributes":{"data":{},"selected":{"id":"68601"},"selection_policy":{"id":"68602"}},"id":"68495","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68527","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68492","type":"Line"},{"attributes":{},"id":"68610","type":"UnionRenderers"},{"attributes":{"below":[{"id":"68428"}],"center":[{"id":"68431"},{"id":"68435"}],"left":[{"id":"68432"}],"outline_line_color":null,"output_backend":"webgl","plot_height":435,"plot_width":360,"renderers":[{"id":"68458"},{"id":"68463"},{"id":"68468"},{"id":"68473"},{"id":"68478"},{"id":"68483"},{"id":"68488"},{"id":"68493"},{"id":"68498"},{"id":"68503"},{"id":"68508"},{"id":"68513"},{"id":"68518"},{"id":"68523"},{"id":"68528"},{"id":"68533"},{"id":"68538"},{"id":"68543"},{"id":"68548"},{"id":"68553"},{"id":"68558"},{"id":"68563"},{"id":"68568"},{"id":"68573"}],"title":{"id":"68575"},"toolbar":{"id":"68446"},"toolbar_location":null,"x_range":{"id":"68577"},"x_scale":{"id":"68424"},"y_range":{"id":"68578"},"y_scale":{"id":"68426"}},"id":"68419","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68462","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68471","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68546","type":"Line"},{"attributes":{"data_source":{"id":"68495"},"glyph":{"id":"68496"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68497"},"selection_glyph":null,"view":{"id":"68499"}},"id":"68498","type":"GlyphRenderer"},{"attributes":{},"id":"68437","type":"PanTool"},{"attributes":{"data_source":{"id":"68520"},"glyph":{"id":"68521"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68522"},"selection_glyph":null,"view":{"id":"68524"}},"id":"68523","type":"GlyphRenderer"},{"attributes":{},"id":"68436","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68482","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"68619"},"selection_policy":{"id":"68620"}},"id":"68540","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68512","type":"Circle"},{"attributes":{"data_source":{"id":"68525"},"glyph":{"id":"68526"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68527"},"selection_glyph":null,"view":{"id":"68529"}},"id":"68528","type":"GlyphRenderer"}],"root_ids":["68639"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"daf98131-4296-42d0-b647-8daceba59836","root_ids":["68639"],"roots":{"68639":"c406c0e6-c9ab-44c6-bd39-e97ad838ad4a"}}];
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