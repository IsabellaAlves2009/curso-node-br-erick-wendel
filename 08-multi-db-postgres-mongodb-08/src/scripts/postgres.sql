DROP TABLE IF EXISTS TB_HEROIS;

CREATE TABLE TB_HEROIS (
    Id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    Nome TEXT NOT NULL,
    Poder TEXT NOT NULL
)

INSERT INTO TB_HEROIS (Nome, Poder)
VALUES ('Flash', 'Speed'), ('Aquaman', 'falar com os animais'), ('Batman', 'Dinheiro')

SELECT * FROM TB_HEROIS;
SELECT * FROM TB_HEROIS WHERE NOME='Flash';