import React, { useEffect, useState } from "react";
import LeadCard from "./LeadCard";

const LeadItems = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [leads, setLeads] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["name"]);
  const [filterParam, setFilterParam] = useState(["AllLeads"]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setLeads(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // filtra o usuário ao digitar carateres
  // e ao selecionar pela empresa
  function search(leads) {
    return leads.filter((item) => {
      if (item.company.bs === filterParam) {
        return searchParam.some(
          (newItem) =>
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
        );
      } else if (filterParam == "AllLeads") {
        return searchParam.some(
          (newItem) =>
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
        );
      }
    });
  }

  //Ao clicar no botão reseta todos
  // os usuários após passar por filtragem
  function handleRepopulate() {
    setFilterParam(["AllLeads"]);
  }

  return (
    <>
      {error && (
        <div className="lead-nothing">
          <h4>Ocorreu um erro ao buscar dados</h4>
        </div>
      )}
      {!isLoaded ? (
        <div className="lead-nothing" style={{ flexDirection: "column" }}>
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <h4>Carregando...</h4>
        </div>
      ) : (
        <main className="leads-container">
          <div className="lead-inputs">
            <div className="lead-inputs__search">
              <label>Pesquisar pelo nome do cliente</label>
              <input
                type="search"
                name="search-form"
                id="search-form"
                placeholder="Pesquisar..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="lead-inputs__select">
              <label>Filtrar por categorias</label>
              <div className="lead-inputs__select--options">
                <select
                  class="form-select"
                  onChange={(e) => {
                    setFilterParam(e.target.value);
                  }}
                  aria-label="Filtrar por nome da empresa"
                >
                  {leads.map((item, i) => (
                    <option value={item.value} key={i}>
                      {item.company.bs}
                    </option>
                  ))}
                </select>
                {search(leads).length < 10 && (
                  <button onClick={handleRepopulate} type="button">
                    Limpar
                  </button>
                )}
              </div>
            </div>
          </div>

          <section>
            {search(leads).length !== 0 ? (
              <ul className="leads-grid">
                {search(leads).map((item) => (
                  <LeadCard item={item} key={item.id} />
                ))}
              </ul>
            ) : (
              <div className="lead-nothing">
                <h4>Nenhum resultado encontrado</h4>
              </div>
            )}
          </section>
        </main>
      )}
    </>
  );
};

export default LeadItems;
