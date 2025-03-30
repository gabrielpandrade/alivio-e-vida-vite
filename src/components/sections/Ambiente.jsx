import Section from "../Section";

const Ambiente = () => {
  return (
    <Section id="ambiente">
      <h2 className="text-secondary-content bg-primary w-fit mx-auto rounded-xl font-bold py-1 px-4 text-4xl mb-20">
        Ambiente
      </h2>
      <div className="flex flex-col text-secondary-content max-w-[80dvw] sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <img
            className="w-[400px] max-h-[200px] object-cover rounded-lg"
            src="/lazer.jpg"
            alt="Lazer"
            width={600}
            height={400}
          />
          <p className="text-center p-8">
            <span className="font-bold">Lazer e conforto:</span> Espaços de
            convivência, piscina, salão de TV com canais de séries e filmes.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center">
          <img
            className="w-[400px] max-h-[200px] object-cover rounded-lg"
            src="/comida.jpg"
            alt="Lazer"
            width={600}
            height={400}
          />
          <p className="text-center p-8">
            <span className="font-bold">Alimentação Balanceada:</span> Refeições
            nutritivas para manter a saúde e o equilíbrio dos pacientes.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <img
            className="w-[400px] max-h-[200px] object-cover rounded-lg"
            src="/quartos.jpg"
            alt="Lazer"
            width={600}
            height={400}
          />
          <p className="text-center p-8">
            <span className="font-bold">Quartos Confortáveis:</span> Opções
            coletivas, privativas e Prime, com ar-condicionado e hidromassagem.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center">
          <img
            className="w-[400px] max-h-[200px] object-cover rounded-lg"
            src="/monitoramento.jpg"
            alt="Lazer"
            width={600}
            height={400}
          />
          <p className="text-center p-8">
            <span className="font-bold">Monitoramento 24h:</span> Câmeras e
            equipe sempre disponível e suporte contínuo para qualquer
            necessidade.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Ambiente;
