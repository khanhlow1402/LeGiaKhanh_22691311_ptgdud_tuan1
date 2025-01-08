function tinhDiemTrungBinh(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
  }
  
  function xacDinhNguoiThang(dolphinsAvg, koalasAvg, diemToiThieu) {
    if (dolphinsAvg >= diemToiThieu && dolphinsAvg > koalasAvg) {
      console.log(`Dolphins chiến thắng với điểm trung bình là ${dolphinsAvg.toFixed(1)}!`);
    } 
    else if (koalasAvg >= diemToiThieu && koalasAvg > dolphinsAvg) {
      console.log(`Koalas chiến thắng với điểm trung bình là ${koalasAvg.toFixed(1)}!`);
    } 
    else if (dolphinsAvg === koalasAvg && dolphinsAvg >= diemToiThieu) {
      console.log(`Hòa! Cả hai đội có điểm trung bình là ${dolphinsAvg.toFixed(1)}!`);
    } 
    else {
      console.log("Không đội nào giành được cúp.");
    }
  }
  

  var dolphinsScores1 = [96, 108, 89];
  var koalasScores1 = [88, 91, 110];
  
  var dolphinsScoresBonus1 = [97, 112, 101];
  var koalasScoresBonus1 = [109, 95, 123];
  
  var dolphinsScoresBonus2 = [97, 112, 101];
  var koalasScoresBonus2 = [109, 95, 106];
  
  var diemToiThieu = 100;
  
  var dolphinsAvg1 = tinhDiemTrungBinh(dolphinsScores1);
  var koalasAvg1 = tinhDiemTrungBinh(koalasScores1);
  console.log("Data 1:");
  xacDinhNguoiThang(dolphinsAvg1, koalasAvg1, diemToiThieu);
  
  var dolphinsAvgBonus1 = tinhDiemTrungBinh(dolphinsScoresBonus1);
  var koalasAvgBonus1 = tinhDiemTrungBinh(koalasScoresBonus1);
  console.log("\nData Bonus 1:");
  xacDinhNguoiThang(dolphinsAvgBonus1, koalasAvgBonus1, diemToiThieu);
  
  var dolphinsAvgBonus2 = tinhDiemTrungBinh(dolphinsScoresBonus2);
  var koalasAvgBonus2 = tinhDiemTrungBinh(koalasScoresBonus2);
  console.log("\nData Bonus 2:");
  xacDinhNguoiThang(dolphinsAvgBonus2, koalasAvgBonus2, diemToiThieu);
  