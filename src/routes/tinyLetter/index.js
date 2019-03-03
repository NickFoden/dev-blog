import * as Navi from "navi";

export default Navi.route({
  title: "Tiny Letter",
  getView: () => import("./tinyLetter.js")
});
