const MeusProjetos = () => {
  const lista = [
    { id: 1, nome: "Gestão de Tráfego", area: "Social Media" },
    { id: 2, nome: "Auditoria Digital", area: "Contabilidade" },
    { id: 3, nome: "Sistema React", area: "Sistemas para Internet" }
  ];

  return (
    <section id="projetos">
      {/* O segredo está aqui: centralizando o H2 e tirando ele de dentro da div dos cards */}
      <h2 style={{ textAlign: 'center', display: 'block', margin: '0 auto 20px auto' }}>
        Meus Projetos
      </h2>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {lista.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.nome}</h3>
            <p>Área: {item.area}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeusProjetos;