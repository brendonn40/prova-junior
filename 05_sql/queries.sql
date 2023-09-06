A.
SELECT
    Placa,
    Nome,
    Cpf,
    Idade
FROM
    Motorista
    JOIN Viagem ON Motorista.MotoristaId = Viagem.MotoristaId
    JOIN Veiculo ON Viagem.VeiculoId = Veiculo.VeiculoId
WHERE
    ViagemId = 2;

B.
SELECT
    Nome,
    Cpf
FROM
    Motorista
    JOIN Viagem ON Motorista.MotoristaId = Viagem.MotoristaId
ORDER BY
    Nome;

C.
SELECT
    Nome
FROM
    Motorista
    JOIN Viagem ON Motorista.MotoristaId = Viagem.MotoristaId
    JOIN Veiculo ON Viagem.VeiculoId = Veiculo.VeiculoId
WHERE
    Cor IN ('Verde', 'Vermelho');