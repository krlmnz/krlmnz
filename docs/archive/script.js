(function() {
  			document.documentElement.className += " wf-inactive"; 

        function cssPropertyValueSupported(prop, value) {
          var d = document.createElement('div');
          d.style[prop] = value;
          return d.style[prop] === value;
        }
        
        var vfSupport = true;
        var vfSupport = cssPropertyValueSupported('font-optical-sizing', 'auto');
        // should return true if the browser supports variable fonts
				console.log('vfSupport: '+vfSupport);

  	
  			// Optimization for Repeat Views
  			if( sessionStorage.foutFontsLoaded ) {
  				document.documentElement.classList.remove("wf-inactive");
  				document.documentElement.classList.add("wf-active");
  				return;
  			}
        
        if( vfSupport == true ) {
					var fontA = new FontFaceObserver('Source Serif Pro VF', {
							weight: 389,
							style: 'normal'
						});
					var fontB = new FontFaceObserver('Source Serif Pro VF', {
							weight: 389,
							style: 'italic'
						});
			
					Promise.all([fontA.load(), fontB.load()]).then(function () {
            document.documentElement.classList.remove("wf-inactive");
            document.documentElement.classList.add("wf-active");
          
    				// Optimization for Repeat Views
    				sessionStorage.foutFontsLoaded = true;
  				});
        } else {
					var fontA = new FontFaceObserver('Source Serif Pro', {
							weight: 300,
							style: 'normal'
						});
					var fontB = new FontFaceObserver('Source Serif Pro', {
							weight: 400,
							style: 'normal'
						});
					var fontC = new FontFaceObserver('Source Serif Pro', {
							weight: 600,
							style: 'normal'
						});
					var fontD = new FontFaceObserver('Source Serif Pro', {
							weight: 400,
							style: 'italic'
						});
					var fontE = new FontFaceObserver('Source Serif Pro', {
							weight: 600,
							style: 'italic'
						});

					Promise.all([fontA.load(), fontB.load(), fontC.load(), fontD.load(), fontE.load()]).then(function () {
            document.documentElement.classList.remove("wf-inactive");
            document.documentElement.classList.add("wf-active");
          
    				// Optimization for Repeat Views
    				sessionStorage.foutFontsLoaded = true;
    			});
        }
  		})();