function tinh(bill) {
    var tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);
    
    var total = bill + tip;
    
    console.log(`Hóa đơn là ${bill}, tiền tip là ${tip.toFixed(2)}, và tổng cộng là ${total.toFixed(2)}`);
}
  
  tinh(275);
  tinh(40);  
  tinh(430); 
  