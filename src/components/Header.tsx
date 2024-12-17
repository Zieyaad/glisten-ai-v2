import { createClient } from "@/prismicio";
import NavBar from "@/components/NavBar";

const client = createClient();
const Header = async () => {
  const settings = await client.getSingle("settings");
  return (
    <header>
      <NavBar settings={settings} />
    </header>
  );
};

export default Header;
