import { Center, Link, Image } from "@chakra-ui/react";
import Buy from "../../assets/Buy.png";
import KenzieHub from "../../assets/KenzieHub.png";
import NuKenzie from "../../assets/NuKenzie.png";

export const RecentProjects = () => {
  return (
    <Center w="90%" justifyContent="space-around">
      <Link
        href="https://react-entrega-s1-nu-kenzie-henrique-luc.vercel.app/"
        isExternal
      >
        <Image
          w={{ base: "350px", md: "320px" }}
          h="290px"
          objectFit="cover"
          src={NuKenzie}
          alt="NuKenzie"
        />
      </Link>

      <Link href="https://capstone-buy-an-idea.vercel.app/" isExternal>
        <Image
          w="350px"
          h="290px"
          objectFit="cover"
          src={Buy}
          alt="Buy An Idea"
        />
      </Link>

      <Link
        href="https://react-entrega-s2-kenzie-hub-henrique-luc.vercel.app/"
        isExternal
      >
        <Image
          w="350px"
          h="290px"
          objectFit="cover"
          src={KenzieHub}
          alt="KenzieHub"
        />
      </Link>
    </Center>
  );
};
