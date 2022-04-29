import React, { useEffect, useState, useRef } from "react";
import LeadCard from "./LeadCard";

const AllLeads = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [leads, setLeads] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["name"]);
  const [filterParam, setFilterParam] = useState(["AllLeads"]);

  // const selectInputRef = useRef();

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
      if (item.company.name === filterParam) {
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

  console.log(search(leads).length);

  return (
    <>
      {error && (
        <div className="lead-loading">
          <h3>Ocorreu um erro ao buscar dados</h3>
        </div>
      )}
      {!isLoaded ? (
        <div className="lead-loading">
          <h3>Carregando...</h3>
        </div>
      ) : (
        // -------- container ---------- //
        <div className="leads-container">
          <div className="lead-inputs">
            <div className="lead-inputs__search">
              <label>Pesquisar pelo nome do lead</label>
              <input
                type="search"
                name="search-form"
                id="search-form"
                placeholder="Pesquisar..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            {/*------------- Select ----------*/}
            <div className="lead-inputs__select">
              <label>Pesquisar pela empresa</label>
              <div className="lead-inputs__select--options">
                <select
                  onChange={(e) => {
                    setFilterParam(e.target.value);
                  }}
                  aria-label="Filtrar por nome da empresa"
                >
                  {leads.map((item) => (
                    <option value={item.value} key={item.id}>
                      {item.company.name}
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
          <ul className="leads-grid">
            {search(leads).map((item) => (
              <LeadCard item={item} key={item.id} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default AllLeads;
