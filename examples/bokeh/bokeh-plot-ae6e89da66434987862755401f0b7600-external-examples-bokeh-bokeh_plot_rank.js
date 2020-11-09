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
    
      
      
    
      var element = document.getElementById("3c702518-5a49-44bb-aa25-1383ac1b658d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3c702518-5a49-44bb-aa25-1383ac1b658d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8464dc61-084b-4a21-a0b1-da52fcb36dc5":{"roots":{"references":[{"attributes":{},"id":"90741","type":"Selection"},{"attributes":{},"id":"90743","type":"Selection"},{"attributes":{},"id":"90742","type":"UnionRenderers"},{"attributes":{"axis":{"id":"90654"},"ticker":null},"id":"90657","type":"Grid"},{"attributes":{"source":{"id":"90721"}},"id":"90725","type":"CDSView"},{"attributes":{},"id":"90650","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90760"},"selection_policy":{"id":"90761"}},"id":"90721","type":"ColumnDataSource"},{"attributes":{},"id":"90618","type":"LinearScale"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90722","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90739"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90621"}},"id":"90620","type":"LinearAxis"},{"attributes":{"data_source":{"id":"90721"},"glyph":{"id":"90722"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90723"},"selection_glyph":null,"view":{"id":"90725"}},"id":"90724","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90762"},"selection_policy":{"id":"90763"}},"id":"90727","type":"ColumnDataSource"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90755"},"ticker":{"id":"90733"}},"id":"90658","type":"LinearAxis"},{"attributes":{},"id":"90616","type":"LinearScale"},{"attributes":{"ticks":[0,1,2,3]},"id":"90705","type":"FixedTicker"},{"attributes":{},"id":"90655","type":"BasicTicker"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"90726","type":"Span"},{"attributes":{},"id":"90739","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"90669","type":"HoverTool"},{"attributes":{},"id":"90763","type":"UnionRenderers"},{"attributes":{},"id":"90748","type":"UnionRenderers"},{"attributes":{},"id":"90762","type":"Selection"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90723","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90683","type":"VBar"},{"attributes":{},"id":"90612","type":"DataRange1d"},{"attributes":{"data_source":{"id":"90709"},"glyph":{"id":"90710"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90711"},"selection_glyph":null,"view":{"id":"90713"}},"id":"90712","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"90699"},"glyph":{"id":"90700"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90701"},"selection_glyph":null,"view":{"id":"90703"}},"id":"90702","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90758"},"selection_policy":{"id":"90759"}},"id":"90715","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"90704","type":"Span"},{"attributes":{},"id":"90754","type":"BasicTickFormatter"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"90714","type":"Span"},{"attributes":{"overlay":{"id":"90670"}},"id":"90664","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"90715"},"glyph":{"id":"90716"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90717"},"selection_glyph":null,"view":{"id":"90719"}},"id":"90718","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90701","type":"VBar"},{"attributes":{"children":[{"id":"90769"},{"id":"90767"}]},"id":"90770","type":"Column"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"90686","type":"Span"},{"attributes":{"text":"tau"},"id":"90707","type":"Title"},{"attributes":{"ticks":[0,1,2,3]},"id":"90733","type":"FixedTicker"},{"attributes":{},"id":"90614","type":"DataRange1d"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90747"},"selection_policy":{"id":"90748"}},"id":"90699","type":"ColumnDataSource"},{"attributes":{"source":{"id":"90715"}},"id":"90719","type":"CDSView"},{"attributes":{},"id":"90757","type":"UnionRenderers"},{"attributes":{"source":{"id":"90693"}},"id":"90697","type":"CDSView"},{"attributes":{"below":[{"id":"90620"}],"center":[{"id":"90623"},{"id":"90627"},{"id":"90686"},{"id":"90692"},{"id":"90698"},{"id":"90704"}],"left":[{"id":"90624"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90684"},{"id":"90690"},{"id":"90696"},{"id":"90702"}],"title":{"id":"90707"},"toolbar":{"id":"90638"},"toolbar_location":null,"x_range":{"id":"90612"},"x_scale":{"id":"90616"},"y_range":{"id":"90614"},"y_scale":{"id":"90618"}},"id":"90611","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90745"},"selection_policy":{"id":"90746"}},"id":"90693","type":"ColumnDataSource"},{"attributes":{},"id":"90756","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90636","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90694","type":"VBar"},{"attributes":{"data_source":{"id":"90693"},"glyph":{"id":"90694"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90695"},"selection_glyph":null,"view":{"id":"90697"}},"id":"90696","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"90698","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90695","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90688","type":"VBar"},{"attributes":{"children":[[{"id":"90611"},0,0],[{"id":"90647"},0,1]]},"id":"90767","type":"GridBox"},{"attributes":{"source":{"id":"90687"}},"id":"90691","type":"CDSView"},{"attributes":{"data_source":{"id":"90681"},"glyph":{"id":"90682"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90683"},"selection_glyph":null,"view":{"id":"90685"}},"id":"90684","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90662"},{"id":"90663"},{"id":"90664"},{"id":"90665"},{"id":"90666"},{"id":"90667"},{"id":"90668"},{"id":"90669"}]},"id":"90672","type":"Toolbar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90743"},"selection_policy":{"id":"90744"}},"id":"90687","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"90768"},"toolbar_location":"above"},"id":"90769","type":"ToolbarBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90671","type":"PolyAnnotation"},{"attributes":{"source":{"id":"90681"}},"id":"90685","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90689","type":"VBar"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"90692","type":"Span"},{"attributes":{"source":{"id":"90699"}},"id":"90703","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90756"},"selection_policy":{"id":"90757"}},"id":"90709","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90700","type":"VBar"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"90720","type":"Span"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90637","type":"PolyAnnotation"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90740"},"ticker":{"id":"90705"}},"id":"90624","type":"LinearAxis"},{"attributes":{"below":[{"id":"90654"}],"center":[{"id":"90657"},{"id":"90661"},{"id":"90714"},{"id":"90720"},{"id":"90726"},{"id":"90732"}],"left":[{"id":"90658"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90712"},{"id":"90718"},{"id":"90724"},{"id":"90730"}],"title":{"id":"90735"},"toolbar":{"id":"90672"},"toolbar_location":null,"x_range":{"id":"90612"},"x_scale":{"id":"90650"},"y_range":{"id":"90614"},"y_scale":{"id":"90652"}},"id":"90647","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90754"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90655"}},"id":"90654","type":"LinearAxis"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90717","type":"VBar"},{"attributes":{},"id":"90633","type":"UndoTool"},{"attributes":{},"id":"90663","type":"PanTool"},{"attributes":{},"id":"90740","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90711","type":"VBar"},{"attributes":{},"id":"90760","type":"Selection"},{"attributes":{},"id":"90621","type":"BasicTicker"},{"attributes":{"overlay":{"id":"90637"}},"id":"90632","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"90620"},"ticker":null},"id":"90623","type":"Grid"},{"attributes":{"axis":{"id":"90624"},"dimension":1,"ticker":null},"id":"90627","type":"Grid"},{"attributes":{"axis":{"id":"90658"},"dimension":1,"ticker":null},"id":"90661","type":"Grid"},{"attributes":{},"id":"90755","type":"BasicTickFormatter"},{"attributes":{},"id":"90761","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"90638"},{"id":"90672"}],"tools":[{"id":"90628"},{"id":"90629"},{"id":"90630"},{"id":"90631"},{"id":"90632"},{"id":"90633"},{"id":"90634"},{"id":"90635"},{"id":"90662"},{"id":"90663"},{"id":"90664"},{"id":"90665"},{"id":"90666"},{"id":"90667"},{"id":"90668"},{"id":"90669"}]},"id":"90768","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"90636"}},"id":"90630","type":"BoxZoomTool"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"90732","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90729","type":"VBar"},{"attributes":{"source":{"id":"90709"}},"id":"90713","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90716","type":"VBar"},{"attributes":{},"id":"90628","type":"ResetTool"},{"attributes":{"data_source":{"id":"90727"},"glyph":{"id":"90728"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90729"},"selection_glyph":null,"view":{"id":"90731"}},"id":"90730","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"90687"},"glyph":{"id":"90688"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90689"},"selection_glyph":null,"view":{"id":"90691"}},"id":"90690","type":"GlyphRenderer"},{"attributes":{},"id":"90634","type":"SaveTool"},{"attributes":{"text":"mu"},"id":"90735","type":"Title"},{"attributes":{},"id":"90759","type":"UnionRenderers"},{"attributes":{},"id":"90629","type":"PanTool"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90728","type":"VBar"},{"attributes":{},"id":"90631","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90670","type":"BoxAnnotation"},{"attributes":{"source":{"id":"90727"}},"id":"90731","type":"CDSView"},{"attributes":{"overlay":{"id":"90671"}},"id":"90666","type":"LassoSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90628"},{"id":"90629"},{"id":"90630"},{"id":"90631"},{"id":"90632"},{"id":"90633"},{"id":"90634"},{"id":"90635"}]},"id":"90638","type":"Toolbar"},{"attributes":{},"id":"90758","type":"Selection"},{"attributes":{"callback":null},"id":"90635","type":"HoverTool"},{"attributes":{},"id":"90667","type":"UndoTool"},{"attributes":{},"id":"90745","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90741"},"selection_policy":{"id":"90742"}},"id":"90681","type":"ColumnDataSource"},{"attributes":{},"id":"90744","type":"UnionRenderers"},{"attributes":{},"id":"90665","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90710","type":"VBar"},{"attributes":{},"id":"90668","type":"SaveTool"},{"attributes":{},"id":"90662","type":"ResetTool"},{"attributes":{},"id":"90747","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90682","type":"VBar"},{"attributes":{},"id":"90652","type":"LinearScale"},{"attributes":{},"id":"90746","type":"UnionRenderers"}],"root_ids":["90770"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"8464dc61-084b-4a21-a0b1-da52fcb36dc5","root_ids":["90770"],"roots":{"90770":"3c702518-5a49-44bb-aa25-1383ac1b658d"}}];
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