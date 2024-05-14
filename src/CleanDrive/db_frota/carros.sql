create table carros (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT ,
    marca VARCHAR (100) NOT NULL,
    modelo VARCHAR (100) NOT NULL,
    autonomia_km INT NOT NULL,
    capacidade INT NOT NULL,
    malas INT NOT NULL,
    valor_diaria DECIMAL (10,2) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (modelo)
);