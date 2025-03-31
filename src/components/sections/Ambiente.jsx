import Section from "../Section";
import { useState, useRef } from "react";
import { useEffect } from "react";

const Ambiente = () => {
  return (
    <Section id="ambiente">
      <h2 className="text-secondary-content bg-primary w-fit mx-auto rounded-xl font-bold py-1 px-4 text-4xl mb-20">
        Ambiente
      </h2>
      <div className="flex flex-col text-secondary-content max-w-[80dvw] sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <RotativeCarousel imgPaths={['/carousel/1/img_1.jpg', '/carousel/1/img_2.jpg', '/carousel/1/img_3.jpg']} />
          <p className="text-center text-2xl p-8">
            <span className="font-bold">Lazer e conforto:</span> Espaços de
            convivência, piscina, salão de TV com canais de séries e filmes.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center">
        <RotativeCarousel imgPaths={['/carousel/2/img_1.jpg', '/carousel/2/img_2.jpg', '/carousel/2/img_3.jpg']} />
          <p className="text-center text-2xl p-8">
            <span className="font-bold">Alimentação Balanceada:</span> Refeições
            nutritivas para manter a saúde e o equilíbrio dos pacientes.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
        <RotativeCarousel imgPaths={['/carousel/3/img_1.jpg', '/carousel/3/img_2.jpg']} />
          <p className="text-center text-2xl p-8">
            <span className="font-bold">Quartos Confortáveis:</span> Opções
            coletivas, privativas e Prime, com ar-condicionado e hidromassagem.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center">
        <RotativeCarousel imgPaths={['/carousel/4/img_1.jpg', '/carousel/4/img_2.jpg']} />
          <p className="text-center text-2xl p-8">
            <span className="font-bold">Monitoramento 24h:</span> Câmeras e
            equipe sempre disponível e suporte contínuo para qualquer
            necessidade.
          </p>
        </div>
      </div>
    </Section>
  );
};

const RotativeCarousel = ({ imgPaths }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalRef = useRef(null);

  const totalImages = imgPaths.length;

  useEffect(() => {
    const nextImage = () => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    };

    intervalRef.current = setInterval(nextImage, 3000);

    return () => clearInterval(intervalRef.current);
  }, [totalImages]);

  return (
    <div className="w-[300px] h-[300px] max-w-[300px] max-h-[300px] min-w-[300px] min-h-[300px]">
      <img
        src={imgPaths[currentIndex]}
        alt={`Imagem ${currentIndex + 1}`}
        width={300}
        height={300}
        className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
      />
    </div>
  );
};

export default Ambiente;
