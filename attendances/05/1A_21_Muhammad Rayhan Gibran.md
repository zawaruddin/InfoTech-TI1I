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
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int bil;
System.out.print("Masukkan sebuah bilangan: ");
bil = input.nextInt();
```

    Masukkan sebuah bilangan: 12


###  Program di atas untuk menampung data int yang diinput melalui keyboard

3. Buatlah struktur kondisi untuk mengecek apakah bilangan tersebut merupakan bilangan genap atau ganjil

    ![](images/04.png)




```Java
if(bil%2 == 0){
        System.out.println("Bilangan Genap");
}
else {
    System.out.println("Bilangan Ganjil");
}
```

    Bilangan Genap


### Program di atas untuk mengecek data yang diinput termasuk angak ganjil/genap

##### Pertanyaan
1. Modifikasi program diatas dibagian struktur pemilihannya sehingga menjadi sebagai berikut:

    ![](images/05.png)


```Java
String output = (bil % 2 == 0) ? "bilangan Genap":"Bilangan Ganjil";
System.out.println(output);

```

    bilangan Genap


### Program di atas untuk mengecek data yang diinput termasuk angaka ganjil/genap

2. Jalankan dan amatilah hasilnya!
3. Jelaskan mengapa output program yang dimodifikasi sama dengan output program sebelum dimodifikasi!

#### Percobaan 2 : Penggunaan if else

#### Waktu percobaan : 40 menit

### JAWABAN

2. Setelah dijalankan hasilnya sama dengan hasil program sebelum dimodifikasi
3. Karena sintaks tersebut merupakan shortcut dari program if else

+ Buatlah sebuah variabel nilai untuk menyimpan inputan dari keyboard

    ![](images/06.png)


```Java
int nilai;
System.out.print("Masukkan sebuah bilangan ");
nilai = input.nextInt();
```

    Masukkan sebuah bilangan 12


###  Program di atas untuk menampung data int yang diinput melalui keyboard

+ Tambahkan sebuah kondisi untuk mengecek input pada variabel nilai

    ![](images/07.png)


```Java
if(nilai >= 100){
        nilai += 10;
}
else {
    nilai -= 10;
}
System.out.println("Hasil akhir nilai adalah "+nilai);
```

    Hasil akhir nilai adalah 2


### Program di atas untuk membuat kondisi jika angka yang diinput lebih dari sama dengan 100 maka akan ditambah 10 jika selain itu maka dikurangi 10

+ Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan fungsi kode program berikut:
    
    ```
    nilai+=10;
    nilai-=10;
    ```

2. Modifikasilah program diatas dimana inputannya yang awalnya hanya satu kemudian diganti 2 inputan (misal : nilai1 dan nilai2), lakukan perhitungan rata-rata kedua nilai tersebut jika nilainya lebih dari sama dengan 100 maka dikurangi 5, sedangkan jika nilai rata-rata tersebut kurang dari 100 maka akan langsung dicetak!

### JAWABAN

1. Program di atas untuk membuat kondisi jika angka yang diinput lebih dari sama dengan 100 maka akan ditambah 10 jika selain itu maka dikurangi 10. funsi program tersebut adalah shorcut dari nilai = nilai + 10 dan nilai = nilai - 10


```Java
//No.02
int nilai1;
int nilai2;
int nilairata;
System.out.print("Masukkan sebuah bilangan pertama ");
nilai1 = input.nextInt();
System.out.print("Masukkan sebuah bilangan kedua ");
nilai2 = input.nextInt();
nilairata = (((nilai1 + nilai2) / 2));
if(nilairata >= 100){
        nilairata -= 5;
}
System.out.println("Hasil akhir nilai adalah "+nilairata);
```

    Masukkan sebuah bilangan pertama 100
    Masukkan sebuah bilangan kedua 200
    Hasil akhir nilai adalah 145


2. Program di atas untuk membuat kondisi jika angka yang diinput lebih dari sama dengan 100 maka akan dikurangi 5 jika kurang dari 100 maka lansung di tampilkan angka yang diinput

#### Percobaan 3 : Penggunaan if else-if else

#### Waktu percobaan : 40 menit

+ Tambahakan library `Scanner`
+ Buatlah deklarasi `Scanner`
+ Buat variabel umur bertipe `int`

    ![](images/08.png)


```Java
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int umur;
System.out.print("Masukkan Umur Anda ");
umur = input.nextInt();

```

    Masukkan Umur Anda 18


### Program di atas untuk menampung data int yang diinput melalui keyboard

+ Kode untuk melakukan pengecekan variabel `umur`

    ![](images/09.png)


```Java
if(umur > 60){
        System.out.print("lansia ");
}
else if(umur > 45){
        System.out.print("Tua ");
}
else if(umur > 17){
        System.out.print("Dewasa ");
}
else if(umur > 5){
        System.out.print("Anak-Anak ");
}
else{
        System.out.print("Balita ");
}
```

    Dewasa 

+ Jalankan program dan amati apa yang terjadi!

### Program diatas untuk megelompokkan umur

##### Percobaan 4 : Penggunaan switch-case

#### Waktu percobaan : 40 menit

1. Deklarasikan Scanner
1. Buatlah variabel-variabel berikut

    ![](images/10.png)


```Java
Scanner sc = new Scanner(System.in);
double angka1, angka2, hasil;
char operator;
```

### Program diatas untuk memuculkan fungsi  menginputkan data dan mendeklarasikan tipe data variabel

3. Kode program untuk meminta inputan dari keyboard

    ![](images/11.png)


```Java
System.out.print("Masukkan angka pertama: ");
angka1 = sc.nextDouble();
System.out.print("Masukkan angka kedua: ");
angka2 = sc.nextDouble();
System.out.print("Masukkan operator (+ - * /): ");
operator = sc.next().charAt(0);
```

    Masukkan angka pertama: 12
    Masukkan angka kedua: 12
    Masukkan operator (+ - * /): *


### Program diatas untuk menampung data int yang diinput dan menampung karakter unicode melalui keyboard  

4. Kode di bawah ini untuk melakukan pengecekan operator yang digunakan sebelum dilakukan operasi aritmatika

    ![](images/12.png)


```Java
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
    System.out.println("Operator yang anda masukkan salah");
}
```

    12.0 * 12.0 = 144.0


### Program diatas untuk memproses operasi hitung sesuai aritmatika operator yang diinput ke program diatas  

5. Jalankan program. Amati apa yang terjadi!

### Yang terjadi adalah operasi yang diproses sesuai yang diinput.

##### Pertanyaan
1. Jelaskan fungsi dari break dan default pada percobaan 4 diatas!
2. Jelaskan fungsi perintah kode program dibawah ini pada percobaan 4!

    ```
    operator = sc.next().chartAt(0);
    ```

### 
1. Fungsi dari break adalah agar sistem berhenti jika salah satu syarat terpenuhi
2. fungsi perintah tersebut adalah untuk menyimpan inputan berupa karakter unicode

### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program untuk menginputkan dua buah bilangan bulat, kemudian mencetak salah satu bilangan yang nilainya terbesar.
2. Perhatikan flowchart berikut ini:

![](images/02.png)

> Buatlah program sesuai dengan flowchart diatas!

3. Pada akhir semester seorang dosen menghitung nilai akhir dari mahasiswa yang terdiri dari nilai uas, uts, kuis, dan tugas. Nilai akhir didapatkan dari 40% nilai uas, 30% nilai uts, 10% nilai kuis, dan 20% nilai tugas. Jika nilai akhir dari mahasiswa dibawah 65 maka mahasiswa tersebut akan mendapatkan remidi. Buatlah program untuk membantu mengetahui mahasiswa yang mendapatkan remidi berdasarkan nilai akhir yang didapatkannya!

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
//No.01
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int umur;
System.out.print("Masukkan umur anda : ");
umur = input.nextInt();
if(umur >= 17){
    System.out.println("Boleh Berkendara");
}
else {
    System.out.println("Tidak Boleh Berkendara");
}
```

    Masukkan umur anda : 18
    Boleh Berkendara


### Program diatas untuk mengecek apakah user cukup umur untuk berkendara


```Java
//No.02
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilaiuas;
int nilaiuts;
int nilaikuis;
int nilaitugas;
int nilaiakhir;
System.out.print("Masukkan Nilai UAS   : ");
nilaiuas = input.nextInt();
System.out.print("Masukkan Nilai UTS   : ");
nilaiuts = input.nextInt();
System.out.print("Masukkan Nilai Kuis  : ");
nilaikuis = input.nextInt();
System.out.print("Masukkan Nilai Tugas : ");
nilaitugas = input.nextInt();
nilaiakhir = ((nilaiuas * 40 / 100) + (nilaiuts * 30 / 100) + (nilaikuis * 10 / 100) + (nilaitugas * 20 / 100));
System.out.println("Nilai Akhir Anda     : " + nilaiakhir );
if(nilaiakhir >= 65){
        System.out.println("Anda Tidak Mengikuti Remidi");
}
else {
    System.out.println("Anda Akan Mengikuti Remidi");
}
```

    Masukkan Nilai UAS   : 93
    Masukkan Nilai UTS   : 93
    Masukkan Nilai Kuis  : 90
    Masukkan Nilai Tugas : 95
    Nilai Akhir Anda     : 92
    Anda Tidak Mengikuti Remidi


### Program diatas untuk mengecek jika nilai akhir user lebih dari sama dengan 65 maka tidak remidi selain itu maka mengikuti remidi


```Java
//No.03
import java.util.Scanner;
Scanner input = new Scanner(System.in);
long hargabarangA ;
long jumlahbarangA;
long hargabarangB;
long jumlahbarangB;
long hargabarangC;
long jumlahbarangC;
long total;
long diskon;
long totalbayar;
System.out.print("Masukkan  Harga Barang  A  : ");
hargabarangA = input.nextLong();
System.out.print("Masukkan  Jumlah Barang A  : ");
jumlahbarangA = input.nextLong();
System.out.print("Masukkan  Harga Barang  B  : ");
hargabarangB = input.nextLong();
System.out.print("Masukkan  Jumlah Barang B  : ");
jumlahbarangB = input.nextLong();
System.out.print("Masukkan  Harga Barang  C  : ");
hargabarangC = input.nextLong();
System.out.print("Masukkan  Jumlah Barang C  : ");
jumlahbarangC = input.nextLong();
 System.out.println("---------------------------------------------");
System.out.println("                 Struk Total                  ");
 System.out.println("---------------------------------------------");
 System.out.println("Nama Barang     |     Harga     |     Jumlah     |       Total");
 System.out.format("Barang A              %s              %s            %s\n", hargabarangA, jumlahbarangA, (hargabarangA * jumlahbarangA));
 System.out.format("Barang B              %s              %s            %s\n", hargabarangB, jumlahbarangB, (hargabarangB * jumlahbarangB));
 System.out.format("Barang C              %s              %s            %s\n", hargabarangC, jumlahbarangC, (hargabarangC * jumlahbarangC));
total = ((hargabarangA * jumlahbarangA) + (hargabarangB * jumlahbarangB) + (hargabarangC * jumlahbarangC));
System.out.println("Total           : " + total);
if (total > 1000000){
diskon = (total * 10 /100);
System.out.println("Diskon          : " + diskon);}

else if(total > 500000){
diskon = (total * 5 /100);
System.out.println("Diskon          : " + diskon);}

else if (total > 200000){
diskon = (total * 2 /100);
System.out.println("Diskon          : " + diskon);}

totalbayar = (total - diskon);
System.out.println("Total Bayar     : " + totalbayar);
```

    Masukkan  Harga Barang  A  : 120000
    Masukkan  Jumlah Barang A  : 4
    Masukkan  Harga Barang  B  : 110000
    Masukkan  Jumlah Barang B  : 2
    Masukkan  Harga Barang  C  : 100000
    Masukkan  Jumlah Barang C  : 1
    ---------------------------------------------
                     Struk Total                  
    ---------------------------------------------
    Nama Barang     |     Harga     |     Jumlah     |       Total
    Barang A              120000              4            480000
    Barang B              110000              2            220000
    Barang C              100000              1            100000
    Total           : 800000
    Diskon          : 40000
    Total Bayar     : 760000


# Program diatas untuk Menghitung diskon yang jika total pembelanjaan lebih dari 200 ribu maka didiskon 2%, jika lebih dari 500 ribu maka didiskon 5%, jika pemebelanjaan lebih dari 1 juta maka didiskon 10% dan untuk menghitung total yang harus dibayar pembeli.
