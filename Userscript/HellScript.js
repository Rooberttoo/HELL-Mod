//----------------------------------------------------------------//
//--------------------THIS MOD IS MADE NeXi2K---------------------//
//----------------------------------------------------------------//


  //Fixes the Shadows on the maps
  pc.app.on("Map:Loaded", updateLightsPls());

  function updateLightsPls() {
    if (pc.settings.disableShadows == 0) {
      pc.app.scripts.list()[4].prototype.updateLight = function () {
        var t = pc.app.root.findByName("Light");
        t && t.light;
      };

      pc.app.scripts.list()[4].prototype.onMapLoaded = function () {
        clearTimeout(this.timer),
          (this.timer = setTimeout(
            function (t) {
              t.updateLight();
            },
            3000,
            this
          ));
        var t = pc.app.root.findByTag("Rain"),
          e = pc.app.root.findByName("RainDrops");
        t.length > 0
          ? ((e.enabled = !0),
            setTimeout(
              function (t) {
                t.thunder();
              },
              5e3,
              this
            ))
          : ((e.enabled = !1), clearTimeout(this.thunderTimer)),
          (this.lookAtEntities = pc.app.root.findByTag("LookAt")),
          (this.birdEntities = pc.app.root.findByTag("Bird")),
          (this.checkpointEntities = pc.app.root.findByTag("Checkpoint"));
      };
      setTimeout(() => {
        //This makes the shadow work again and a bit sharper but also eats your RAM
        if (UltraShadows == 0) {
          if (EnableShadowFixes == 1) {
            if (
              pc.app.root.findByName("Light").light.shadowResolution != 16448
            ) {
              pc.app.root.findByName("Light").light.castShadows = false;
              pc.app.root.findByName("Light").light.shadowIntensity = 0.95;
              pc.app.root.findByName("Light").light.shadowUpdateMode =
                pc.SHADOWUPDATE_THISFRAME;
              pc.app.root.findByName("Light").light.shadowResolution = 16448;
              pc.app.root.findByName("Light").light.shadowDistance = 1000;
            }
          } else if (
            pc.app.root.findByName("Light").light.shadowResolution == 16448
          ) {
          }
        } else if (UltraShadows == 1) {
          if (EnableShadowFixes == 1) {
            if (
              pc.app.root.findByName("Light").light.shadowResolution != 32896
            ) {
              pc.app.root.findByName("Light").light.castShadows = false;
              console.log("Lord have mercy on your PC");
              pc.app.root.findByName("Light").light.shadowUpdateMode =
                pc.SHADOWUPDATE_REALTIME;
              pc.app.root.findByName("Light").light.shadowResolution = 32896;
              pc.app.root.findByName("Light").light.shadowDistance = 160;
            }
          } else if (
            pc.app.root.findByName("Light").light.shadowResolution == 32896
          ) {
          }
        }
        setTimeout(() => {
          if (EnableShadowFixes == 1) {
            pc.app.root.findByName("Light").light.castShadows = true;
          }
        }, 500);
      }, 1000);
    }    
  }
