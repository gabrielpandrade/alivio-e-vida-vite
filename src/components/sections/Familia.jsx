import Section from "../Section";

const Familia = () => {
  return (
    <Section id="familia">
      <h2 className="text-secondary-content bg-primary w-fit mx-auto rounded-xl font-bold py-1 px-4 text-4xl mb-20">
        Família
      </h2>
      <div className="flex flex-col lg:flex-row text-secondary-content justify-center max-w-[80dvw] sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto items-center">
        <div className="flex flex-col">
          <div className="w-[80px] h-[80px] bg-primary rounded-full mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="p-4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
          </div>
          <p className="col-span-2 text-center text-2xl p-8">
            <span className="font-bold">Ligações Semanais:</span> Comunicação
            frequente para apoio emocional.
          </p>
        </div>
        <div className="inline-block w-full h-[1px] mb-4 lg:h-[250px] lg:min-h-[1em] lg:w-0.5 self-stretch bg-neutral"></div>
        <div className="flex flex-col">
          <div className="w-[80px] h-[80px] bg-primary rounded-full mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="p-4"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
            </svg>
          </div>
          <p className="col-span-2 text-center text-2xl p-8">
            <span className="font-bold">Visitas Quinzenais:</span> Para
            fortalecer o vínculo familiar durante o tratamento.
          </p>
        </div>
        <div className="inline-block w-full h-[1px] mb-4 lg:h-[250px] lg:min-h-[1em] lg:w-0.5 self-stretch bg-neutral"></div>
        <div className="flex flex-col">
          <div className="w-[80px] h-[80px] bg-primary rounded-full mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="p-4"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
              <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
            </svg>
          </div>
          <p className="col-span-2 text-center text-2xl p-8">
            <span className="font-bold">Registro Diário:</span> Fotos e vídeos
            diários do progresso do paciente.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Familia;
