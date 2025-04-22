# Especificação do Projeto

## Perfis de Usuários


<table>
<tbody>
<tr align=center>
<th colspan="2">Doadores</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas que desejam fazer doações</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
  1. Saber sobre os pontos de coleta fixos.
  
  2. Saber informações dos endereços dos pontos de coleta.
   
  3. Saber se há possibilidade de centros de apoio para recebimento de doações.
</td>

</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Pontos de Coleta/Distribuição</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Locais fixos para recebimento e direcionamento de doações</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
  1. Realizar uma divulgação ampla desses locais.
  
  2. De ter pessoas dispostas a serem voluntárias para auxiliar na logística.
</td>

</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Receptores</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas e instituições, necessitadas das doações (Orfanatos, asilos, escolas, comunidades carentes, etc.)</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
  1. Receber as doações.
   
  2. Ter um direcionamento e informações do endereço dos pontos de coleta
</td>

</tr>
</tbody>
</table>

## Histórias de Usuários


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Doador (a). | Fazer doações. | Ganhar espaço no guarda-roupas/armário. |
| Doador (a). | Facilidade para realizar doações em pontos específicos. | Ter agilidade no processo de doação e garantia que chegue ao receptor. |
| Doador (a). | Ajudar em causas sociais | Promover e ajudar as causas sociais. |
| Pontos de Coleta/Distribuição. | Receber doações. | Auxiliar as pessoas necessitadas. |
| Pontos de Coleta/Distribuição. | Divulgar os locais de ponto de coleta. | Mais pessoas conheçam e façam doações e divulguem entre si. |
| Receptor. | Receber doações. | Atender uma necessidade básica ou urgente. |
| Receptor. | Ser informado a respeito dos pontos de coleta/distribuição. | Saber onde solicitar uma doação. |

## Requisitos do Projeto


### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF - 01 | O sistema deve permitir realizar o cadastro de doadores. | ALTA |
| RF - 02 | O sistema deve permitir realizar o cadastro de pontos de coleta/distribuição. | ALTA |
| RF - 03 | O sistema deve permitir realizar o cadastro de instituições e ONGS. | ALTA |
| RF - 04 | O sistema permitir deve registrar o endereço e informações de contato dos usuários, pontos e instituições. | ALTA |
| RF - 05 | O sistema deve permitir filtrar cadastro dos pontos de coleta/distribuição. | ALTA |
| RF - 06 | O sistema deve permitir fazer Login. | ALTA |
| RF - 07 | O sistema deve permitir exibir informações dos pontos de coleta. | ALTA |
| RF - 08 | O sistema deve permitir que os doadores insiram o voucher/código, para receber a pontuação. | BAIXA |
| RF - 09 | O sistema deve permitir exibir um mapa, com o endereço do ponto de coleta. | BAIXA |
| RF - 10 | O sistema deve permitir solicitar uma foto das roupas a serem doadas. | MÉDIA |
| RF - 11 | O sistema deve permitir a geração de voucher/código pelos pontos de coleta para serem passados aos doadores. | BAIXA |
| RF - 12 | O sistema deve permitir editar informações cadastradas anteriormente pelo usuário. | ALTA |
| RF - 13 | O sistema deve permitir que possa ser inserido a quantidade de itens doados por doador. | MÉDIA |
| RF - 14 | O sistema deve permitir fazer a buscar do endereço por CEP. | ALTA |
| RF - 15 | O sistema deve permitir que os usuários aceitem um termo de consentimento. | BAIXA |


### Requisitos não Funcionais


|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF - 01 | O sistema deve permitir que exista responsividade da aplicação. | ALTA |
| RNF - 02 | O sistema deve ser desenvolvido nas linguagens HTML, CSS e JavaScript. | ALTA |
| RNF - 03 | O sistema deve permitir a compatibilidade com navegadores Chrome, Mozilla Firefox e Microsoft Edge. | MÉDIA |
| RNF - 04 | O sistema deve uma aplicação intuitiva e visivelmente atrativa. | MÉDIA |
| RNF - 05 | A aplicação deve ser publicada em um ambiente acessível público na Internet. | ALTA |
| RFN - 06 | A aplicação não deve exibir a senha digita pelo usuário na tela. | ALTA |
| RFN - 07 | A aplicação deve armazenar as informações cadastradas em um banco de dados. | ALTA |
| RFN - 08 | O sistema deve ter capacidade de realizar conexões simultâneas. | ALTA |


