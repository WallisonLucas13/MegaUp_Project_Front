import Entrada from "./Entrada";
import Etapa from "./Etapa";
import PagamentoFinal from "./PagamentoFinal";

export interface ValoresServico{
    valor: number,
    valorTotalMateriais: number,
    valorFinal: number,
    desconto: number,
    entrada: Entrada,
    pagamentoFinal: PagamentoFinal,
    etapas: Etapa[]
}