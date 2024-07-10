//----------------------------------------------------------------//
//--------------------THIS MOD IS MADE NeXi2K---------------------//
//----------------------------------------------------------------//

pc.app.on("Map:Loaded", () => {
  setTimeout(() => {
    loadMapStuff();
  }, 2000);
});

function loadMapStuff() {
  if (pc.currentMap == "Sierra") {
    window.sierraProps = pc.app.root.findByName("Props");
    pc.app.root.findByName("Grass").enabled = false;
    pc.app.root.findByName("Bags").enabled = false;
    pc.app.root.findByName("Wood").enabled = false;
    pc.app.root.findByName("Ladders").enabled = false;
    pc.app.root.findByName("Bushes").enabled = false;
    pc.app.root.findByName("Bazaar_Props").enabled = false;
    pc.app.root.findByName("Stones").enabled = false;
    pc.app.root.findByName("Skeletons").enabled = false;
    pc.app.root.findByName("Vase_Standing").enabled = false;
    pc.app.root.findByName("Big_Red_Balcony").enabled = false;
    pc.app.root.findByName("Statues").enabled = false;
    pc.app.root.findByName("Worship").enabled = false;
    pc.app.root.findByName("Balcony_2").enabled = false;
    pc.app.root.findByName("Balcony_3").enabled = false;
    pc.app.root.findByName("Library").enabled = false;
    }
  }
