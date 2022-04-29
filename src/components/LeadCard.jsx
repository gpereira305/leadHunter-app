import React from "react";
import leadImg from "../assets/user-lead.png";

const LeadCard = ({ item }) => {
  return (
    <li className="card lead-card fade-in">
      <div className="d-flex align-items-center lead-card__block">
        <img
          src={leadImg}
          className="lead-card__img"
          alt={item.name}
          title={item.name}
        />

        <div className="card-text lead-card__info">
          <h5>{item.name}</h5>
          <h6>
            Nome de usuário: <small>"{item.username}"</small>
          </h6>
          <h6>
            Email: <small>{item.email}</small>
          </h6>
          <h6>
            Tel: <small>{item.phone.slice(0, 13)}</small>
          </h6>
          <h6>
            Endereço:{" "}
            <small>
              {item.address.city}, {item.address.street} - {item.address.suite}{" "}
              / CEP: {item.address.zipcode}
            </small>
          </h6>
        </div>
      </div>
      <hr />

      <div className="card-text lead-card__info">
        <h5>{item.company.name}</h5>
        <h6>
          Nossos serviços <small>{item.company.bs.split(" ").join(", ")}</small>
        </h6>
        <h6 className="lead-card__info--text">
          Lema da empresa: <small>"{item.company.catchPhrase}"</small>
        </h6>
      </div>
    </li>
  );
};

export default LeadCard;
