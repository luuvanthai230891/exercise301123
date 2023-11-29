// const array3 = [3,2,6,9,8,7];

// //đảo ngược các phần tử của mảng
// console.log("NewArray2: ", newArray2);
// let n = array3.length;
// let center; 
// for(i = array3.length; i >= 0 ; i--){
// //mỗi lần lặp sẽ thêm phần vào cuối mảng mới
//     newArray2.push(array3[i]);
// }

// //tìm kiếm vị trí xuất hiện của 1 phần tử trong mảng, lấy dữ liệu từ trình duyệt
// let n = parseInt(prompt("Mời nhập vào n : "));
// let index = null;
// for (i = 0; i <= array3.length ; i++){
//     if (array3[i] === n){
//         index = i;
//         break;
//     } else {
//         index = -1;
//     }
// }
// if (index !== -1){
//     console.log(`Phần tử nằm ở vị trí thứ ${index}`);
// } else {
//     console.log("Không tìm thấy!");
// }
// //cho 1 mảng , hãy sắp xếp mảng đó theo thứ tự tăng dần
// for(i = 0; i < array3.length ; i++){
//     let center = 0;
//     for(j = i+1; j < array3.length ; j++)
//     if(array3[i] > array3[j])  {
//         //hoán đổi vị trí
//         center = array3[i];
//         array3[i] = array3[j] ;
//         array3[j] = center;
//     }    
// }
// console.log(array3);


//Cách tạo mảng
//Cách 1: Sử dụng đối tượng array
const array1 = newArray(1, "A", null, undefined, NaN, true);

for (let i = 0; i < array1.length; i++){
    console.log("Index", i);//vị trí
    console.log(array1[i]);// giá trị các phần tử
}

//Cách 2; khai báo theo kiểu literal
const array2 = [1,2,3,4,5];

for (i = 0; i < array2.length; i++){
    console.log(array2[i]);
}

//Từ khoá typeoff dùng để ktra kiểu dữ liệu của biến

//ktra dữ liệu mảng
console.log(Array.isArray(array1));

//ktra độ dài mảng
const arrayLength = array2.length;
console.log("độ dài của mảng:", arrayLength);

//Chuyển đổi 1 mảng thành 1 chuỗi
const arrayConvertString = array2.toString();
console.log("Mảng sau khi chuyển đổi: ", arrayConvertString);

//đảo ngược các phần tử của mảng
array2.reverse();
console.log(array2);

//Nối nhiều mảng 
const array3 = array1.concat(array2);
console.log("Mảng mới: ", array3);
//cách 2 : Toán tử spread
const array3 = [...array1,...array2];

//Cắt các phần tử trong mảng
const newArray = array3.slice(1,2);
console.log(newArray);

//cho 1 mảng danh sách giá cả 
