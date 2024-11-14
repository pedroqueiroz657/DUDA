function PesquisarDados(criterio) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Planilha1");
  var data = sheet.getDataRange().getValues();
  var resultado = [];
  
  // Pesquisa pelo critério
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == criterio) { // Assumindo que o número do processo está na primeira coluna
      resultado = data[i];
      break;
    }
  }
  
  if (resultado.length === 0) {
    return "Não encontrado!";
  }
  
  return resultado;
}

function SalvarDados(dados) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Planilha1");
  sheet.appendRow([dados.Campo1, dados.Campo2, dados.Campo3, dados.Campo4, dados.Campo5, dados.Campo6, dados.Campo7, dados.Campo8, dados.Campo9, dados.Campo10, dados.Campo11, dados.Campo12, dados.Campo13, dados.Campo14, dados.Campo15, dados.Campo16]);
  return "sucesso";
}

function EditarDados(dados) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Planilha1");
  var data = sheet.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == dados.Campo1) {
      sheet.getRange(i + 1, 1, 1, 16).setValues([[dados.Campo1, dados.Campo2, dados.Campo3, dados.Campo4, dados.Campo5, dados.Campo6, dados.Campo7, dados.Campo8, dados.Campo9, dados.Campo10, dados.Campo11, dados.Campo12, dados.Campo13, dados.Campo14, dados.Campo15, dados.Campo16]]);
      return "sucesso";
    }
  }
  return "não encontrado";
}
