import Section from "../Section";

const Tratamento = () => {
  return (
    <Section id="tratamento">
      <h2 className="text-secondary-content bg-primary w-fit mx-auto rounded-xl font-bold py-1 px-4 text-4xl mb-20">
        Tratamento
      </h2>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 bg-secondary text-secondary-content max-w-[80dvw] sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto rounded-xl gap-16 text-2xl h-fit">
        <p className="text-center p-8">
          <span className="font-bold">Internamento Confortável:</span>{" "}
          Tratamento com duração flexível conforme a avaliação terapêutica.
        </p>
        <p className="text-center p-8">
          <span className="font-bold">Atendimento Personalizado:</span>{" "}
          Acompanhamento psicológico e psiquiátrico individual e em grupo.
        </p>
        <p className="col-span-2 text-center p-8 lg:px-60">
          <span className="font-bold">Apoio Contínuo:</span> Equipe de
          enfermagem e terapeutas disponíveis 24h.
        </p>
      </div>
    </Section>
  );
};

export default Tratamento;
