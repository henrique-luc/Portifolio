import { Center, Link, Image } from "@chakra-ui/react";
import Buy from "../../assets/Buy.png";
import Socializing from "../../assets/Socializing.png";
import Movies from "../../assets/Movies.png";

export const RecentProjects = () => {
  return (
    <Center w="90%" justifyContent="space-around">
      <Link href="https://movies-search-one.vercel.app/" isExternal>
        <Image
          w={{ base: "350px", md: "95%" }}
          h="290px"
          objectFit="cover"
          src={Movies}
          alt="Movies"
        />
      </Link>

      <Link href="https://capstone-buy-an-idea.vercel.app/" isExternal>
        <Image
          w={{ base: "350px", md: "95%" }}
          h="290px"
          objectFit="cover"
          src={Buy}
          alt="Buy An Idea"
        />
      </Link>

      <Link href="https://socializing.vercel.app/" isExternal>
        <Image
          w={{ base: "350px", md: "95%" }}
          h="290px"
          objectFit="cover"
          src={Socializing}
          alt="Socializing"
        />
      </Link>
    </Center>
  );
};
