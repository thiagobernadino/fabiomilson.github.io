---
title: Principais comandos do MySQL
layout: post
date: 2016-04-29 19:49:21 -0300
summary: "Alguns comandos para MySql"
color: purple
image: "/img/post/tumbnails/tumbnail_mysql.png"
tags: [Banco de dados]
category: Anotações
---

# Introdução 

Neste post lhes trago um pequeno compilado de comandos usados no banco de dados MySQL para auxiliar novatos e também para os programadores esquecidos de plantão, caso deseje contribuir de sugestões la no post [via GitHub](https://github.com/fabiomilson/fabiomilson.github.io/tree/master/_posts){: .external-link}{: target="_blank"}.

---

## Comandos SQL são qualificados por 3 grupos 

``` sql
// Comandos para manipular o programa. 
DML - Data Manipulation Language.

// Comandos para definir o que irá os dados na linguagem.
DDL - Data Definition Language 

// Comandos para controlar o que acontece no banco.
DCL - Data Control Language 

// Cria um Banco de dados. 
CREATE DATABASE Nome_Banco_Dados

// Mostrar Bancos de Dados Existentes no servidor.
SHOW DATABASES 

// Server para acessar/Usar Banco de dados. 
USE Nome_Banco_Dados

// Server para criar uma tabela. 
CREATE TABLE table_name
(
	nome_columa1 tipo_dado(tamanho),
	nome_columa2 tipo_dado(tamanho),
	nome_columa3 tipo_dado(tamanho),
	....
);

// Exemplo: 

CREATE TABLE cadastro 
( 
	nome varchar(35), 
	sobrenome varchar(35) 
	....
); 

// Server para inserir registro em uma tabela. 
INSERT Nome_Tabela values()

// Lembrando que os campos irão dentro dos ()

// Exemplo: 

INSERT nomeTabela VALUES ( 
	valor1, 
	valor2 
); 

// Exemplo 2: 

INSERT INTO nomeTabela VALUES ( 
	valor1, 
	valor2 
); 

// Server para mostrar descrição tabela. 
DESCRIBE Nome_Tabela

// Server para mostrar dados de uma tabela.
SELECT Nome_Do_Campo FROM Nome_Tabela 

// No Lugar do Nome_Do_Campo, Podemos substituir por * para mostrar todos os registros.

---- Ações de delete ----

// Serve para deletar registros em uma tabela através do ID.
DELETE FROM NOME_DA_TABELA WHERE id = VALOR_DO_ID;

// Server para deletar um banco de dados. 
DROP DATABASE Nome_Banco_Dados

---- Alterar tabela ----

// Server para renomear uma tabela.
ALTER TABLE Nome_Da_Tabela RENAME Nome_Tabela_Novo 

// Server para adicionar um campo a uma tabela.
ALTER TABLE Nome_Da_Tabela ADD campo_Novo TIPO_DO_CAMPO()

// Server para adicionar uma nova coluna na tabela.
ALTER TABLE Nome_Da_Tabela ADD COLUNM NOME_COLUNA 

// Server para modificar um campo e seu tipo.
ALTER TABLE Nome_Da_Tabela MODIFY NOME_CAMPO TIPO_DO_CAMPO() 

// Serve para delimitar uma linha / quantidade de codigo em determinada área, geralmente utilizado para limitar comandos em Triggers.

// Exemplo DELIMITER $$
DELIMITER " SIMBOLO PARA DELIMITAR "


---- Triggers - Gatilhos ----

// Disparar uma ação um comando, um evento.
CREATE TRIGGER Nome_Relação AFTER INSERT ON Nome_Tabela FOR EACH ROW 
	BEGIN 
		Comandos_Que_Iram_Acontecer_Na_Trigger 
	END 

---- Gerenciar Usuários SGBD ----

// Serve para criar um usuário no SGBD.
CREATE user 'sistema'@'localhost' identified by '0401011';

// Serve para revogar todos os comandos que o usuário possa ter em um banco de dados / SGBD.
REVOKE ALL ON Banco_De_Dados.TABELA FROM 'sistema'@'localhost';

// No Lugar da TABELA, Podemos substituir por * para especificar todas as tabelas.
// Serve para garantir/adicionar algum comando para um usuário em determinado banco / tabela.
//No Lugar da TABELA, Podemos substituir por * para especificar todas as tabelas.
GRANT Comando_Para_Ser_Garantindo ON Database.TABELA TO 'sistema'@'localhost';

// Serve para limpar o buffer de privilégios salvos em memoria.
FLUSH PRIVILEGES;

---- Procedimentos ----

// Serve para criar procedimentos a serem feitos dentro do banco de dados.
CREATE PROCEDURE nomeDoProcedimento()

// Exemplo:
DELIMITER $$
	CREATE PROCEDURE nomeCidade()
	    BEGIN
            SELECT cliente.nome, cliente.bairro,telcliente.fixo
                FROM cliente,telcliente WHERE cliente.id = telcliente.idCliente;
        END$$

// Serve para chamar um procedimento.
CALL nomeDoProcedimento()

---- Procedimentos com entrada de dados
Dados serão inseridos através de uma variável ----

// Serve para criar procedimentos a serem feitos dentro do banco de dados.
CREATE PROCEDURE nomeDoProcedimento( IN Variável Tipo_de_Dado() )

// Exemplo:
	DELIMITER $$
        CREATE PROCEDURE nomeCidade( IN entradaDado VARCHAR(12)  )
	        BEGIN
	            SELECT cliente.nome, cliente.bairro,telcliente.fixo
                FROM cliente,telcliente WHERE cliente.id = telcliente.idCliente AND 
                nome LIKE concat(valorEntrada,'%');
	        END$$
//Exemplo 2:
	DELIMITER $$
		CREATE PROCEDURE venda(IN id INT)
		BEGIN
			SELECT c.nome,p.descricao,v.dtCompra FROM venda v, produto p, cliente c
		    WHERE v.id = id and v.idCliente = c.id and v.idProduto = p.id;
		END$$

---- Condições de Guarda ----

BEGIN
	IF() then
end if;

// Pesquisa por partes
// Pesquisa por pedaços, partes do nome
LIKE  'SIMBOLO_LETRA';
// Vai puxar todos os nomes que tenham um m na palavra.
// Exemplo:
	where ... and ... and like '%m%';

---- Alterações ----

Salvar dados(Salvar alterações Banco de dados) banco de dados

COMMIT; - Efetua o salvamento.

ROLLBACK; - Desfaz as ações feita no banco.
```

