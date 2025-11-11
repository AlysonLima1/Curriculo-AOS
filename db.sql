CREATE TABLE pessoas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  telefone VARCHAR(20),
  curso VARCHAR(100),
  periodo VARCHAR(50),
  instituicao VARCHAR(100),
  experiencia TEXT
);

CREATE TABLE experiencias (
  id SERIAL PRIMARY KEY,
  pessoa_id INT REFERENCES pessoas(id),
  cargo VARCHAR(100),
  empresa VARCHAR(100),
  descricao TEXT
);

INSERT INTO pessoas (nome, email, telefone, curso, periodo, instituicao, experiencia)
VALUES
('Alyson Lima', 'alyson@email.com', '(81) 99999-9999', 'Sistemas para Internet', '4º período', 'UNICAP', 'Estagiário de Suporte de TI na empresa X, com experiência em manutenção e atendimento técnico.'),
('João Silva', 'joao@email.com', '(81) 98888-8888', 'Ciência da Computação', '6º período', 'UFRPE', 'Experiência em desenvolvimento web e banco de dados.');

INSERT INTO experiencias (pessoa_id, cargo, empresa, descricao) VALUES
(1, 'Estagiário de Suporte de TI', 'Empresa X', 'Atendimento técnico e manutenção de sistemas de rede.'),
(2, 'Desenvolvedor Backend', 'TechWizards', 'Criação de APIs REST com Node.js e PostgreSQL.');
