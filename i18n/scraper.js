// arithmetic skills
yml = 'gr:\n' + '  questions:\n'
for (let i = 159; i < 209; i++) {
  yml += `    ${i}:` + ' \n'
  yml += '      question: "' + $(`div#numerical-questions form[data-questionid='${i}'] p:first-child`).html() + '" \n'
  yml += `      possible_awnsers:` + ' \n'
  yml += '        0: "' + $(`div#numerical-questions form[data-questionid='${i}'] input#id_answer_0`).val() + '" \n'
  yml += '        1: "' + $(`div#numerical-questions form[data-questionid='${i}'] input#id_answer_1`).val() + '" \n'
  yml += '        2: "' + $(`div#numerical-questions form[data-questionid='${i}'] input#id_answer_2`).val() + '" \n'
  yml += '        3: "' + $(`div#numerical-questions form[data-questionid='${i}'] input#id_answer_3`).val() + '" \n'
  yml += '        4: "' + $(`div#numerical-questions form[data-questionid='${i}'] input#id_answer_4`).val() + '" \n'
  yml += '      answer: ' + $(`div#numerical-questions form[data-questionid='${i}']`).attr('data-correctanswer') + ' \n'
  yml += '      explanation: "' + $(`div#numerical-questions form[data-questionid='${i}'] div#div_id_answer p:first-child`).first().text().trimStart().trimEnd()
  yml += $(`div#numerical-questions form[data-questionid='${i}'] div#div_id_answer p:nth-child(2)`).first().text().trimStart().trimEnd()
  yml += $(`div#numerical-questions form[data-questionid='${i}'] div#div_id_answer p:nth-child(3)`).first().text().trimStart().trimEnd() + '" \n'
}
console.log(yml)

// reductive skills
function image(i,alt) {
  name = `${i}-${alt}.png`
  var a = document.createElement('a');
  a.href = $(`div#abstract-questions form[data-questionid='${i}'] img[alt='${alt}']`).first().attr('src');
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
yml = ''
// k = 0
for (let i = 159; i < 209; i++) {
  // k += 1
  yml += `    ${i}:` + ' \n'
  yml += '      question: "' + $(`div#abstract-questions form[data-questionid='${i}'] p:first-child`).html() + '" \n'
  yml += `      possible_awnsers:` + ' \n'
  yml += '        0: "' + $(`div#abstract-questions form[data-questionid='${i}'] input#id_answer_0`).val().substring(0, 1) + '" \n'
  yml += '        1: "' + $(`div#abstract-questions form[data-questionid='${i}'] input#id_answer_1`).val().substring(0, 1) + '" \n'
  yml += '        2: "' + $(`div#abstract-questions form[data-questionid='${i}'] input#id_answer_2`).val().substring(0, 1) + '" \n'
  yml += '        3: "' + $(`div#abstract-questions form[data-questionid='${i}'] input#id_answer_3`).val().substring(0, 1) + '" \n'
  yml += '        4: "' + $(`div#abstract-questions form[data-questionid='${i}'] input#id_answer_4`).val().substring(0, 1) + '" \n'
  yml += '      answer: ' + $(`div#abstract-questions form[data-questionid='${i}']`).attr('data-correctanswer') + ' \n'
  // yml += '      image_preview: "' + image(i, `${k}A`) + '" \n'
  // yml += '      image_awnser: "' + image(i, `${k}B`) + '" \n'
  yml += '      explanation: "' + $(`div#abstract-questions form[data-questionid='${i}'] div#div_id_answer p:first-child`).first().text().trimStart().trimEnd()
  yml += $(`div#abstract-questions form[data-questionid='${i}'] div#div_id_answer p:nth-child(2)`).first().text().trimStart().trimEnd()
  yml += $(`div#abstract-questions form[data-questionid='${i}'] div#div_id_answer p:nth-child(3)`).first().text().trimStart().trimEnd() + '" \n'
}
console.log(yml)

$(`div#abstract-questions form[data-questionid='${i}'] img[alt='1A']`).first().attr('src')
// alphabetical skill
yml = '  alphabetical_questions:\n'
for (let i = 159; i < 209; i++) {
  yml += `    ${i}:` + ' \n'
  yml += '      question: "' 
  yml += $(`div#verbal-questions form[data-questionid='${i}'] p:first-child`).text().trimStart().trimEnd()
  yml += $(`div#verbal-questions form[data-questionid='${i}'] p:nth-child(2)`).first().text().trimStart().trimEnd()
  yml += $(`div#verbal-questions form[data-questionid='${i}'] p:nth-child(3)`).text().trimStart().trimEnd()
  yml += $(`div#verbal-questions form[data-questionid='${i}'] p:nth-child(4)`).text().trimStart().trimEnd()
  yml += $(`div#verbal-questions form[data-questionid='${i}'] p:nth-child(5)`).text().trimStart().trimEnd()
  yml += $(`div#verbal-questions form[data-questionid='${i}'] p:nth-child(6)`).text().trimStart().trimEnd() + '" \n'
  yml += `      possible_awnsers:` + ' \n'
  yml += '        0: "' + $(`div#verbal-questions form[data-questionid='${i}'] input#id_answer_0`).val() + '" \n'
  yml += '        1: "' + $(`div#verbal-questions form[data-questionid='${i}'] input#id_answer_1`).val() + '" \n'
  yml += '        2: "' + $(`div#verbal-questions form[data-questionid='${i}'] input#id_answer_2`).val() + '" \n'
  yml += '        3: "' + $(`div#verbal-questions form[data-questionid='${i}'] input#id_answer_3`).val() + '" \n'
  yml += '        4: "' + $(`div#verbal-questions form[data-questionid='${i}'] input#id_answer_4`).val() + '" \n'
  yml += '      answer: ' + $(`div#verbal-questions form[data-questionid='${i}']`).attr('data-correctanswer') + ' \n'
  yml += '      explanation: "' + $(`div#verbal-questions form[data-questionid='${i}'] div#div_id_answer p:first-child`).first().text().trimStart().trimEnd()
  yml += $(`div#verbal-questions form[data-questionid='${i}'] div#div_id_answer p:nth-child(2)`).first().text().trimStart().trimEnd()
  yml += $(`div#verbal-questions form[data-questionid='${i}'] div#div_id_answer p:nth-child(3)`).first().text().trimStart().trimEnd() + '" \n'
}
console.log(yml)