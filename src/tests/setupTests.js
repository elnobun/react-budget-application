import Enzyme from "enzyme";
import Adaptor from "enzyme-adapter-react-16";
import DotEnv from "dotenv";

DotEnv.config({ path: ".env.test" });
Enzyme.configure({
  adapter: new Adaptor(),
});
