function lamBai(){
    let baiTap=parseInt(document.getElementById("baitap").value);
    switch (baiTap){
        //Bài 1: Chuyển từ độ C sang độ F.
        case 1:
            let c = parseFloat(prompt("Nhập độ F"));
            let kq;
            kq = c*9/5+32;
            alert("Từ "+c+" độ C"+" chuyển thành "+kq+" độ F");
        break;
        //Bài 2: Chuyển từ mét sang feet:
        case 2:
            let m = parseFloat(prompt("Nhập mét"));
            let ft;
            ft = m * 3.2808
            alert ("từ " + m + "m thành "+ Math.round(ft*100)/100 +" feet");
        break;
        //Bài 3: Tính diện tích hình vuông khi biết cạnh a.
        case 3:
            let a = parseFloat(prompt("Nhập cạnh hình vuông"));
            let sVuong;
            if (a<=0){
                alert("Nhập lại");
            }else{
                sVuong = a**2;
                alert("Diện tích hình vuông = "+sVuong+" m2");
            }
        break;
        //Bài 4: Tính diện tích hình  chữ nhật khi biết 02 cạnh a, b.
        case 4:
            let aHcn = parseFloat(prompt("Nhập cạnh a"));
            let bHcn = parseFloat(prompt("Nhập cạnh b"));
            let sHcn;
            if (aHcn<=0 || bHcn<=0){
                alert("Nhập lại");
            }else {
                sHcn = aHcn*bHcn;
                alert ("Diện tích hình chữ nhật= "+ sHcn +"m2");
            }
        break;
        // tính S tam giác vuông khi biết 2 cạnh kề . S = 1/2 * a * b
        case 5:

            let aTriangle = parseFloat(prompt("Nhập cạnh tam giác"));
            let bTriangle = parseFloat(prompt("Nhập cạnh tam giác"));
            let sTriangle;
            if (aTriangle<=0 || bTriangle<=0){
                alert("Nhập lại");
            }else{
                sTriangle = 0.5 * aTriangle * bTriangle;
                alert("Diện tich tam giac S =" + sTriangle + " m2");
            }
        break;
        //Bài 6: Giải PT bậc 1 ax+b=0
        case 6:
            let aPT  = parseFloat(prompt("Nhập a"));
            let bPT = parseFloat(prompt("Nhập b"));
            if (aPT==0 && bPT!=0){
                alert("Phương trình vô nghiệm");
            }else if (aPT==0 && bPT==0){
                alert("Phương trinh vô số nghiệm");
            }else{
                let x = -bPT/aPT;
                alert("Phương trình có nghiệm x= "+x);
            }
        break;
        //Bài 7: Giải phương trình bậc 2. ax2+bx+c=0
        case 7:
            let aPT2  = parseFloat(prompt("Nhập a"));
            let bPT2 = parseFloat(prompt("Nhập b"));
            let cPT2 = parseFloat(prompt("Nhập c"));
            if (aPT2==0){
                if (bPT2==0 && cPT2!=0){
                    alert("Phương trình vô nghiệm");
                }else if (bPT2==0 && cPT2==0){
                    alert("Phương trinh vô số nghiệm");
                }else{
                    let x2 = -cPT2/bPT2;
                    alert("Phương trình có nghiệm x= "+x2);
                }
            }else{
                let delta = bPT2**2 - (4*aPT2*cPT2)
                if (delta>0){
                    let x2_1 = (-bPT2+Math.sqrt(delta))/(2*aPT2);
                    let x2_2 = (-bPT2-Math.sqrt(delta))/(2*aPT2);
                    alert ("Phương trình có 2 nghiệm phân biệt \n x1=" +Math.round(x2_1)+ "\nx2=" + Math.round(x2_2));
                }else if (delta ==0) {
                    let x2_1=-bPT2/(2*aPT2);
                    alert("Phương trình có nghiệm kép \n x1=x2= "+x2_1);
                }else{
                    alert("Phương trình vô nghiệm");
                }
            }
        break;
        //Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không. Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hơn 0.
        case 8:
            let age = parseInt(prompt("Nhập tuổi"));
            if (age >0 && age <120 ){
                alert(age + " là tuổi của một người");
            }else{
                alert(age + " không phải tuổi của một người");
            }
        break;
        //Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác. Điều kiện để a,b,c là cạnh của một tam giác là:
        case 9:
            let a1Triangle = parseFloat(prompt("Nhập cạnh thứ 1 của tam giác"));
            let a2Triangle = parseFloat(prompt("Nhập cạnh thứ 2 của tam giác"));
            let a3Triangle = parseFloat(prompt("Nhập cạnh thứ 3 của tam giác"));
            if (a1Triangle<0 || a2Triangle <0 || a3Triangle <0){
                alert ("3 cạnh không lập thành 1 tam giác");
            }else{
                if (a1Triangle+a2Triangle>a3Triangle && a1Triangle+a3Triangle>a2Triangle && a2Triangle+a3Triangle>a1Triangle){
                    alert("3 cạnh lập thành 1 tam giác");
                }else{
                    alert ("3 cạnh không lập thành 1 tam giác");
                }
            }
        break;
        //Bài 10: Viết chương trình tính giá điện. giả sử như dưới
        /*Bậc 1 (0 đến 50kWh): 1.678 đồng/kWh
        Bậc 2 (51 đến 100kWh): 1.734 đồng/kWh
        Bậc 3 (101 đến 200 kWh): 2.014 đồng/kWh
        Bậc 4 (201 đến 300 kWh): 2.536 đồng/kWh
        Bậc 5 (301 đến 400 kWh): 2.834 đồng/kWh
        Bậc 6 (401 kWh trở lên): 2.927 đồng/kWh*/
        case 10:
            let tieu_Thu = parseInt(prompt("Nhập điện năng tiêu thụ trong tháng"));
            let gia_Dien;
            if (tieu_Thu < 0 ){
                alert("Nhập lại");
            }else{
                if(tieu_Thu>0 && tieu_Thu<=50){
                    gia_Dien = 1678 * tieu_Thu+(1678 * tieu_Thu)*10/100;
                    alert("Tiền điện bạn phải đóng cho tháng này (bao gồm VAT) là: "+gia_Dien+" đồng");
                }else if (tieu_Thu>=51 && tieu_Thu<=100){
                    gia_Dien = 1678 * 50 + (tieu_Thu - 50)*1734+(1678 * 50 + (tieu_Thu - 50)*1734)*10/100;
                    alert("Tiền điện bạn phải đóng cho tháng này (bao gồm VAT) là: "+gia_Dien+" đồng");
                }else if(tieu_Thu>=101 && tieu_Thu<=200){
                    gia_Dien = 1678 * 50 + 50*1734 +(tieu_Thu - 100)*2014+(1.678 * 50 + 50*1734 +(tieu_Thu - 100)*2014)*10/100;
                    alert("Tiền điện bạn phải đóng cho tháng này (bao gồm VAT) là: "+gia_Dien+" đồng");
                }
                else if(tieu_Thu>=201 && tieu_Thu>=300){
                    gia_Dien = 1678 * 50 + 50*1734 +100*2014+(tieu_Thu-200)*2536+(1678 * 50 + 50*1734 +100*2014+(tieu_Thu-200)*2536)*10/100;
                    alert("Tiền điện bạn phải đóng cho tháng này (bao gồm VAT) là: "+gia_Dien+" đồng");
                }else if (tieu_Thu>=301 && tieu_Thu<=400){
                    gia_Dien = 1678 * 50 + 50*1734 +100*2014+100*2536+(tieu_Thu-300)*2834+(1.678 * 50 + 50*1734 +100*2014+100*2536+(tieu_Thu-300)*2834)*10/100;
                    alert("Tiền điện bạn phải đóng cho tháng này (bao gồm VAT) là: "+gia_Dien+" đồng");
                }else{
                    gia_Dien = 1678 * 50 + 50*1734 +100*2014+100*2536+100*2834+(tieu_Thu-400)*2927+(1678 * 50 + 50*1734 +100*2014+100*2536+100*2834+(tieu_Thu-400)*2927)*10/100;
                    alert("Tiền điện bạn phải đóng cho tháng này (bao gồm VAT) là: "+gia_Dien+" đồng");
                }
            }
        break;
        //Bài 11: Viết chương trình tính thuế thu nhập cá nhân.
        case 11:
        let tong_Thunhap = parseInt(prompt("Nhập tổng thu nhập"));
        let phu_Thuoc = parseInt(prompt("số người phụ thuộc"));
        let bao_Hiem = parseInt(prompt("Số tiền đóng bảo hiểm "));
        let bao_Hiembatbuoc = bao_Hiem*(8+1.5+1)/100;
        let thuNhap_tinhthue = tong_Thunhap-11000000-phu_Thuoc*4400000-bao_Hiembatbuoc;
        let thueThunhapCN;

        if (thuNhap_tinhthue<=0){
            alert("Không phải đóng thuế")
        }else {
            if (thuNhap_tinhthue <= 5000000) {
                thueThunhapCN = thuNhap_tinhthue * 5 / 100;
            } else if (thuNhap_tinhthue > 5000000 && thuNhap_tinhthue <= 10000000) {
                thueThunhapCN = 5000000 * 5 / 100 + (thuNhap_tinhthue - 5000000) * 10 / 100;
                alert("Thuế thu nhập cá nhân phải nộp = " + thueThunhapCN + " đồng");
            } else if (thuNhap_tinhthue > 10000000 && thuNhap_tinhthue <= 18000000) {
                thueThunhapCN = 5000000 * 5 / 100 + 5000000 * 10 / 100 + (thuNhap_tinhthue - 10000000) * 15 / 100;
                alert("Thuế thu nhập cá nhân phải nộp = " + thueThunhapCN + " đồng");
            } else if (thuNhap_tinhthue > 18000000 && thuNhap_tinhthue <= 32000000) {
                thueThunhapCN = 5000000 * 5 / 100 + 5000000 * 10 / 100 + (18000000 - 10000000) * 15 / 100 + (thuNhap_tinhthue - 18000000) * 20 / 100;
                alert("Thuế thu nhập cá nhân phải nộp = " + thueThunhapCN + " đồng");
            } else if (thuNhap_tinhthue > 32000000 && thuNhap_tinhthue <= 52000000) {
                thueThunhapCN = 5000000 * 5 / 100 + 5000000 * 10 / 100 + (18000000 - 10000000) * 15 / 100 + (32000000 - 18000000) * 20 / 100 + (thuNhap_tinhthue - 32000000) * 25 / 100;
                alert("Thuế thu nhập cá nhân phải nộp = " + thueThunhapCN + " đồng");
            } else if (thuNhap_tinhthue > 52000000 && thuNhap_tinhthue <= 80000000) {
                thueThunhapCN = 5000000 * 5 / 100 + 5000000 * 10 / 100 + (18000000 - 10000000) * 15 / 100 + (32000000 - 18000000) * 20 / 100 + (52000000 - 32000000) * 25 / 100 + (thuNhap_tinhthue - 52000000) * 30 / 100;
                alert("Thuế thu nhập cá nhân phải nộp = " + thueThunhapCN + " đồng");
            } else {
                thueThunhapCN = 5000000 * 5 / 100 + 5000000 * 10 / 100 + (18000000 - 10000000) * 15 / 100 + (32000000 - 18000000) * 20 / 100 + (52000000 - 32000000) * 25 / 100 + (80000000 - 52000000) * 30 / 100 + (thuNhap_tinhthue - 80000000) * 35 / 100;
                alert("Thuế thu nhập cá nhân phải nộp = " + thueThunhapCN + " đồng");
            }
        }
        break;
        //Bài 12: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.
        // Đầu vào : số tiền ban đầu ; số tháng đầu tư, lấy 20 năm = 120 tháng; lãi suất hàng 1 năm lấy 10%
        case 12:
            let soTien_bandau = parseInt(prompt("Số tiền ban đầu bạn sẽ đầu tư"));
            let soThang= parseInt(prompt("Số tháng bạn đầu tư"));
            let lai_thang=parseInt(prompt("Nhập số lãi suất theo năm"))/12;
            let soTien_sau;
            if (soTien_bandau<=0 || soThang <= 0 || lai_thang<=0){
                alert("Nhập lại")
            }else{
                soTien_sau=soTien_bandau*(1+lai_thang/100)**soThang;
                alert("Sau "+soThang+" tháng số tiền mà bạn có được là "+ Math.round(soTien_sau)  + " đồng");
            }
        break;
    }
}