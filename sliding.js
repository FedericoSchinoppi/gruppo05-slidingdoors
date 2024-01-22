
console.log("Hello World!");



//rende la barra di scorrimento una linea che segue la poizione dell'utente nella pagina//


let progress = document.getElementById('scrollbar');
      let totalHeight = document.body.scrollHeight - window.innerHeight;
      window.onscroll = function(){
        let progressHeight = (window.pageYOffset / totalHeight) * 40 - 19;
        progress.style.height = progressHeight + '%';
      }


      // permette di rendere visibili i vari elementi solamente superata l'introduzione della pagina //
    
      myID = document.getElementById("myID");
      var myScrollFunc = function () {
       var y = window.scrollY;
        if (y >= 1350) {
            myID.className = "legenda show"
        } else {
            myID.className = "legenda hide"
        }
      };

      window.addEventListener("scroll", myScrollFunc);

      myID2 = document.getElementById("myID2");
      var myScrollFunc = function () {
      var y = window.scrollY;
        if (y >= 1350) {
            myID2.className = "legenda show"
        } else {
            myID2.className = "legenda hide"
        }
      };

      window.addEventListener("scroll", myScrollFunc);


      myID3 = document.getElementById("myID3");
      var myScrollFunc = function () {
      var y = window.scrollY;
        if (y >= 900) {
            myID3.className = "legenda show"
        } else {
            myID3.className = "legenda hide"
        }
      };

      window.addEventListener("scroll", myScrollFunc);

      myID4 = document.getElementById("myID4");
      var myScrollFunc = function () {
      var y = window.scrollY;
        if (y >= 1350) {
            myID4.className = "legenda show"
        } else {
            myID4.className = "legenda hide"
        }
      };

      window.addEventListener("scroll", myScrollFunc);






      // fa apparire e scomparire i dialoghi //

      document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("ascensored");
        var appearThreshold = 1080; // Numero di pixel in cui l'elemento appare
        var disappearThreshold = 1120; // Numero di pixel in cui l'elemento scompare
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("licenziatad");
        var appearThreshold = 990; 
        var disappearThreshold = 1030; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("tradimentod");
        var appearThreshold = 1430; 
        var disappearThreshold = 1470; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("incontrosinistrojamesmetrod");
        var appearThreshold = 1320; 
        var disappearThreshold = 1360; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("sospettocomportamentod");
        var appearThreshold = 1600; 
        var disappearThreshold = 1640; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("cacciatod");
        var appearThreshold = 1640; 
        var disappearThreshold = 1680; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("pubd");
        var appearThreshold = 1740;
        var disappearThreshold = 1780; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("passaggiod");
        var appearThreshold = 1980; 
        var disappearThreshold = 2020; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("docciad");
        var appearThreshold = 2150; 
        var disappearThreshold = 2190; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("parrucchiered");
        var appearThreshold = 2260; 
        var disappearThreshold = 2300; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    
    
    
    
    
    
    
    
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("sospettobrandyd");
        var appearThreshold = 2310; 
        var disappearThreshold = 2350; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("propostad");
        var appearThreshold = 2376; 
        var disappearThreshold = 2406;
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("incontrodestrad");
        var appearThreshold = 2403; 
        var disappearThreshold = 2426; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("bibliod");
        var appearThreshold = 2480; 
        var disappearThreshold = 2508; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("umiliazioned");
        var appearThreshold = 2730; 
        var disappearThreshold = 2766; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("uscitad");
        var appearThreshold = 2732; 
        var disappearThreshold = 2769; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("discussioned");
        var appearThreshold = 2810; 
        var disappearThreshold = 2845; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("businessd");
        var appearThreshold = 2900; 
        var disappearThreshold = 2929; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("tentativodestrad");
        var appearThreshold = 2980; 
        var disappearThreshold = 3010; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("regatad");
        var appearThreshold = 3060; 
        var disappearThreshold = 3097; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    
    
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("baciod");
        var appearThreshold = 3130; 
        var disappearThreshold = 3170; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    
      document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("dorsetd");
        var appearThreshold = 3195;
        var disappearThreshold = 3235; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    
      document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("sviened");
        var appearThreshold = 3400; 
        var disappearThreshold = 3440; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    
      document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("confrontobaciojerryd");
        var appearThreshold = 3550; 
        var disappearThreshold = 3580; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    
      document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("tentativod");
        var appearThreshold = 3655; 
        var disappearThreshold = 3695; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    
      document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("confrontoambiguojamesd");
        var appearThreshold = 3755; 
        var disappearThreshold = 3795; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    
      document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("sospettobrandyvomitared");
        var appearThreshold = 3820; 
        var disappearThreshold = 3865; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    
      document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("incontrosinistro");
        var appearThreshold = 3910; 
        var disappearThreshold = 3950; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    
      document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("sospettomazzodirosed");
        var appearThreshold = 3980; 
        var disappearThreshold = 4020; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    
      document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("colloquiod");
        var appearThreshold = 4060; 
        var disappearThreshold = 4100; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    
    
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("gravidanzasinistrad");
        var appearThreshold = 4030; 
        var disappearThreshold = 4110; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("lydiad");
        var appearThreshold = 4140; 
        var disappearThreshold = 4190; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("gravidanzadestrad");
        var appearThreshold = 4205; 
        var disappearThreshold = 4270; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("ponted");
        var appearThreshold = 4300; 
        var disappearThreshold = 4380; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("incidented");
        var appearThreshold = 4400; 
        var disappearThreshold = 4440; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    
    
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("morted");
        var appearThreshold = 4730; 
        var disappearThreshold = 4770; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("separazioned");
        var appearThreshold = 4730; 
        var disappearThreshold = 4770; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });
    
    
    document.addEventListener("DOMContentLoaded", function () {
        var fixedElement = document.getElementById("ascensorefinaled");
        var appearThreshold = 4800; 
        var disappearThreshold = 4830; 
    
        window.addEventListener("scroll", function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= appearThreshold && scrollPosition <= disappearThreshold) {
                fixedElement.classList.add("visible");
                fixedElement.classList.remove("hidden");
            } else {
                fixedElement.classList.add("hidden");
                fixedElement.classList.remove("visible");
            }
        });
    });