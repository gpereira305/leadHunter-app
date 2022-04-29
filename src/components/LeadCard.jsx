import React from "react";

const LeadCard = ({ item }) => {
  return (
    <li className="fade-in">
      <h3>{item.name}</h3>
      <div>
        {/* <img src={leadImages} alt="" key={item.id} width="100px" /> */}
        <h6>
          Usuário: <small>"{item.username}"</small>
        </h6>
      </div>
      <div>
        <h6>
          Email: <small>{item.email}</small>
        </h6>
        <h6>
          Tel: <small>{item.phone.slice(0, 13)}</small>
        </h6>
      </div>
      <hr />

      {/* enderço */}
      <div>
        <h4>Endereço</h4>
        <div>
          <h6>
            Cidade: <small>{item.address.city}</small>
          </h6>
          <h6>
            Rua:{" "}
            <small>
              {item.address.street} - {item.address.suite}
            </small>
          </h6>
          <h6>
            CEP: <small>{item.address.zipcode}</small>
          </h6>
        </div>
      </div>
      <hr />

      {/* companhia */}
      <div>
        <h4>Companhia</h4>
        <div>
          <h6>
            Nome: <small>{item.company.name}</small>
          </h6>
          <h6>
            Lema da empresa: <small>"{item.company.catchPhrase}"</small>
          </h6>
          <h6>
            Serviços <small>{item.company.bs}</small>
          </h6>
        </div>
      </div>
    </li>
  );
};

export default LeadCard;
