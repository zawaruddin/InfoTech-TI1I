## JOBSHEET 5

## PEMILIHAN 1

### Tujuan

Mahasiswa mampu menyelesaikan permasalahan/studi kasus menggunakan sintaks pemilihan 1 dan mengimplemantasikannya dalam bahasa pemrogaman java.

### Alat dan Bahan
+ PC/laptop
+ Browser(chrome, firefox, safari)
+ Koneksi internet

### Praktikum

#### Percobaan 1 : Penggunaan if

#### Waktu percobaan : 40 menit

1. Perhatikan flowchart dibawah ini!

    <p align="left">
    <img width="351" height="460" src="images/01.png">
    </p>
    

> Flowchart diatas digunakan untuk menentukan bilangan ganjil/genap, selanjutnya kita akan membuat programnya berdasarkan
> flowchart di atas!

2. Tambahkan library Scanner, deklarasi Scanner, dan buat variabel bil untuk menampung data yang diinput melalui keyboard

    ![](images/03.png)


```Java
// Ketik kode program di atas di bawah sini
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int bil;
System.out.print("Masukkan sebuah bilangan: ");
bil = input.nextInt();
```

    Masukkan sebuah bilangan: 10


3. Buatlah struktur kondisi untuk mengecek apakah bilangan tersebut merupakan bilangan genap atau ganjil

    ![](images/04.png)


```Java
// Ketik kode program di atas di bawah sini
if(bil%2 == 0){
    System.out.println("Bilangan Genap");
}else{
    System.out.println("Bilangan Ganjil");
}
```

    Bilangan Genap


##### Pertanyaan
1. Modifikasi program diatas dibagian struktur pemilihannya sehingga menjadi sebagai berikut:

    ![](images/05.png)


```Java
// Ketik kode program di atas di bawah sini
String output = (bil % 2 == 0) ? "Bilangan Genap":"Bilangan Ganjil";
System.out.println(output);
```

    Bilangan Genap


2. Jalankan dan amatilah hasilnya!

    Ketika dijalankan operator ternary sama dengan operator if-else
3. Jelaskan mengapa output program yang dimodifikasi sama dengan output program sebelum dimodifikasi!

    Karena pada dasarnya operator ternary adalah shortcut (jalan pintas) operator if-else, jadi hasilnya akan sama

#### Percobaan 2 : Penggunaan if else

#### Waktu percobaan : 40 menit

+ Buatlah sebuah variabel nilai untuk menyimpan inputan dari keyboard

    ![](images/06.png)


```Java
// Ketik kode program di atas di bawah sini
int nilai;
System.out.print("Masukkan sebuah bilangan: ");
nilai = input.nextInt();
```

    Masukkan sebuah bilangan: 12


+ Tambahkan sebuah kondisi untuk mengecek input pada variabel nilai

    ![](images/07.png)


```Java
// Ketik kode program di atas di bawah sini
if(nilai >= 100){
    nilai += 10;
}else{
    nilai -= 10;
}
System.out.println("Hasil akhir nilai adalah "+nilai);
```

    Hasil akhir nilai adalah 2


+ Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan fungsi kode program berikut:
    
    ```
    nilai+=10;
    nilai-=10;
    ```

    Sebagai operator dan nilai yang akan dijalankan kode program
2. Modifikasilah program diatas dimana inputannya yang awalnya hanya satu kemudian diganti 2 inputan (misal : nilai1 dan nilai2), lakukan perhitungan rata-rata kedua nilai tersebut jika nilainya lebih dari sama dengan 100 maka dikurangi 5, sedangkan jika nilai rata-rata tersebut kurang dari 100 maka akan langsung dicetak!

```Java
int nilai1, nilai2, nilairata;
System.out.print("Masukkan bilangan pertama: ");
nilai1 = sc.nextInt;
System.out.print("Masukkan bilangan kedua: ");
nilai2 = sc.nextInt;
nilairata = nilai1 + nilai2 / 2; 

if(nilairata >= 100){
    nilai -= 5;
}else{
    nilai += 0;
```

#### Percobaan 3 : Penggunaan if else-if else

#### Waktu percobaan : 40 menit

+ Tambahakan library `Scanner`
+ Buatlah deklarasi `Scanner`
+ Buat variabel umur bertipe `int`

    ![](images/08.png)


```Java
// Ketik kode program di atas di bawah sini
int umur;
System.out.print("Masukkan umur Anda: ");
umur = input.nextInt();
```

    Masukkan umur Anda: 18


+ Kode untuk melakukan pengecekan variabel `umur`

    ![](images/09.png)


```Java
// Ketik kode program di atas di bawah sini
if(umur > 60)
    System.out.println("Lansia");
else if (umur > 45)
    System.out.println("Tua");
else if (umur > 17)
    System.out.println("Dewasa");
else if (umur > 5)
    System.out.println("Anak-anak");
else
    System.out.println("Balita");
```

    Dewasa


+ Jalankan program dan amati apa yang terjadi!

##### Percobaan 4 : Penggunaan switch-case

#### Waktu percobaan : 40 menit

1. Deklarasikan Scanner
1. Buatlah variabel-variabel berikut

    ![](images/10.png)


```Java
// Ketik kode program di atas di bawah sini
Scanner sc = new Scanner(System.in);
double angka1, angka2, hasil;
char operator;
```

3. Kode program untuk meminta inputan dari keyboard

    ![](images/11.png)


```Java
// Ketik kode program di atas di bawah sini
System.out.print("Masukkan angka pertama: ");
angka1 = sc.nextDouble();
System.out.print("Masukkan angka kedua: ");
angka2 = sc.nextDouble();
System.out.print("Masukkan operator (+ - * /): ");
operator = sc.next().charAt(0);
```

    Masukkan angka pertama: 12
    Masukkan angka kedua: 15
    Masukkan operator (+ - * /): *


4. Kode di bawah ini untuk melakukan pengecekan operator yang digunakan sebelum dilakukan operasi aritmatika

    ![](images/12.png)


```Java
// Ketik kode program di atas di bawah sini
switch(operator){
    case '+':
    hasil = angka1 + angka2;
    System.out.println(angka1 + " + " + angka2 + " = " + hasil);
    break;
    case '-':
    hasil = angka1 - angka2;
    System.out.println(angka1 + " - " + angka2 + " = " + hasil);
    break;
    case '*':
    hasil = angka1 * angka2;
    System.out.println(angka1 + " * " + angka2 + " = " + hasil);
    break;
    case '/':
    hasil = angka1 / angka2;
    System.out.println(angka1 + " / " + angka2 + " = " + hasil);
    break;
    default:
    System.out.println("Operator yang Anda masukkan salah");
}
```

    12.0 * 15.0 = 180.0


5. Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan fungsi dari break dan default pada percobaan 4 diatas!

break : Sebagai pemisah antar kondisi

default : Apabila tidak ada kondisi Case yang memenuhi maka kode default akan dijalankan


2. Jelaskan fungsi perintah kode program dibawah ini pada percobaan 4!

    ```
    operator = sc.next().chartAt(0);
    ```

Sebagai proses pembacaan data char
### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program untuk menginputkan dua buah bilangan bulat, kemudian mencetak salah satu bilangan yang nilainya terbesar.

```Java
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int bilbul1, bilbul2;
System.out.print("Masukkan sebuah bilangan: ");
bilbul1 = input.nextInt();
System.out.print("Masukkan sebuah bilangan: ");
bilbul2 = input.nextInt();
if(bilbul1>bilbul2){
    System.out.println(bilbul1 + " adalah Bilangan Terbesar");
}else if(bilbul2>bilbul1){
    System.out.println(bilbul2 + " adalah Bilangan Terbesar");
}
```



2. Perhatikan flowchart berikut ini:

![](images/02.png)

> Buatlah program sesuai dengan flowchart diatas!
```Java
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int umur;
System.out.print("Masukkan Umur Anda: ");
umur = sc.nextInt();
String output = (umur >=17) ? "Boleh Berkendara":"Tidak Boleh Berkendara";
System.out.println(output);
```
3. Pada akhir semester seorang dosen menghitung nilai akhir dari mahasiswa yang terdiri dari nilai uas, uts, kuis, dan tugas. Nilai akhir didapatkan dari 40% nilai uas, 30% nilai uts, 10% nilai kuis, dan 20% nilai tugas. Jika nilai akhir dari mahasiswa dibawah 65 maka mahasiswa tersebut akan mendapatkan remidi. Buatlah program untuk membantu mengetahui mahasiswa yang mendapatkan remidi berdasarkan nilai akhir yang didapatkannya!
```Java
import java.util.Scanner;
Scanner input = new Scanner(System.in);
double nilaiakhir;
System.out.print("Masukkan Nilai Akhir Anda: ");
umur = sc.nextDouble();
String output = (nilaiakhir <65) ? "Remidi":"Tidak Remidi";
System.out.println(output);
```
4. Sebuah toko memberikan diskon kepada pelanggannya dengan ketentuan sebagai berikut:

| Total Belanja     | Potongan |
|-------------------|----------|
| >Rp. 200.000,00   | 2%       |
| >Rp. 500.000,00   | 5%       |
| >Rp. 1.000.000,00 | 10%      |

> Total belanja diperoleh dari pembelian tiga barang yaitu barang A, barang B, dan barang C. Ketika menginputkan harga barang juga menginputkan jumlah barang yang dibeli.

Contoh outputnya
```
Masukkan harga barang A   :100000
Masukkan jumlah barang A  :10
Masukkan harga barang B   :250000
Masukkan jumlah barang B  :5
Masukkan harga barang C   :150000
Masukkan jumlah barang C  :1
---------------------------------------------
                Struk total
---------------------------------------------
Nama Barang 	| 	Harga 	| 	Jumlah 	| 	Total
Barang A            100000         10        1000000   
Barang B            250000         5         1250000   
Barang C            150000         1         150000    
Total       :2400000
Diskon      :240000.0
Total Bayar :2160000.0
```
```Java
import java.util.Scanner;
Scanner sc = new Scanner(System.in);
double hargaA, jumlahA, hargaB, jumlahB, hargaC, jumlahC, total, diskon, totalA, totalB, totalC, totalABC, totalbayar, diskon;

System.out.print("Masukkan harga barang A   : ");
hargaA = sc.nextInt();
System.out.print("Masukkan jumlah barang A  : ");
jumlahA = sc.nextInt();
System.out.print("Masukkan harga barang B   : ");
hargaB = sc.nextInt();
System.out.print("Masukkan jumlah barang B  : ");
jumlahB = sc.nextInt();
System.out.print("Masukkan harga barang C   : ");
hargaC = sc.nextInt();
System.out.print("Masukkan jumlah barang C  : ");
jumlahC = sc.nextInt();
System.out.println("---------------------------------------------");
System.out.println("                Struk total                  ");
System.out.println("---------------------------------------------");
System.out.println("Nama Barang     | 	Harga 	| 	Jumlah 	| 	Total");
totalA = hargaA * jumlahA;
System.out.println(String.format("Barang A      %s         %s        %s", hargaA, jumlahA, totalA));
totalB = hargaB * jumlahB;
System.out.println(String.format("Barang B      %s         %s        %s", hargaB, jumlahB, totalB));
totalC = hargaC * jumlahC;
System.out.println(String.format("Barang C      %s         %s        %s", hargaC, jumlahC, totalC));
totalABC = totalA + totalB + totalC;
System.out.println("Total       : " + totalABC);
if(totalABC>=1000000){
    diskon = totalABC * 10 / 100;
    System.out.println("Diskon      : " + diskon);
}else if(totalABC>=500000){
    diskon = totalABC * 5 / 100;
    System.out.println("Diskon      : " + diskon);
}else if(totalABC>=200000){
    diskon = totalABC * 2 / 100;
    System.out.println("Diskon      : " + diskon);
}
totalbayar = totalABC - diskon;
System.out.println("Total Bayar : " + totalbayar);

```

