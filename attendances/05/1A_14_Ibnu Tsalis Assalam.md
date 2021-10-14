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

    Masukkan sebuah bilangan: 17


3. Buatlah struktur kondisi untuk mengecek apakah bilangan tersebut merupakan bilangan genap atau ganjil

    ![](images/04.png)


```Java
// Ketik kode program di atas di bawah sini
if(bil % 2 == 0){
    System.out.println("Bilangan Genap");
}else{
    System.out.println("Bilangan Ganjil");
}
```

    Bilangan Ganjil


##### Pertanyaan
1. Modifikasi program diatas dibagian struktur pemilihannya sehingga menjadi sebagai berikut:

    ![](images/05.png)


```Java
// Ketik kode program di atas di bawah sini
String output = (bil % 2 == 0) ? "Bilangan Genap":"Bilangan Ganjil";
System.out.println(output);
```

    Bilangan Ganjil


2. Jalankan dan amatilah hasilnya!
3. Jelaskan mengapa output program yang dimodifikasi sama dengan output program sebelum dimodifikasi!
    - Karena program yang dimodifikasi merupakan Ternary Operator yang sama dengan syntax if...else hanya saja lebih pendek.

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

    Masukkan sebuah bilangan: 17


+ Tambahkan sebuah kondisi untuk mengecek input pada variabel nilai

    ![](images/07.png)


```Java
// Ketik kode program di atas di bawah sini
if(nilai >= 100){
    nilai += 10;
}else{
    nilai -= 10;
}
System.out.println("Hasil akhir nilai adalah " + nilai);
```

    Hasil akhir nilai adalah 7


+ Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan fungsi kode program berikut:
    
    ```
    nilai+=10;
    nilai-=10;
    ```
    - Merupakan operator assignment untuk mengoperasikan variabel nilai dengan 10
2. Modifikasilah program diatas dimana inputannya yang awalnya hanya satu kemudian diganti 2 inputan (misal : nilai1 dan nilai2), lakukan perhitungan rata-rata kedua nilai tersebut jika nilainya lebih dari sama dengan 100 maka dikurangi 5, sedangkan jika nilai rata-rata tersebut kurang dari 100 maka akan langsung dicetak!

```Java
int nilai1, nilai2;
double nilaiRerata;
/*
menggunakan tipe data int dan double untuk variabel:
nilai1(Nilai Pertama); nilai2(Nilai Kedua); nilaiRerata(Nilai rata-rata antara nilai Pertama dan Kedua);
*/

//input data nilai Pertama dan Kedua
System.out.print("Masukkan nilai pertama: ");
nilai1 = input.nextInt();
System.out.print("Masukkan nilai kedua: ");
nilai2 = input.nextInt();

//menghitung Nilai rata-rata dengan menambah nilai Pertama dan Kedua kemudian dibagi 2
nilaiRerata = (double)(nilai1 + nilai2) / 2;

if(nilaiRerata >= 100)//Nilai rata-rata lebih dari atau sama dengan 100
{
    nilaiRerata -= 5;//nilai rata rata dikurangi 5
}
System.out.println("Hasil akhir nilai adalah " + nilaiRerata);
```

    Masukkan nilai pertama: 213
    Masukkan nilai kedua: 214
    Hasil akhir nilai adalah 208.5


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

    Masukkan umur Anda: 17


+ Kode untuk melakukan pengecekan variabel `umur`

    ![](images/09.png)


```Java
// Ketik kode program di atas di bawah sini
if(umur > 60)
    System.out.println("Lansia");
else if(umur > 45)
    System.out.println("Tua");
else if(umur > 17)
    System.out.println("Dewasa");
else if(umur > 5)
    System.out.println("Anak-anak");
else
    System.out.println("Balita");
```

    Anak-anak


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

    Masukkan angka pertama: 2
    Masukkan angka kedua: 3
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

    2.0 * 3.0 = 6.0


5. Jalankan program. Amati apa yang terjadi!

##### Pertanyaan
1. Jelaskan fungsi dari break dan default pada percobaan 4 diatas!
    - break digunakan untuk mengakhiri perintah case.
    - default digunakan untuk memberi pernyataan jika hasil tidak cocok dengan case yang sudah ada

2. Jelaskan fungsi perintah kode program dibawah ini pada percobaan 4!

    ```
    operator = sc.next().chartAt(0);
    ```
   - Sebagai scanner untuk input variabel char
    

### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program untuk menginputkan dua buah bilangan bulat, kemudian mencetak salah satu bilangan yang nilainya terbesar.

```java
//import fungsi Scanner java
import java.util.Scanner;

Scanner ss = new Scanner(System.in);
int bil1, bil2;
/*
variabel ss sebagai alternatif program untuk input data
bil1(Bilangan Pertama); bil2(Bilangan Kedua);
*/

//input data Bilangan
System.out.print("Masukkan bilangan pertama: ");
bil1 = ss.nextInt();
System.out.print("Masukkan bilangan kedua: ");
bil2 = ss.nextInt();

//menggunakan sintaks pemilihan untuk menentukan bilangan terbesar
if(bil1 > bil2)//Bilangan Pertama lebih besar dari Bilangan Kedua
{
    System.out.println("Bilangan terbesar adalah " + bil1);
}
else//sebaliknya Bilangan Kedua lebih besar dari Bilangan Pertama
{
    System.out.println("Bilangan terbesar adalah " + bil2);
}
```

    Masukkan bilangan pertama: 12
    Masukkan bilangan kedua: 10
    Bilangan terbesar adalah 12


2. Perhatikan flowchart berikut ini:

![](images/02.png)

> Buatlah program sesuai dengan flowchart diatas!

```Java
//tipe data int untuk variabel umur
int umur;

//input data variabel umur
System.out.print("Masukkan umur: ");
umur = ss.nextInt();

//menggunakan sintaks pemilihan untuk menentukan boleh berkendara atau tidak
if(umur >= 17)//umur lebih besar atau sama dengan 17
{
    System.out.println("Boleh berkendara");
}
else//umur lebih kecil dari 17
{
    System.out.println("Tidak boleh berkendara");
}
```

    Masukkan umur: 12
    Tidak boleh berkendara

3. Pada akhir semester seorang dosen menghitung nilai akhir dari mahasiswa yang terdiri dari nilai uas, uts, kuis, dan tugas. Nilai akhir didapatkan dari 40% nilai uas, 30% nilai uts, 10% nilai kuis, dan 20% nilai tugas. Jika nilai akhir dari mahasiswa dibawah 65 maka mahasiswa tersebut akan mendapatkan remidi. Buatlah program untuk membantu mengetahui mahasiswa yang mendapatkan remidi berdasarkan nilai akhir yang didapatkannya!

```Java
int niUAS, niUTS, niKuis, niTugas, niAkhir;
/*
menggunakan tipe data int dengan variabel:
niUAS(Nilai UAS); niUTS(Nilai UTS); niKuis(Nilai Kuis); niTugas(Nilai Tugas); niAkhir(Nilai Akhir);
*/

//input data semua nilai
System.out.print("Masukkan nilai UAS: ");
niUAS = ss.nextInt() * 40 / 100;
System.out.print("Masukkan nilai UTS: ");
niUTS = ss.nextInt() * 30 / 100;
System.out.print("Masukkan nilai Kuis: ");
niKuis = ss.nextInt() * 10 / 100;
System.out.print("Masukkan nilai Tugas: ");
niTugas = ss.nextInt() * 20 / 100;

//menghitung Nilai Akhir dengan menjumlahkan semua Nilai
niAkhir = niUAS + niUTS + niKuis + niTugas;

//menggunakan sintaks pemilihan untuk menentukan mahasiswa remidi atau tidak
if(niAkhir < 65)//Nilai Akhir kurang dari 65
{
    System.out.println("Remidi");
}
else//Nilai Akhir lebih dari atau sama dengan 65
{
    System.out.println("Tidak remidi");
}
```

    Masukkan nilai UAS: 50
    Masukkan nilai UTS: 50
    Masukkan nilai Kuis: 90
    Masukkan nilai Tugas: 90
    Remidi

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
double hA, hjA, hB, hjB, hC, hjC, hTotal, hDiskon, hBayar;
int jA, jB, jC;
/*
menggunakan tipe data double dan int dengan variabel yang akan dimasukkan: 
hA(Harga Barang A); jA(Jumlah Barang A yang dibeli); hjA(Harga Total Barang A setelah dikali dengan Jumlahnya);
hB(Harga Barang B); jB(Jumlah Barang B yang dibeli); hjB(Harga Total Barang B setelah dikali dengan Jumlahnya);
hC(Harga Barang C); jC(Jumlah Barang C yang dibeli); hjC(Harga Total Barang C setelah dikali dengan Jumlahnya);
hTotal(Harga Total keseluruhan); hDiskon(Harga Diskon yang diperoleh); hBayar(Harga yang harus dibayar);
*/

System.out.print("Masukkan harga barang A\t: ");
hA = ss.nextDouble();
System.out.print("Masukkan jumlah barang A: ");
jA = ss.nextInt();
hjA = hA * jA;

System.out.print("Masukkan harga barang B\t: ");
hB = ss.nextDouble();
System.out.print("Masukkan jumlah barang B: ");
jB = ss.nextInt();
hjB = hB * jB;

System.out.print("Masukkan harga barang C\t: ");
hC = ss.nextDouble();
System.out.print("Masukkan jumlah barang C: ");
jC = ss.nextInt();
hjC = hC * jC;
/*
program diatas untuk memasukkan input data variabel menggunakan Scanner ss pada no.1
setelah memasukkan data, akan langsung dihitung Harga Total perBarangnya
*/

//selanjutnya menghitung Harga Total Keseluruhan dengan menjumlah semua Harga Total perBarangnya 
hTotal = hjA + hjB + hjC;

//menggunakan sintaks pemilihan untuk menentukan Harga Diskon yang diperoleh
if(hTotal > 200000)//jika Harga Total keseluruhan lebih dari 200 ribu
{
    hDiskon = hTotal * 2 / 100;//2% dari Harga total keseluruhan
}
else if(hTotal > 500000)//jika Harga Total keseluruhan lebih dari 500 ribu
{
    hDiskon = hTotal * 5 / 100;//5% dari Harga total keseluruhan
}
else if(hTotal > 1000000)//jika Harga Total keseluruhan lebih dari 1 juta
{
    hDiskon = hTotal * 10 / 100;//10% dari Harga total keseluruhan
}
else//jika Harga Total keseluruhan kurang dari 200 ribu
{
    hDiskon = 0;//tidak mendapat diskon
}

//setelah itu menghitung Harga yang harus diBayar dengan mengurangi Harga Total keseluruhan dengan Harga diskon yang diperoleh
hBayar = hTotal - hDiskon;

//output menggunakan System.out.println
System.out.println("---------------------------------------");
System.out.println("              Struk total              ");
System.out.println("---------------------------------------");
System.out.println("Nama Barang | Harga   | Jumlah | Total ");
System.out.println(String.format("Barang A     %s\t %s\t %s", hA, jA, hjA));
System.out.println(String.format("Barang A     %s\t %s\t %s", hB, jB, hjB));
System.out.println(String.format("Barang A     %s\t %s\t %s", hC, jC, hjC));
//String.format diatas digunakan untuk memasukkan data variabel ke %s didalam string yang dibuat
System.out.println("Total: " + hTotal);
System.out.println("Diskon: " + hDiskon);
System.out.println("Bayar: " + hBayar);

```

    Masukkan harga barang A : 100000
    Masukkan jumlah barang A: 1
    Masukkan harga barang B : 20000
    Masukkan jumlah barang B: 4
    Masukkan harga barang C : 30500
    Masukkan jumlah barang C: 2
    --------------------------
        Struk total        
    --------------------------
    Nama Barang | Harga   | Jumlah | Total 
    Barang A     100000.0	 1	    100000.0 
    Barang A     20000.0	 4	    80000.0 
    Barang A     30500.0	 2	    61000.0 
    Total: 241000.0
    Diskon: 4820.0
    Bayar: 236180.0
    