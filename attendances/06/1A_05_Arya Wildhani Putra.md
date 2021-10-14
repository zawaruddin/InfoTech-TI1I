## JOBSHEET 6

## PEMILIHAN 2

### Tujuan

Mahasiswa memahami tentang operator logika; Mahasiswa mampu menyelesaikan permasalahan dengan menggunakan sintaks pemilihan bersarang; Mahasiswa mampu membuat sebuah program Java yang memanfaatkan sintaks pemilihan bersarang


### Alat dan Bahan
+ PC/laptop
+ Browser(chrome, firefox, safari)
+ Koneksi internet

### Praktikum

#### Percobaan 1

#### Waktu percobaan : 40 menit

1. Tambahkan library Scanner, deklarasi Scanner

2. Buatlah variabel nilai yang memiliki tipe data int untuk menampung data yang diinput melalui keyboard

    ![](images/03.png)


```Java
// Ketik kode di siniimport java.util.Scanner;
Scanner input = new Scanner(System.in);
int nilai;
System.out.print("Masukkan nilai ujian (0-100): ");
nilai = input.nextInt();
```

    Masukkan nilai ujian (0-100): 100


3. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk memastikan bahwa nilai yang dimasukkan berada pada rentang 0 – 100. Jika nilai berada pada rentang 0 – 100, maka akan dilakukan pengecekan status kelulusan mahasiswa, yaitu jika nilai di antara 90 – 100 maka nilainya A, jika nilai di antara 80 – 89 maka nilainya B, jika nilai di antara 60 – 79 maka nilainya C, jika nilai di antara 50 – 59 maka nilainya D, dan jika nilai di antara 0 – 49 maka nilainya E. Sedangkan jika nilai berada di luar rentang 0 – 100, maka ditampilkan informasi bahwa nilai yang dimasukkan tidak valid.

    ![](images/04.png)


```Java
// Ketik kode di sini

if (nilai>= 0 && nilai <= 100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    } else if (nilai >=80 && nilai <- 89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >=60 && nilai <- 79){
        System.out.println("Nilai C, Pertahankan prestasi Anda!");
    } else if (nilai >=50 && nilai <- 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else {
        System.out.println("Nilai E, Anda tidak lulus!");
    }
        
} else {
    System.out.println("Nilai yang Anda masukkan tidak valid!");   
}
```

    Nilai A, EXCELLENT!


> Penjelasan kode program percobaan 1

##### Pertanyaan

1. Modifikasi kode program pada Percobaan 1 sehingga jika nilai yang dimasukkan kurang dari 0 akan ditampilkan output “Nilai yang Anda masukkan kurang dari 0” dan jika nilai yang dimasukkan lebih dari 100 akan ditampilkan output “Nilai yang Anda masukkan lebih dari 100”!

2. Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!

3. Ubah operator && menjadi || pada sintaks if (nilai >= 0 && nilai <= 100). Jalankan program dengan memasukkan nilai = 105. Amati apa yang terjadi! Mengapa hasilnya demikian?


```Java
// Jawaban pertanyaan 1

Scanner input = new Scanner(System.in);
double nilai;
System.out.print("Masukkan nilai ujian : ");
nilai = input.nextDouble();

if (nilai>= 0 && nilai <= 100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    } else if (nilai >=80 && nilai <- 89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >=60 && nilai <- 79){
        System.out.println("Nilai C, Pertahankan prestasi Anda!");
    } else if (nilai >=50 && nilai <- 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else {
        System.out.println("Nilai E, Anda tidak lulus!");
    }  
} else {
    if(nilai < 0){
        System.out.println("Nilai yang Anda masukkan kurang dari 0");
    } else if (nilai > 100){
        System.out.println("Nilai yang Anda masukkan lebih dari 100");
    } else {
        System.out.println("Nilai yang Anda masukkan tidak valid ");
    }
}
```

    Masukkan nilai ujian : -20
    Nilai yang Anda masukkan kurang dari 0


// Jawaban pertanyaan 2 
Jelaskan fungsi sintaks if (nilai >= 0 && nilai <= 100)!
    fungsi tersbut menjelaskan juka nilai lebih besar samadengan 0 dan nilai kurangdari samadengan 100 


```Java
// Jawaban pertanyaan 3

Scanner input = new Scanner(System.in);
int nilai;
System.out.print("Masukkan nilai ujian (0-100): ");
nilai = input.nextInt();

if (nilai>= 0 || nilai <= 100){
    if(nilai >= 90 && nilai <= 100){
        System.out.println("Nilai A, EXCELLENT!");
    } else if (nilai >=80 && nilai <- 89){
        System.out.println("Nilai B, Pertahankan prestasi Anda!");
    } else if (nilai >=60 && nilai <- 79){
        System.out.println("Nilai C, Pertahankan prestasi Anda!");
    } else if (nilai >=50 && nilai <- 59){
        System.out.println("Nilai D, Tingkatkan belajar Anda!");
    } else {
        System.out.println("Nilai E, Anda tidak lulus!");
    }
        
} else {
    System.out.println("Nilai yang Anda masukkan tidak valid!");   
}
```

    Masukkan nilai ujian (0-100): 105
    Nilai E, Anda tidak lulus!


pada penggantian operator && dengan || yang terjadi adalah 105 menjadi nilai E, bukan data yang anda masukkan tidak valid, dan kalau mengganti || maka keseluruhan ekspresi akan dianggap benar jika dibiarkan && maka satu benar maka akan dilanjutkan dengan mengevaluasi seluruh eskpresi

#### Percobaan 2

#### Waktu percobaan : 40 menit

1. Perhatikan flowchart dibawah ini!

![](images/02.png)

> Flowchart tersebut digunakan untuk menghitung gaji bersih seseorang setelah dipotong pajak sesuai dengan kategorinya (pekerja dan pebisnis) dan besarnya penghasilan. 

2. Tambahkan library Scanner dan deklarasi Scanner

3. Deklarasikan variabel kategori, penghasilan, gajiBersih, dan pajak

    ![](images/05.png)


```Java
// Ketik kode di sini

import java.util.Scanner;
Scanner input = new Scanner(System.in);
String kategori;
int penghasilan, gajiBersih;
double pajak = 0;
    
System.out.print("Masukkan kategori: ");
kategori = input.nextLine();
System.out.print("Masukkan besarnya penghasilan: ");
penghasilan = input.nextInt();

```

    Masukkan kategori: pebisnis
    Masukkan besarnya penghasilan2000000


4. Buatlah struktur pengecekan kondisi bersarang. Pengecekan pertama digunakan untuk mengecek kategori (pekerja atau pebisnis). Selanjutnya dilakukan pengecekan kedua untuk menentukan besarnya pajak berdasarkan penghasilan yang telah dimasukkan.Kemudian tambahkan kode program untuk menghitung gaji bersih yang diterima setelah dipotong pajak!

    ![](images/06.png)


```Java
// Ketik kode di sini

if(kategori.equals ("pekerja")){
     if (penghasilan <=2000000){
         pajak = 0.1;
    }  else if (penghasilan <= 3000000){
         pajak = 0.15;
    }  else {
         pajak = 2;
    }
    gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
    
} else if (kategori.equals ("pebisnis")){
    if (penghasilan <= 2500000){
        pajak = 0.15;
    }  else if (penghasilan <= 3500000){
        pajak = 0.2;
    }  else {
        pajak = 0.25;
      }
      gajiBersih = (int) (penghasilan - (penghasilan * pajak));
    System.out.println("Gaji bersih yang Anda terima: " + gajiBersih);
} else {          
    System.out.println("Kategori yang Anda masukkan salah!");    
}
```

    Gaji bersih yang Anda terima: 1700000


5. Jalankan program di atas. Amati apa yang terjadi!

> Penjelasan kode program percobaan 2

##### Pertanyaan

1. Jalankan program dengan memasukkan kategori = pekerja dan penghasilan = 2048485. Amati apa yang terjadi! Mengapa angka di belakang koma tidak ditampilkan?

2. Jelaskan fungsi dari (int) pada sintaks:
```
gajiBersih = (int) (penghasilan - (penghasilan * pajak));
```

3.	Jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Apa kegunaan dari equalsIgnoreCase?

4.	Ubah equalsIgnoreCase menjadi equals, kemudian jalankan program dengan memasukkan kategori = pebisnis dan penghasilan = 2000000. Amati apa yang terjadi! Mengapa hasilnya demikian? Apa kegunaan dari equals?

// Jawaban pertanyaan

1) yang muncul yaitu 1741221 , angka dibelakang koma tidak ditampilkan darena menggunakan tipe data Int
2) fungsi dari gajiBersih = (int) (penghasilan - (penghasilan * pajak));
yaitu sebagai penghitungan akhir yang akan menghasilkan gajibersih
3) outpunya yaitu 1700000, kegunaan equalsIgnoreCase yaitu dengan menggunakan fungsi equalsIgnoreCase(), tidak akan melihat perbandingan dari segi hurufnya, besar ataupun kecil, yang terpenting nilai yang diinputkan user, sama dengan nilai yang sebenarnya
4) perbedaanya yaitu pada huruf yang digunakan ( equals snsitif dengan penggunaan huruf jika equalsIgnoreCase tidak ,equals digunakan untuk membandingkan 2 buah variable, yang bertipe data String, jika nilai dari kedua variable tersebut mempunyai karakter yang sama, baik dari segi huruf besar, huruf kecil atau spasi maka kana benar begitu juga sebaliknya.

### Tugas

#### Waktu pengerjaan Tugas: 140 menit

1. Buatlah program kalkulator sederhana menggunakan bahasa pemrograman Java. User akan menginputkan dua buah bilangan riil dan satu buah operator aritmatika (+, -, *, atau /), kemudian program akan mengoperasikan dua bilangan tersebut dengan operator yang sesuai. Petunjuk: gunakan pernyataan switch-case.
Contoh tampilan program:

```
Masukkan bilangan pertama: 2.5
Masukkan operator (+, -, *, /): *
Masukkan bilangan kedua: 4
2.5 * 4.0 = 10.0

```


```Java
//ketik kode program dan lampirkan hasilnya disini

import java.util.Scanner;
Scanner input = new Scanner(System.in);
int bil1, bil2, hasil;
char operator;

System.out.print("Inputkan Bilangan 1 :");
bil1 = input.nextInt();
System.out.print("Inputkan Operator (+, -, , /) :");
operator = input.next().charAt(0);
System.out.print("Inputkan Bilangan 2 :");
bil2 = input.nextInt();

switch(operator) {
  case '+':
     hasil = bil1 + bil2;
    break;
  case '-':
     hasil = bil1 - bil2;
    break;
  case '*':
     hasil = bil1 * bil2;
    break;
  case '/':
     hasil = bil1 / bil2;
    break;
  default:
    System.out.print("input operator salah");
}

if(operator == '+' || operator == '-' || operator == '*' || operator == '/') {
    System.out.print("Hasil: " + hasil);
}
     








```

    Inputkan Bilangan 1 :1
    Inputkan Operator (+, -, , /) :+
    Inputkan Bilangan 2 :3
    Hasil: 4

 2. Dengan menggunakan tiga nilai yang mewakili panjang tiga sisi sebuah segitiga, tentukan apakah segitiga tersebut sama sisi (ketiga sisinya bernilai sama), sama kaki (kedua sisinya bernilai sama), atau sembarang (tidak ada sisi yang bernilai sama)! 


```Java
//ketik kode program dan lampirkan hasilnya disini

import java.util.Scanner;
Scanner input = new Scanner(System.in);
int sisi1,sisi2,sisi3;
String Hasil;
System.out.println("Masukkan sisi 1:..cm ");
sisi1 = input.nextInt();
System.out.println("Masukkan sisi 2:..cm ");
sisi2 = input.nextInt();
System.out.println("Masukkan sisi 3:..cm");
sisi3 = input.nextInt();

if(sisi1 == sisi2 && sisi1 == sisi3){
    System.out.println("Segitiga sama sisi");
} else if(sisi1 == sisi2 ){
    System.out.println("Segitiga sama kaki");
} else{
    System.out.println("Segitiga sembarang");
}
```

    Masukkan sisi 1:...cm 
    2
    Masukkan sisi 2:...cm 
    3
    Masukkan sisi 3:...cm
    4
    Segitiga sembarang


3. Warung Padang Gembira meminta Anda membuat sebuah program untuk menerima pesanan dari internet. Program yang Anda buat meminta user untuk memasukkan nama makanan dan harga. Setelah itu, user ditawarkan untuk menggunakan pengiriman ekspres. Jika pengguna menolak, maka jenis pengiriman yang digunakan adalah pengiriman reguler. Biaya pengiriman reguler untuk harga makanan kurang dari Rp 100.000 adalah Rp 20.000, sedangkan untuk harga makanan sama dengan atau lebih dari Rp 100.000 biaya pengirimannya adalah Rp 30.000. Untuk jenis pengiriman ekspres, tambahkan biaya tambahan sebesar Rp 25.000 dari standar biaya pengiriman reguler. Tampilkan struk yang berisi nama makanan yang dibeli + harga, biaya pengiriman, dan total yang harus dibayar!
Contoh hasil output program:

```
Masukkan nama makanan: Tuna salad
Masukkan harga makanan: Rp 115000
Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? 0

STRUK PEMBELIAN
Tuna salad        Rp 115000
Biaya pengiriman  Rp 30000
TOTAL             Rp 145000

```

```
Masukkan nama makanan: Beef bulgogi
Masukkan harga makanan: Rp 78000
Apakah Anda ingin pengiriman ekspres (0 = tidak, 1 = ya)? 1

STRUK PEMBELIAN
Beef bulgogi      Rp 115000
Biaya pengiriman  Rp 45000
TOTAL             Rp 123000

```




```Java
//ketik kode program dan lampirkan hasilnya disini

import java.util.Scanner;
Scanner sc = new Scanner(System.in);
String nama;
int harga, pengiriman, total, operator;

System.out.print("Masukkan nama makanan : ");
nama = sc.nextLine();
System.out.print("Masukkan harga makanan : ");
harga = sc.nextInt();
System.out.print("Apakah anda ingin pengiriman (0 = tidak, 1 = ya) : ");
operator = sc.nextInt();

if((operator == 0) || (operator == 1)){
    if((operator == 0) && (harga < 100000)){
        pengiriman = 20000;
    } else if((operator == 0) && (harga >= 100000)){
        pengiriman = 30000;
    } else if((operator == 1) && (harga < 100000)){
        pengiriman = 45000;
    } else if((operator == 1) && (harga >= 100000)){
        pengiriman = 55000;
    }
    total = harga + pengiriman;
} else {
    System.out.println("salah!");
}

System.out.println("\n");
System.out.println("Struk Pembelian");
System.out.println(nama + "\t : Rp. " + harga);
System.out.println("Biaya pengiriman : Rp. " + pengiriman);
System.out.println("Total \t : Rp. " + total);


    
```

4. Perhatikan flowchart berikut ini!

![](images/01.png)

> Buatlah program sesuai dengan flowchart diatas!


```Java
//ketik kode program dan lampirkan hasilnya disini

import java.util.Scanner;
Scanner input = new Scanner(System.in);
int umur, statusKerja, pendapatan, tanggungan;
double biayaHidup;

System.out.print("Masukkan umur anda: ");
umur = input.nextInt();
if(umur >= 18){
    System.out.print("Apakah anda memiliki pekerjaan (0 = tidak, 1 = ya) ");
    statusKerja = input.nextInt();
    if(statusKerja == 1){
        System.out.print("Masukkan pendapatan anda: Rp.");
        pendapatan = input.nextInt();
        System.out.print("Masukkan berapa tanggungan anak: ");
        tanggungan = input.nextInt();
        biayaHidup = pendapatan/tanggungan;
        if(biayaHidup < 3000000){
            System.out.print("Kemiskinan menyelimuti anda");
        }else{
            System.out.print("Kaya dari lahir");
        }
        }else if(statusKerja == 0){
            System.out.print("Kemiskinan menyelimuti anda");
        }else{
            System.out.print("input salah");
        }
}else{
    int statusSekolah;
    System.out.print("Apakah Anda berada dalam proses pendidikan (0 = tidak, 1 = ya)");
    statusSekolah = input.nextInt();
    if(statusSekolah == 1){
        System.out.print("Kaya dari lahir");
    }else if(statusSekolah == 0){
        System.out.print("Kemiskinan menyelimuti anda");
    }else{
        System.out.print("input salah");
    }
}


    
```

    Masukkan umur anda: 12
    Apakah Anda berada dalam proses pendidikan (0 = tidak, 1 = ya)1
    Kaya dari lahir


```Java

```
